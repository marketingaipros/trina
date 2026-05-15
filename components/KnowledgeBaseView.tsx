
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Upload, FileText, Trash2, Search, Loader2, CheckCircle, AlertCircle, Mic, MicOff, Volume2, Square } from 'lucide-react';
import * as Knowledge from '../services/knowledgeService';

interface KnowledgeBaseViewProps {
  onBack: () => void;
  authToken?: string | null;
  authUid?: string | null;
}

type UploadStatus = 'idle' | 'uploading' | 'indexing' | 'done' | 'error';

interface UploadingFile {
  name: string;
  status: UploadStatus;
  error?: string;
}

const KnowledgeBaseView: React.FC<KnowledgeBaseViewProps> = ({ onBack, authToken, authUid }) => {
  const [documents, setDocuments] = useState<Array<{ name: string; displayName: string; id?: string; fileType?: string; uploadedAt?: any }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(window.speechSynthesis);

  // Initialize Speech Recognition once
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
          setSearchQuery(prev => {
            const trimmed = prev.trim();
            return trimmed ? `${trimmed} ${finalTranscript.trim()}` : finalTranscript.trim();
          });
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    const init = async () => {
      if (authToken && authUid) {
        Knowledge.setKnowledgeAuth(authToken, authUid);
      }
      await loadDocuments();
    };
    init();
  }, [authToken, authUid]);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error("Recognition start error:", e);
      }
    }
  };

  const loadDocuments = async () => {
    try {
      setIsLoading(true);
      setGlobalError(null);
      const docs = await Knowledge.listDocuments();
      setDocuments(docs);
    } catch (e: any) {
      console.error("Failed to load documents:", e);
      setGlobalError("Trina, I couldn't load your vault documents. " + (e.message || "Please try again later."));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray: File[] = Array.from(files);

    setUploadingFiles(prev => [
      ...prev,
      ...fileArray.map(f => ({ name: f.name, status: 'uploading' as UploadStatus }))
    ]);

    for (const file of fileArray) {
      try {
        setUploadingFiles(prev =>
          prev.map(f => f.name === file.name ? { ...f, status: 'indexing' } : f)
        );

        await Knowledge.uploadDocument(file);

        setUploadingFiles(prev =>
          prev.map(f => f.name === file.name ? { ...f, status: 'done' } : f)
        );
      } catch (err: any) {
        setUploadingFiles(prev =>
          prev.map(f => f.name === file.name ? { ...f, status: 'error', error: err.message } : f)
        );
      }
    }

    await loadDocuments();

    setTimeout(() => {
      setUploadingFiles(prev => prev.filter(f => f.status !== 'done'));
    }, 3000);

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = async (docName: string, displayName: string, docId?: string) => {
  if (!docId) {
    console.warn("Cannot delete document without a valid ID.");
    return;
  }
  setDeletingId(docId);
  setGlobalError(null);
  try {
    await Knowledge.deleteDocument(docName, docId);
    await loadDocuments();
  } catch (e: any) {
    console.error("Delete failed:", e);
    setGlobalError(`Trina, I couldn't delete "${displayName}". ` + (e.message || ""));
  } finally {
    setDeletingId(null);
  }
};

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;
    
    if (isRecording) {
      recognitionRef.current.stop();
    }

    setIsSearching(true);
    setSearchResult('');
    setSearchError(null);
    
    if (synthRef.current) synthRef.current.cancel();
    setIsSpeaking(false);

    try {
      const result = await Knowledge.queryKnowledgeBase(searchQuery);
      setSearchResult(result);
      speakAnswer(result);
    } catch (err: any) {
      console.error("Search failed:", err);
      setSearchError("Trina, I had trouble finding that in your knowledge base. " + (err.message || ""));
    }
    setIsSearching(false);
  };

  const speakAnswer = (text: string) => {
    if (!synthRef.current) return;
    
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synthRef.current.getVoices();
    const barbieVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Female')) || voices[0];
    
    if (barbieVoice) utterance.voice = barbieVoice;
    utterance.pitch = 1.1;
    utterance.rate = 1.0;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return '📄';
    if (ext === 'doc' || ext === 'docx') return '📝';
    if (ext === 'xls' || ext === 'xlsx' || ext === 'csv') return '📊';
    if (ext === 'txt' || ext === 'md') return '📃';
    return '📎';
  };

  const getStatusIcon = (status: UploadStatus) => {
    switch (status) {
      case 'uploading': return <Loader2 size={14} className="animate-spin text-pink-500" />;
      case 'indexing': return <Loader2 size={14} className="animate-spin text-yellow-500" />;
      case 'done': return <CheckCircle size={14} className="text-green-500" />;
      case 'error': return <AlertCircle size={14} className="text-red-500" />;
      default: return null;
    }
  };

  const getStatusText = (status: UploadStatus) => {
    switch (status) {
      case 'uploading': return 'Uploading...';
      case 'indexing': return 'Indexing...';
      case 'done': return 'Ready';
      case 'error': return 'Failed';
      default: return '';
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Knowledge Base</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Barbie's Brain</p>
          </div>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white text-sm font-semibold rounded-xl hover:bg-pink-600 active:scale-95 transition-all shadow-lg shadow-pink-200"
        >
          <Upload size={16} />
          Upload
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.txt,.csv,.xls,.xlsx,.md,.json"
          onChange={handleFileSelect}
          className="hidden"
        />
      </header>

      {globalError && (
        <div className="p-4 bg-red-50 border-b border-red-100 flex items-start gap-3 animate-fade-in">
          <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-red-800 font-medium">{globalError}</p>
          </div>
          <button 
            onClick={() => setGlobalError(null)}
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            <Square size={14} className="rotate-45" />
          </button>
        </div>
      )}

      {uploadingFiles.length > 0 && (
        <div className="p-4 bg-pink-50 border-b border-pink-100 space-y-2">
          {uploadingFiles.map((file, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex items-center gap-3 text-sm">
                {getStatusIcon(file.status)}
                <span className="font-medium text-gray-700 truncate flex-1">{file.name}</span>
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  file.status === 'done' ? 'text-green-600' :
                  file.status === 'error' ? 'text-red-600' :
                  'text-pink-500'
                }`}>
                  {getStatusText(file.status)}
                </span>
              </div>
              {file.status === 'error' && file.error && (
                <p className="text-[10px] text-red-500 ml-7 font-medium">{file.error}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="p-4 bg-white border-b border-gray-100">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRecording ? "Listening to your question..." : "Ask Barbie anything..."}
              className={`w-full pl-10 pr-12 py-3 border rounded-xl text-sm focus:outline-none transition-all
                ${isRecording ? 'border-pink-500 ring-4 ring-pink-50 pr-12' : 'border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100'}
              `}
            />
            <button 
              type="button"
              onClick={toggleRecording}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all active:scale-95
                ${isRecording ? 'bg-pink-500 text-white shadow-lg animate-pulse' : 'bg-pink-50 text-pink-400 hover:bg-pink-100'}
              `}
            >
              {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
          </div>
          <button
            type="submit"
            disabled={isSearching || !searchQuery.trim()}
            className="px-5 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl disabled:opacity-50 hover:bg-gray-800 active:scale-95 transition-all uppercase tracking-widest"
          >
            {isSearching ? <Loader2 size={18} className="animate-spin" /> : 'Ask'}
          </button>
        </form>
        
        {searchError && (
          <div className="mt-4 p-4 bg-red-50 rounded-2xl border border-red-100 shadow-sm animate-fade-in flex items-start gap-3">
            <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-800 font-medium">{searchError}</p>
          </div>
        )}
        
        {searchResult && (
          <div className="mt-4 p-5 bg-white rounded-2xl border border-pink-100 shadow-sm animate-fade-in relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-pink-500" />
            <div className="flex justify-between items-start mb-3">
               <p className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">Executive Intelligence Response</p>
               <div className="flex gap-2">
                 {isSpeaking ? (
                   <button onClick={stopSpeaking} className="p-1.5 text-pink-500 bg-pink-50 rounded-lg hover:bg-pink-100">
                     <Square size={14} fill="currentColor" />
                   </button>
                 ) : (
                   <button onClick={() => speakAnswer(searchResult)} className="p-1.5 text-gray-400 hover:text-pink-500 bg-gray-50 hover:bg-pink-50 rounded-lg transition-colors">
                     <Volume2 size={14} />
                   </button>
                 )}
               </div>
            </div>
            <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed font-medium">{searchResult}</p>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">
          Vault Documents ({documents.length})
        </h3>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 size={32} className="animate-spin text-pink-400" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loading Vault...</p>
          </div>
        ) : documents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 opacity-40">
            <FileText size={64} strokeWidth={1} className="mb-4" />
            <p className="font-bold uppercase tracking-widest text-xs">Knowledge Base Empty</p>
          </div>
        ) : (
          documents.map((doc) => (
            <div key={doc.id || doc.name} className={`flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-pink-200 hover:shadow-md transition-all ${deletingId === doc.id ? 'opacity-50' : ''}`}>
              <div className="text-3xl flex-shrink-0 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl group-hover:bg-pink-50 transition-colors">
                {getFileIcon(doc.displayName)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">{doc.displayName}</p>
                <p className="text-[10px] font-medium text-gray-400 truncate tracking-tight">{doc.name}</p>
              </div>
              <button
                disabled={deletingId === doc.id}
                onClick={() => handleDelete(doc.name, doc.displayName, doc.id)}
                className="p-2.5 text-gray-200 hover:text-red-500 hover:bg-red-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all disabled:opacity-30"
              >
                {deletingId === doc.id ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default KnowledgeBaseView;

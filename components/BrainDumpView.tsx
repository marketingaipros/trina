
import React, { useState, useRef, useEffect } from 'react';
import { processBrainDump } from '../services/geminiService';
import { BrainCircuit, ArrowRight, Loader2, CheckCircle2, ArrowLeft, Plus, X, ListTodo, Lightbulb, AlertCircle, DollarSign, Trash2, Mic, MicOff, Eraser, FileUp, FileText, Camera, Image as ImageIcon } from 'lucide-react';
import { BrainDumpResult } from '../types';

interface BrainDumpViewProps {
  onProcessResults: (result: BrainDumpResult) => void;
  onBack: () => void;
}

type ThoughtEntry = {
  id: string;
  text: string;
  category: 'Task' | 'Idea' | 'Financial' | 'Document';
  fileName?: string;
  imageData?: string;
};

const CATEGORIES = [
  { id: 'Task', icon: ListTodo, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'Idea', icon: Lightbulb, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 'Financial', icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 'Document', icon: FileText, color: 'text-purple-500', bg: 'bg-purple-50' },
] as const;

const BrainDumpView: React.FC<BrainDumpViewProps> = ({ onProcessResults, onBack }) => {
  const [entries, setEntries] = useState<ThoughtEntry[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [currentCategory, setCurrentCategory] = useState<ThoughtEntry['category']>('Task');
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState<BrainDumpResult | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
          setCurrentText(prev => {
            const trimmed = prev.trim();
            return trimmed ? `${trimmed} ${finalTranscript.trim()}` : finalTranscript.trim();
          });
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/jpeg');
        const newEntry: ThoughtEntry = {
          id: crypto.randomUUID(),
          text: "Image Scan",
          category: 'Document',
          imageData
        };
        setEntries([newEntry, ...entries]);
        stopCamera();
      }
    }
  };

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
        if (textareaRef.current) textareaRef.current.focus();
      } catch (e) {
        console.error("Recognition start error:", e);
      }
    }
  };

  const handleAddEntry = () => {
    if (!currentText.trim()) return;
    const newEntry: ThoughtEntry = {
      id: crypto.randomUUID(),
      text: currentText.trim(),
      category: currentCategory
    };
    setEntries([newEntry, ...entries]);
    setCurrentText('');
    
    // Stop recording after adding a thought to prevent runaway input
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
    }
    
    textareaRef.current?.focus();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      
      if (file.type.startsWith('image/')) {
        reader.onload = (event) => {
          const imageData = event.target?.result as string;
          if (imageData) {
            const newEntry: ThoughtEntry = {
              id: crypto.randomUUID(),
              text: `Uploaded Image: ${file.name}`,
              category: 'Document',
              imageData,
              fileName: file.name
            };
            setEntries(prev => [newEntry, ...prev]);
          }
        };
        reader.readAsDataURL(file);
      } else {
        reader.onload = (event) => {
          const content = event.target?.result as string;
          if (content) {
            const newEntry: ThoughtEntry = {
              id: crypto.randomUUID(),
              text: content,
              category: 'Document',
              fileName: file.name
            };
            setEntries(prev => [newEntry, ...prev]);
          }
        };
        reader.readAsText(file);
      }
    });
    
    // Reset input
    e.target.value = '';
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  const handleProcess = async () => {
    if (entries.length === 0 && !currentText.trim()) return;
    
    setLoading(true);
    try {
      // If there's pending text, add it automatically
      let finalEntries = [...entries];
      if (currentText.trim()) {
        finalEntries = [{ id: 'pending', text: currentText.trim(), category: currentCategory }, ...finalEntries];
      }
      
      const data = await processBrainDump(finalEntries);
      setResult(data as BrainDumpResult);
      onProcessResults(data as BrainDumpResult);
    } catch (error) {
      alert("Failed to organize thoughts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setEntries([]);
    setCurrentText('');
    setResult(null);
  };

  if (result) {
    return (
      <div className="h-full flex flex-col bg-[#fff5f7]">
        <header className="p-6 bg-white border-b border-pink-100 flex items-center justify-between">
             <button onClick={onBack} className="text-pink-400 flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                 <ArrowLeft size={16} /> Back
             </button>
             <div className="text-pink-500 font-black tracking-tighter text-xl">MAOS v3 RESULT</div>
        </header>
        <div className="flex-1 overflow-y-auto no-scrollbar p-6">
          <div className="text-center mb-8">
            <div className="inline-flex p-5 bg-green-50 text-green-500 rounded-full mb-4 shadow-sm">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">System Updated</h2>
            <p className="text-gray-500 mt-2 font-medium">Barbie has organized your factory logs.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-pink-100 text-gray-800 leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <BrainCircuit size={80} className="text-pink-500" />
              </div>
              <span className="text-xs font-black text-pink-500 uppercase tracking-[0.2em] block mb-3">Executive Summary</span>
              <p className="text-lg font-medium italic">"{result.analysis}"</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-5 rounded-2xl border border-pink-50 shadow-sm text-center">
                  <div className="text-3xl font-black text-gray-900">{result.tasks.length}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Tasks Added</div>
               </div>
               <div className="bg-white p-5 rounded-2xl border border-pink-50 shadow-sm text-center">
                  <div className="text-3xl font-black text-gray-900">{result.transactions.length}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Financial Updates</div>
               </div>
            </div>
          </div>
          
          <button
            onClick={reset}
            className="w-full mt-10 py-4 bg-gray-900 text-white font-black rounded-2xl shadow-xl hover:bg-gray-800 transition-all uppercase tracking-[0.2em] active:scale-95"
          >
            Start New Dump
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[#fff5f7]">
      <header className="flex items-center justify-between p-6 bg-white border-b border-pink-100">
        <div className="flex items-center gap-4">
            <button 
                onClick={onBack}
                className="p-2 -ml-2 text-pink-300 hover:text-pink-500 rounded-full transition-colors"
            >
                <ArrowLeft size={24} />
            </button>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-2">
                  <BrainCircuit className="text-pink-500" size={24}/>
                  Brain Dump
              </h1>
              <p className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">Thought Collector • MAOS v3</p>
            </div>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col p-6 overflow-hidden">
        {/* Entry Form */}
        <div className={`bg-white rounded-[2.5rem] shadow-2xl p-6 border transition-all duration-300 mb-6 flex flex-col gap-4 relative
          ${isRecording ? 'border-pink-400 ring-4 ring-pink-50' : 'border-pink-50'}
        `}>
          <div className="relative group">
            <textarea
              ref={textareaRef}
              className="w-full h-32 resize-none text-xl font-medium text-gray-800 placeholder-gray-200 border-none focus:ring-0 p-0 no-scrollbar pr-12"
              placeholder={isRecording ? "Listening to your thoughts..." : "What's on your mind, Trina?"}
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  handleAddEntry();
                }
              }}
            />
            
            {/* Action Buttons in Textarea area */}
            <div className="absolute top-0 right-0 flex flex-col gap-2">
              <button 
                onClick={toggleRecording}
                className={`p-3 rounded-full transition-all active:scale-95 shadow-sm
                  ${isRecording ? 'bg-pink-500 text-white animate-pulse' : 'bg-pink-50 text-pink-400 hover:bg-pink-100'}
                `}
                title={isRecording ? "Stop Voice Input" : "Start Voice Input"}
              >
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="p-3 bg-purple-50 text-purple-400 hover:bg-purple-100 rounded-full transition-all active:scale-95 shadow-sm"
                title="Upload Document"
              >
                <FileUp size={20} />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                className="hidden" 
                multiple
                accept=".txt,.md,.json,.csv,image/*"
              />
              {currentText && (
                <button 
                  onClick={() => setCurrentText('')}
                  className="p-3 bg-gray-50 text-gray-300 hover:text-red-400 rounded-full transition-all active:scale-95 shadow-sm"
                  title="Clear Text"
                >
                  <Eraser size={20} />
                </button>
              )}
              <button 
                onClick={startCamera}
                className="p-3 bg-blue-50 text-blue-400 hover:bg-blue-100 rounded-full transition-all active:scale-95 shadow-sm"
                title="Scan Document"
              >
                <Camera size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-pink-50">
            <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-2 pb-1">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = currentCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCurrentCategory(cat.id as ThoughtEntry['category'])}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border-2
                      ${isActive 
                        ? `${cat.bg} ${cat.color} border-pink-500 scale-105 shadow-md` 
                        : 'bg-white text-gray-400 border-gray-50 opacity-60 hover:opacity-100'}
                    `}
                  >
                    <Icon size={14} />
                    {cat.id}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={handleAddEntry}
              disabled={!currentText.trim()}
              className="w-full py-4 bg-pink-500 text-white font-black rounded-2xl shadow-lg hover:bg-pink-600 disabled:opacity-30 disabled:grayscale transition-all flex items-center justify-center gap-2 active:scale-95 uppercase tracking-widest"
            >
              <Plus size={20} />
              Add Thought
            </button>
          </div>
        </div>

        {/* Entries List */}
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 pb-32">
          {entries.length === 0 && !currentText.trim() ? (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-30 grayscale">
              <BrainCircuit size={64} className="text-pink-300 mb-4" />
              <p className="text-sm font-bold uppercase tracking-widest text-pink-400">Collector Empty</p>
            </div>
          ) : (
            entries.map((entry) => {
              const catInfo = CATEGORIES.find(c => c.id === entry.category)!;
              const Icon = catInfo.icon;
              return (
                <div 
                  key={entry.id} 
                  className="bg-white p-4 rounded-2xl shadow-sm border border-pink-50 animate-fade-in group relative"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${catInfo.bg} ${catInfo.color} p-2 rounded-xl flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 pr-8">
                       <div className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-1">
                         {entry.category} {entry.fileName && `• ${entry.fileName}`}
                       </div>
                       {entry.imageData ? (
                         <div className="mt-2 rounded-lg overflow-hidden border border-pink-100 max-w-[120px]">
                           <img src={entry.imageData} alt="Scan" className="w-full h-auto" />
                         </div>
                       ) : (
                         <p className="text-sm font-medium text-gray-700 leading-relaxed line-clamp-3">{entry.text}</p>
                       )}
                    </div>
                    <button 
                      onClick={() => removeEntry(entry.id)}
                      className="absolute top-4 right-4 text-gray-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Process Button Overlay */}
        <div className="absolute bottom-10 left-6 right-6 z-20">
          <button
              onClick={handleProcess}
              disabled={loading || (entries.length === 0 && !currentText.trim())}
              className="w-full py-5 bg-gray-900 text-white font-black rounded-2xl shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 transition-all hover:bg-black active:scale-95 uppercase tracking-[0.25em]"
          >
              {loading ? <Loader2 className="animate-spin" /> : <>Organize System <ArrowRight size={20} /></>}
          </button>
        </div>
      </div>

      {/* Camera Modal */}
      {cameraActive && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col">
          <div className="flex-1 relative flex items-center justify-center">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={stopCamera}
              className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md text-white rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-10 flex items-center justify-center bg-black">
            <button 
              onClick={captureImage}
              className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center p-1"
            >
              <div className="w-full h-full bg-white rounded-full active:scale-90 transition-transform" />
            </button>
          </div>
          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}
    </div>
  );
};

export default BrainDumpView;

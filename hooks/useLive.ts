import { useCallback, useState } from 'react';

interface UseLiveProps {
  onToolCall: (name: string, args: any) => Promise<any>;
}

export function useLive(_props: UseLiveProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(0);
  const [micError, setMicError] = useState<string | null>(null);

  const disconnect = useCallback(async () => {
    setIsConnected(false);
    setIsSpeaking(false);
    setVolume(0);
  }, []);

  const connect = useCallback(async () => {
    setIsConnected(false);
    setIsSpeaking(false);
    setVolume(0);
    setMicError("Microphone is unavailable. Please type your message below.");
  }, []);

  return { connect, disconnect, isConnected, isSpeaking, volume, micError };
}

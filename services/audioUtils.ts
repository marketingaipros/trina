// Audio Utilities for Gemini Live API

export function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function float32ToInt16(float32Array: Float32Array): Int16Array {
  const int16Array = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    let s = Math.max(-1, Math.min(1, float32Array[i]));
    int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
  }
  return int16Array;
}

export async function decodeAudioData(
  base64String: string,
  audioContext: AudioContext
): Promise<AudioBuffer> {
  const uint8Array = base64ToUint8Array(base64String);
  const int16Array = new Int16Array(uint8Array.buffer);
  
  // Gemini returns raw PCM 24kHz mono
  // We need to convert it to AudioBuffer
  const sampleRate = 24000;
  const channels = 1;
  const frameCount = int16Array.length;
  
  const audioBuffer = audioContext.createBuffer(channels, frameCount, sampleRate);
  const channelData = audioBuffer.getChannelData(0);
  
  for (let i = 0; i < frameCount; i++) {
    channelData[i] = int16Array[i] / 32768.0;
  }
  
  return audioBuffer;
}

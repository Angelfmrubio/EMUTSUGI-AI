
import { Button } from "@/components/ui/button";
import { Mic, Upload, MicOff, File } from "lucide-react";
import { toast } from "sonner";
import { useRef, useState } from "react";

interface AudioInputProps {
  onAudioRecorded: (blob: Blob) => void;
  onAudioFileSelected: (file: File) => void;
}

export const AudioInput = ({ onAudioRecorded, onAudioFileSelected }: AudioInputProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
        onAudioRecorded(audioBlob);
        toast.success("Audio grabado correctamente");
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);
      toast.info("Grabando audio...");
    } catch (error) {
      console.error("Error al acceder al micrófono:", error);
      toast.error("No se pudo acceder al micrófono. Verifica los permisos.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('audio/')) {
        setAudioFile(file);
        onAudioFileSelected(file);
        setAudioBlob(null);
        toast.success(`Audio "${file.name}" subido correctamente`);
      } else {
        toast.error("Por favor sube un archivo de audio válido");
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button 
        variant="outline" 
        className="gap-2"
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? (
          <>
            <MicOff className="w-4 h-4" />
            Detener Grabación
          </>
        ) : (
          <>
            <Mic className="w-4 h-4" />
            Grabar Voz
          </>
        )}
      </Button>
      
      <label htmlFor="audio-upload" className="cursor-pointer">
        <div className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md hover:bg-neutral-50">
          <Upload className="w-4 h-4" />
          <span>Subir Audio</span>
        </div>
        <input
          id="audio-upload"
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={handleAudioUpload}
        />
      </label>
      
      {(audioBlob || audioFile) && (
        <div className="w-full flex items-center gap-2 p-2 border border-gold-200 bg-gold-50 rounded-md">
          <File className="w-4 h-4 text-gold-500" />
          <span className="text-sm text-neutral-700">
            {audioFile ? audioFile.name : "Audio grabado"}
          </span>
        </div>
      )}
    </div>
  );
};

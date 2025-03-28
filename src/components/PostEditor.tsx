
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bold, Italic, Link, AtSign, Hash, Send, Image } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PostEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export default function PostEditor({ value, onChange, onSend, isLoading }: PostEditorProps) {
  const { toast } = useToast();
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);
  
  const handleTextareaSelect = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;
    setSelectionStart(textarea.selectionStart);
    setSelectionEnd(textarea.selectionEnd);
  };

  const applyFormatting = (prefix: string, suffix: string = prefix) => {
    const newText = 
      value.substring(0, selectionStart) + 
      prefix + 
      value.substring(selectionStart, selectionEnd) + 
      suffix + 
      value.substring(selectionEnd);
    
    onChange(newText);
  };

  const handleBold = () => applyFormatting("**");
  const handleItalic = () => applyFormatting("*");
  const handleLink = () => {
    const selectedText = value.substring(selectionStart, selectionEnd);
    const replacement = selectedText ? `[${selectedText}](url)` : "[Link text](url)";
    
    if (selectedText) {
      const newText = 
        value.substring(0, selectionStart) + 
        replacement + 
        value.substring(selectionEnd);
      
      onChange(newText);
    } else {
      const newText = 
        value.substring(0, selectionStart) + 
        replacement + 
        value.substring(selectionStart);
      
      onChange(newText);
    }
  };

  const handleHashtag = () => {
    const newText = 
      value.substring(0, selectionStart) + 
      "#" + 
      value.substring(selectionStart);
    
    onChange(newText);
  };

  const handleMention = () => {
    const newText = 
      value.substring(0, selectionStart) + 
      "@" + 
      value.substring(selectionStart);
    
    onChange(newText);
  };

  const handleImageUpload = () => {
    toast({
      title: "Coming Soon!",
      description: "Image uploads will be available in a future update.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-cool p-[1px] rounded-lg">
        <div className="bg-background rounded-lg">
          <div className="flex items-center p-2 border-b">
            <Button 
              onClick={handleBold} 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-md"
              type="button"
            >
              <Bold size={18} />
            </Button>
            <Button 
              onClick={handleItalic} 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-md"
              type="button"
            >
              <Italic size={18} />
            </Button>
            <Button 
              onClick={handleLink} 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-md"
              type="button"
            >
              <Link size={18} />
            </Button>
            <div className="h-4 w-px bg-border mx-1" />
            <Button 
              onClick={handleHashtag} 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-md"
              type="button"
            >
              <Hash size={18} />
            </Button>
            <Button 
              onClick={handleMention} 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-md"
              type="button"
            >
              <AtSign size={18} />
            </Button>
            <div className="h-4 w-px bg-border mx-1" />
            <Button 
              onClick={handleImageUpload} 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-md ml-auto"
              type="button"
            >
              <Image size={18} />
            </Button>
          </div>
          <Textarea 
            placeholder="What's on your mind? Create a post for multiple platforms..."
            className="border-0 resize-none min-h-[150px] rounded-t-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onSelect={handleTextareaSelect}
          />
        </div>
      </div>
      
      <Button 
        onClick={onSend} 
        className="w-full bg-gradient-vibrant hover:opacity-90 transition-opacity"
        disabled={isLoading}
      >
        {isLoading ? "Preparing posts..." : "Create Posts"}
        <Send size={16} className="ml-2" />
      </Button>
    </div>
  );
}

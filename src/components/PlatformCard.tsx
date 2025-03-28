
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  CheckCircle, 
  AlertCircle 
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  platform: "twitter" | "facebook" | "instagram" | "linkedin";
  isEnabled: boolean;
  onChange: (enabled: boolean) => void;
  content: string;
  characterLimit: number;
}

export default function PlatformCard({
  platform,
  isEnabled,
  onChange,
  content,
  characterLimit,
}: PlatformCardProps) {
  const platformDetails = {
    twitter: {
      name: "X (Twitter)",
      icon: <Twitter size={24} className="text-platforms-twitter" />,
      cardClass: "platform-card-twitter",
      contentLabel: "Tweet",
      backgroundColor: "bg-platforms-twitter/5",
    },
    facebook: {
      name: "Facebook",
      icon: <Facebook size={24} className="text-platforms-facebook" />,
      cardClass: "platform-card-facebook",
      contentLabel: "Post",
      backgroundColor: "bg-platforms-facebook/5",
    },
    instagram: {
      name: "Instagram",
      icon: <Instagram size={24} className="text-platforms-instagram" />,
      cardClass: "platform-card-instagram",
      contentLabel: "Caption",
      backgroundColor: "bg-platforms-instagram/5",
    },
    linkedin: {
      name: "LinkedIn",
      icon: <Linkedin size={24} className="text-platforms-linkedin" />,
      cardClass: "platform-card-linkedin",
      contentLabel: "Post",
      backgroundColor: "bg-platforms-linkedin/5",
    },
  };

  const { name, icon, cardClass, contentLabel, backgroundColor } = platformDetails[platform];
  const characterCount = content.length;
  const isOverLimit = characterCount > characterLimit;

  return (
    <Card className={cn("platform-card", cardClass, isEnabled ? "opacity-100" : "opacity-60")}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold">{name}</h3>
        </div>
        <Switch 
          checked={isEnabled} 
          onCheckedChange={onChange} 
        />
      </div>
      
      {isEnabled && (
        <>
          <div className={cn("p-4 rounded-lg mb-3", backgroundColor)}>
            <p className="text-sm line-clamp-4 break-words">{content || "Your post will appear here..."}</p>
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <span>{contentLabel} Preview</span>
            </div>
            <div className="flex items-center gap-1">
              {isOverLimit ? (
                <>
                  <AlertCircle size={14} className="text-destructive" />
                  <span className="text-destructive font-medium">{characterCount}/{characterLimit}</span>
                </>
              ) : (
                <>
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-muted-foreground">{characterCount}/{characterLimit}</span>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </Card>
  );
}


import { Card } from "@/components/ui/card";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  Info
} from "lucide-react";
import { PLATFORM_LIMITS, PlatformType } from "@/utils/platformLimits";
import { cn } from "@/lib/utils";

interface PlatformsGuideProps {
  selectedPlatform: PlatformType | null;
}

export default function PlatformsGuide({ selectedPlatform }: PlatformsGuideProps) {
  const platforms = [
    {
      id: "twitter" as PlatformType,
      name: "X (Twitter)",
      icon: <Twitter size={20} className="text-platforms-twitter" />,
      limits: PLATFORM_LIMITS.twitter,
      color: "text-platforms-twitter",
      bgColor: "bg-platforms-twitter/10"
    },
    {
      id: "facebook" as PlatformType,
      name: "Facebook",
      icon: <Facebook size={20} className="text-platforms-facebook" />,
      limits: PLATFORM_LIMITS.facebook,
      color: "text-platforms-facebook",
      bgColor: "bg-platforms-facebook/10"
    },
    {
      id: "instagram" as PlatformType,
      name: "Instagram",
      icon: <Instagram size={20} className="text-platforms-instagram" />,
      limits: PLATFORM_LIMITS.instagram,
      color: "text-platforms-instagram",
      bgColor: "bg-platforms-instagram/10"
    },
    {
      id: "linkedin" as PlatformType,
      name: "LinkedIn",
      icon: <Linkedin size={20} className="text-platforms-linkedin" />,
      limits: PLATFORM_LIMITS.linkedin,
      color: "text-platforms-linkedin",
      bgColor: "bg-platforms-linkedin/10"
    }
  ];

  const platform = selectedPlatform 
    ? platforms.find(p => p.id === selectedPlatform)
    : null;

  return (
    <Card className="p-4">
      {platform ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            {platform.icon}
            <h3 className={cn("font-semibold", platform.color)}>{platform.name} Best Practices</h3>
          </div>
          
          <div className={cn("p-3 rounded-md text-sm", platform.bgColor)}>
            <p className="mb-2">
              <span className="font-medium">Character Limit:</span> {platform.limits.characterLimit}
            </p>
            <p className="mb-2">{platform.limits.description}</p>
            <div className="flex items-start gap-2 mt-2">
              <Info size={16} className="mt-0.5" />
              <p className="text-xs">{platform.limits.tip}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <h3 className="font-semibold flex items-center gap-2">
            <Info size={18} />
            Platform Guidelines
          </h3>
          
          <div className="space-y-1.5 text-sm text-muted-foreground">
            {platforms.map((platform) => (
              <div key={platform.id} className="flex items-center gap-2">
                {platform.icon}
                <span>{platform.limits.characterLimit} characters</span>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground italic">
            Select a platform card below to see detailed best practices
          </p>
        </div>
      )}
    </Card>
  );
}


import { useState } from "react";
import Header from "@/components/Header";
import PostEditor from "@/components/PostEditor";
import PlatformCard from "@/components/PlatformCard";
import PlatformsGuide from "@/components/PlatformsGuide";
import { useToast } from "@/components/ui/use-toast";
import { PLATFORM_LIMITS, PlatformType } from "@/utils/platformLimits";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [enabledPlatforms, setEnabledPlatforms] = useState({
    twitter: true,
    facebook: true,
    instagram: true,
    linkedin: true
  });
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType | null>(null);

  const handlePlatformChange = (platform: PlatformType, enabled: boolean) => {
    setEnabledPlatforms(prev => ({
      ...prev,
      [platform]: enabled
    }));
    
    if (enabled) {
      setSelectedPlatform(platform);
    } else if (selectedPlatform === platform) {
      setSelectedPlatform(null);
    }
  };

  const handleCardClick = (platform: PlatformType) => {
    setSelectedPlatform(platform);
  };

  const handleCreatePosts = () => {
    // Check if any platform is enabled
    const activePlatforms = Object.entries(enabledPlatforms)
      .filter(([_, enabled]) => enabled)
      .map(([platform]) => platform);
    
    if (activePlatforms.length === 0) {
      toast({
        title: "No platforms selected",
        description: "Please enable at least one social media platform.",
        variant: "destructive",
      });
      return;
    }

    // Check if post content is empty
    if (!postContent.trim()) {
      toast({
        title: "Empty post",
        description: "Please add some content to your post.",
        variant: "destructive",
      });
      return;
    }

    // Check character limits for enabled platforms
    const overLimitPlatforms = activePlatforms.filter(platform => {
      const typedPlatform = platform as PlatformType;
      return postContent.length > PLATFORM_LIMITS[typedPlatform].characterLimit;
    });

    if (overLimitPlatforms.length > 0) {
      toast({
        title: "Character limit exceeded",
        description: `Your post exceeds the character limit for ${overLimitPlatforms.join(", ")}.`,
        variant: "destructive",
      });
      return;
    }

    // Simulate posting
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Posts created!",
        description: `Successfully created posts for ${activePlatforms.length} platform(s).`,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column - Editor and Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-6">
              <PostEditor 
                value={postContent}
                onChange={setPostContent}
                onSend={handleCreatePosts}
                isLoading={isLoading}
              />
              
              {!isMobile && (
                <PlatformsGuide selectedPlatform={selectedPlatform} />
              )}
            </div>
          </div>
          
          {/* Right column - Platform cards */}
          <div className="lg:col-span-7">
            {isMobile && (
              <PlatformsGuide selectedPlatform={selectedPlatform} />
            )}
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div onClick={() => handleCardClick("twitter")}>
                <PlatformCard
                  platform="twitter"
                  isEnabled={enabledPlatforms.twitter}
                  onChange={(enabled) => handlePlatformChange("twitter", enabled)}
                  content={postContent}
                  characterLimit={PLATFORM_LIMITS.twitter.characterLimit}
                />
              </div>
              
              <div onClick={() => handleCardClick("facebook")}>
                <PlatformCard
                  platform="facebook"
                  isEnabled={enabledPlatforms.facebook}
                  onChange={(enabled) => handlePlatformChange("facebook", enabled)}
                  content={postContent}
                  characterLimit={PLATFORM_LIMITS.facebook.characterLimit}
                />
              </div>
              
              <div onClick={() => handleCardClick("instagram")}>
                <PlatformCard
                  platform="instagram"
                  isEnabled={enabledPlatforms.instagram}
                  onChange={(enabled) => handlePlatformChange("instagram", enabled)}
                  content={postContent}
                  characterLimit={PLATFORM_LIMITS.instagram.characterLimit}
                />
              </div>
              
              <div onClick={() => handleCardClick("linkedin")}>
                <PlatformCard
                  platform="linkedin"
                  isEnabled={enabledPlatforms.linkedin}
                  onChange={(enabled) => handlePlatformChange("linkedin", enabled)}
                  content={postContent}
                  characterLimit={PLATFORM_LIMITS.linkedin.characterLimit}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

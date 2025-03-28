
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="py-6 px-4 border-b mb-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Sparkles className="text-vibrant-purple mr-2" size={28} />
          <h1 className="text-2xl sm:text-3xl font-bold">
            <span className="bg-gradient-vibrant gradient-text">Colorful</span>
            <span className="mx-1">Post</span>
            <span className="bg-gradient-cool gradient-text">Genie</span>
          </h1>
        </div>
        <p className="text-center text-muted-foreground mt-2 max-w-md mx-auto">
          Create perfect posts for all your social media platforms
        </p>
      </div>
    </header>
  );
}

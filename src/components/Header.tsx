
import { Image } from "lucide-react";

export default function Header() {
  return (
    <header className="py-6 px-4 border-b mb-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="mr-3 w-10 h-10 sm:w-12 sm:h-12">
            <img 
              src="/lovable-uploads/3136c05c-1bf4-4581-ad5d-17e0f1bf2fb0.png" 
              alt="Pukeko Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            <span className="bg-gradient-vibrant gradient-text">Pukeko</span>
            <span className="mx-1">Social</span>
            <span className="bg-gradient-cool gradient-text">Media</span>
          </h1>
        </div>
        <p className="text-center text-muted-foreground mt-2 max-w-md mx-auto">
          Create perfect posts for all your social media platforms
        </p>
      </div>
    </header>
  );
}

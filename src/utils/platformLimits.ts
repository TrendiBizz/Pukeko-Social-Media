
export const PLATFORM_LIMITS = {
  twitter: {
    characterLimit: 280,
    description: "Keep it concise. Hashtags and links count towards the character limit.",
    tip: "Use mentions (@username) and hashtags (#topic) to increase visibility."
  },
  facebook: {
    characterLimit: 5000,
    description: "Longer posts are acceptable, but the best performing ones are 1-2 paragraphs.",
    tip: "Posts with images get 2.3x more engagement than text-only posts."
  },
  instagram: {
    characterLimit: 2200,
    description: "Caption-friendly platform. Most users focus on images, but captions can enhance engagement.",
    tip: "Place important content at the beginning as captions cut off after a few lines."
  },
  linkedin: {
    characterLimit: 3000,
    description: "Professional audience. Focus on industry insights and professional achievements.",
    tip: "Use line breaks for readability and keep paragraphs short and focused."
  }
};

export type PlatformType = keyof typeof PLATFORM_LIMITS;

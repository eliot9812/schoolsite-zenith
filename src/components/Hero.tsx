import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  imageSrc?: string;
  height?: "small" | "medium" | "large";
}

export const Hero = ({
  title,
  subtitle,
  showCTA = false,
  imageSrc,
  height = "large",
}: HeroProps) => {
  const heightClasses = {
    small: "h-64",
    medium: "h-96",
    large: "h-[500px] md:h-[600px]",
  };

  return (
    <div
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image or Gradient */}
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-gradient" />
        </>
      ) : (
        <div className="absolute inset-0 hero-gradient" />
      )}

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/about">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 group"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/10 text-white border-background/30 hover:bg-background/20 text-lg px-8 py-6 backdrop-blur-sm"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

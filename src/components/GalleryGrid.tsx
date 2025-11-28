import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// Removed import: import useEmblaCarousel from "embla-carousel-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  // Removed carousel-related state and functions:
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  // const scrollPrev = () => emblaApi?.scrollPrev();
  // const scrollNext = () => emblaApi?.scrollNext();

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  // Lightbox navigation logic (still needed for prev/next buttons in the modal)
  const handlePrevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage?.id);
    // Find the previous index, wrapping to the end if at the start
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage?.id);
    // Find the next index, wrapping to the start if at the end
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <>
      <div className="relative">
        {/* Replaced carousel structure with a standard responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              // Removed flex layout classes, using grid-item classes instead
            >
              <div
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Removed Carousel Navigation buttons */}
      </div>

      {/* Lightbox - Kept for image viewing */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-none">
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/10 hover:bg-background/20 text-white border-background/30"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/10 hover:bg-background/20 text-white border-background/30"
                onClick={handleNextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
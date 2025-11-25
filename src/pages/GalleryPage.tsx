import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/GalleryGrid";

const GalleryPage = () => {
  // Combine all images into a single list
  const allImages = [
    // FIX: Replaced 'public\images\' with '/images/' and corrected backslashes to forward slashes.
    { id: 1, src: "/images/fn1.jpg", alt: "1" },
    { id: 2, src: "/images/fn2.jpg", alt: "2" },
    { id: 3, src: "/images/hn6.jpg", alt: "3" },
    { id: 4, src: "/images/hn1.jpg", alt: "4" },
    { id: 5, src: "/images/hn2.jpg", alt: "5" },
    { id: 6, src: "/images/hn3.jpg", alt: "6" },
    { id: 7, src: "/images/hn4.jpg", alt: "7" },
    { id: 8, src: "/images/hn5.jpg", alt: "8" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplified title */}
      <Hero
        title={"Photo Gallery"}
        subtitle={"Capturing moments and memories"}
        height="medium"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                All Photos
              </h2>
              <p className="text-muted-foreground">Browse through our collection of memories</p>
            </div>
            {/* Directly render GalleryGrid with all images */}
            <GalleryGrid images={allImages} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
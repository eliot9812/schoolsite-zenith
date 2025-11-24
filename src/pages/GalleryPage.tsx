import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const GalleryPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  const albums = [
    {
      id: "sports-day",
      title: "Annual Sports Day 2024",
      coverImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
      imageCount: 8,
    },
    {
      id: "science-fair",
      title: "Science Fair 2024",
      coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
      imageCount: 8,
    },
    {
      id: "cultural-fest",
      title: "Cultural Festival",
      coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      imageCount: 8,
    },
    {
      id: "graduation",
      title: "Graduation Ceremony 2024",
      coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      imageCount: 8,
    },
  ];

  // Sample images for each album (using placeholder images)
  const albumImages: { [key: string]: Array<{ id: number; src: string; alt: string }> } = {
    "sports-day": [
      { id: 1, src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800", alt: "Sports Day 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800", alt: "Sports Day 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800", alt: "Sports Day 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800", alt: "Sports Day 4" },
      { id: 5, src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800", alt: "Sports Day 5" },
      { id: 6, src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800", alt: "Sports Day 6" },
      { id: 7, src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800", alt: "Sports Day 7" },
      { id: 8, src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800", alt: "Sports Day 8" },
    ],
    "science-fair": [
      { id: 1, src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", alt: "Science Fair 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800", alt: "Science Fair 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800", alt: "Science Fair 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1581093458791-9d42e286cb7f?w=800", alt: "Science Fair 4" },
      { id: 5, src: "https://images.unsplash.com/photo-1576319155264-99536e0be1ee?w=800", alt: "Science Fair 5" },
      { id: 6, src: "https://images.unsplash.com/photo-1581092160607-ee67e1fd4c1d?w=800", alt: "Science Fair 6" },
      { id: 7, src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800", alt: "Science Fair 7" },
      { id: 8, src: "https://images.unsplash.com/photo-1581093458791-9d42e286cb7f?w=800", alt: "Science Fair 8" },
    ],
    "cultural-fest": [
      { id: 1, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800", alt: "Cultural Festival 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800", alt: "Cultural Festival 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800", alt: "Cultural Festival 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800", alt: "Cultural Festival 4" },
      { id: 5, src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800", alt: "Cultural Festival 5" },
      { id: 6, src: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800", alt: "Cultural Festival 6" },
      { id: 7, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800", alt: "Cultural Festival 7" },
      { id: 8, src: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800", alt: "Cultural Festival 8" },
    ],
    graduation: [
      { id: 1, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800", alt: "Graduation 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800", alt: "Graduation 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800", alt: "Graduation 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", alt: "Graduation 4" },
      { id: 5, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", alt: "Graduation 5" },
      { id: 6, src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800", alt: "Graduation 6" },
      { id: 7, src: "https://images.unsplash.com/photo-1622495806311-6d7b6b3e8e28?w=800", alt: "Graduation 7" },
      { id: 8, src: "https://images.unsplash.com/photo-1627556704302-624c9b5c2dfa?w=800", alt: "Graduation 8" },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={selectedAlbum ? albums.find(a => a.id === selectedAlbum)?.title || "Gallery" : "Photo Gallery"}
        subtitle={selectedAlbum ? "View all photos from this event" : "Capturing moments and memories"}
        height="medium"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {!selectedAlbum ? (
            // Album Grid View
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  Photo Albums
                </h2>
                <p className="text-muted-foreground">Browse through our collection of memories</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {albums.map((album, index) => (
                  <Card
                    key={album.id}
                    className="card-hover cursor-pointer overflow-hidden"
                    onClick={() => setSelectedAlbum(album.id)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">{album.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{album.imageCount} photos</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            // Individual Album View
            <div className="animate-fade-in">
              <button
                onClick={() => setSelectedAlbum(null)}
                className="mb-8 text-primary hover:text-primary-light font-medium transition-colors duration-300"
              >
                ← Back to Albums
              </button>
              <GalleryGrid images={albumImages[selectedAlbum] || []} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GalleryForm } from "./GalleryForm"; // Use the updated GalleryForm
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export const GalleryManager = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    { id: "1", src: "/images/fn1.jpg", alt: "First example image" },
    { id: "2", src: "/images/fn2.jpg", alt: "Second example image" },
  ]);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // UPDATE: handleSave now accepts the optional file object from GalleryForm
  const handleSave = async (image: GalleryImage, file?: File | null) => {
    
    // Handle new upload (file is present)
    if (file) {
      console.log(`Starting upload for file: ${file.name}`);
      
      // --- START: YOUR REAL UPLOAD LOGIC GOES HERE ---
      
      // 1. Simulate API call: Set loading state if needed.
      // 2. Prepare data: const formData = new FormData(); formData.append('image', file); formData.append('alt', image.alt);
      // 3. API Request: const response = await fetch('/api/upload-gallery', { method: 'POST', body: formData });
      // 4. Get URL: const data = await response.json(); const finalSrc = data.url;
      
      // *** SIMULATION: Replace this with your actual API integration ***
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      const finalSrc = URL.createObjectURL(file); // Use local URL for simulation
      
      // --- END: YOUR REAL UPLOAD LOGIC GOES HERE ---

      const finalImage = { ...image, src: finalSrc };

      setImages(prevImages => {
        if (editingImage) {
          // If editing and uploading a new file, update the existing entry
          return prevImages.map((img) => (img.id === finalImage.id ? finalImage : img));
        } else {
          // Add the new image
          return [...prevImages, finalImage];
        }
      });
      
      // Optional: Clean up the temporary URL if it was created
      // if (finalSrc.startsWith('blob:')) { URL.revokeObjectURL(finalSrc); }

    } else if (editingImage) {
        // Handle edit (no new file uploaded, only alt text might have changed)
        console.log(`Saving changes for existing image ID: ${image.id}`);
        setImages(images.map((img) => (img.id === image.id ? image : img)));
    } else {
        // Should not happen due to form validation, but good to handle
        console.error("Attempted to save without file or existing ID.");
        return;
    }

    setShowForm(false);
    setEditingImage(null);
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    // In a real application, send a DELETE request to your backend here
    setImages(images.filter((img) => img.id !== id));
    setDeleteId(null);
  };

  const handleAddNew = () => {
    setEditingImage(null);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-display font-bold text-foreground">Manage Gallery</h2>
        <Button onClick={handleAddNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add Image
        </Button>
      </div>

      {showForm && (
        <GalleryForm
          image={editingImage}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingImage(null);
          }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <Card key={image.id}>
            <CardHeader>
              <CardTitle className="text-sm flex items-center justify-between">
                <span className="truncate">Image {image.id}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(image)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setDeleteId(image.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="text-sm text-muted-foreground mt-2 truncate">{image.alt}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this image? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteId && handleDelete(deleteId)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
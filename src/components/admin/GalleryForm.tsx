import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Save } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// UPDATE: The onSave function now accepts the File object as an optional second argument.
interface GalleryFormProps {
  image: GalleryImage | null;
  onSave: (image: GalleryImage, file?: File | null) => void;
  onCancel: () => void;
}

export const GalleryForm = ({ image, onSave, onCancel }: GalleryFormProps) => {
  const [altText, setAltText] = useState(image?.alt || "");
  const [file, setFile] = useState<File | null>(null);
  const [previewSrc, setPreviewSrc] = useState(image?.src || "");
  
  const isEditing = !!image;

  // Cleanup for preview URL when component unmounts or image/file changes
  useEffect(() => {
    // If a new file is selected, create a local preview URL
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewSrc(url);
      return () => URL.revokeObjectURL(url); // Cleanup function
    } else if (image) {
      // If editing and no new file, use the existing URL
      setPreviewSrc(image.src);
    } else {
      setPreviewSrc("");
    }
  }, [file, image]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In 'Add New' mode, a file MUST be selected.
    if (!isEditing && !file) {
      alert("Please select a file to upload.");
      return;
    }
    
    // In 'Edit' mode, if neither file nor alt text changed, cancel save (optional)
    if (isEditing && !file && altText === image?.alt) {
        onCancel(); // No changes, just close the form
        return;
    }

    // Construct the image object
    const imageToSave: GalleryImage = {
        id: image?.id || Date.now().toString(), // Use existing ID or generate a temporary one
        src: image?.src || "", // This will be updated by GalleryManager after 'upload'
        alt: altText,
    };

    // Pass the image data and the file object (if available) to the parent
    onSave(imageToSave, file);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Image" : "Upload New Image"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* File Upload Input */}
          <div className="space-y-2">
            <Label htmlFor="file-upload">
                {isEditing ? "Change Photo (Optional)" : "Select Photo to Upload"}
            </Label>
            <Input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <Label htmlFor="alt">Description</Label>
            <Input
              id="alt"
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Enter a descriptive text for the image"
              required
            />
          </div>

          {/* Preview */}
          {previewSrc && (
            <div className="space-y-2">
              <Label>Preview</Label>
              <img
                src={previewSrc}
                alt={altText}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}

          {/* Form Actions */}
          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              {isEditing ? "Save Changes" : "Upload & Save"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
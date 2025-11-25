import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface GalleryFormProps {
  image: GalleryImage | null;
  onSave: (image: GalleryImage) => void;
  onCancel: () => void;
}

export const GalleryForm = ({ image, onSave, onCancel }: GalleryFormProps) => {
  const [formData, setFormData] = useState({
    src: "",
    alt: "",
  });

  useEffect(() => {
    if (image) {
      setFormData({
        src: image.src,
        alt: image.alt,
      });
    }
  }, [image]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: image?.id || "",
      ...formData,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{image ? "Edit Image" : "Add New Image"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="src">Image URL</Label>
            <Input
              id="src"
              value={formData.src}
              onChange={(e) => setFormData({ ...formData, src: e.target.value })}
              placeholder="/images/example.jpg"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="alt">Description</Label>
            <Input
              id="alt"
              value={formData.alt}
              onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
              placeholder="Image description"
              required
            />
          </div>

          {formData.src && (
            <div className="space-y-2">
              <Label>Preview</Label>
              <img
                src={formData.src}
                alt={formData.alt}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

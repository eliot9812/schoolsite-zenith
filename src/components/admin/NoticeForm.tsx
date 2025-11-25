import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface Notice {
  id: string;
  title: string;
  content: string;
  category: string;
  isPinned: boolean;
  date: string;
}

interface NoticeFormProps {
  notice: Notice | null;
  onSave: (notice: Notice) => void;
  onCancel: () => void;
}

export const NoticeForm = ({ notice, onSave, onCancel }: NoticeFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    isPinned: false,
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (notice) {
      setFormData({
        title: notice.title,
        content: notice.content,
        category: notice.category,
        isPinned: notice.isPinned,
        date: notice.date,
      });
    }
  }, [notice]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: notice?.id || "",
      ...formData,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{notice ? "Edit Notice" : "Add New Notice"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={5}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="pinned"
              checked={formData.isPinned}
              onCheckedChange={(checked) => setFormData({ ...formData, isPinned: checked })}
            />
            <Label htmlFor="pinned">Pin this notice</Label>
          </div>

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

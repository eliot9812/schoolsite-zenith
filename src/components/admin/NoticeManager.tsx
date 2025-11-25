import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NoticeForm } from "./NoticeForm";
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

interface Notice {
  id: string;
  title: string;
  content: string;
  category: string;
  isPinned: boolean;
  date: string;
}

export const NoticeManager = () => {
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: "1",
      title: "School Reopening Announcement",
      content: "We are pleased to announce that the school will reopen on Monday, January 15th, 2024.",
      category: "Important",
      isPinned: true,
      date: "2024-01-10",
    },
  ]);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleSave = (notice: Notice) => {
    if (editingNotice) {
      setNotices(notices.map((n) => (n.id === notice.id ? notice : n)));
    } else {
      setNotices([...notices, { ...notice, id: Date.now().toString() }]);
    }
    setShowForm(false);
    setEditingNotice(null);
  };

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setNotices(notices.filter((n) => n.id !== id));
    setDeleteId(null);
  };

  const handleAddNew = () => {
    setEditingNotice(null);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-display font-bold text-foreground">Manage Notices</h2>
        <Button onClick={handleAddNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add Notice
        </Button>
      </div>

      {showForm && (
        <NoticeForm
          notice={editingNotice}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingNotice(null);
          }}
        />
      )}

      <div className="grid gap-4">
        {notices.map((notice) => (
          <Card key={notice.id}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    {notice.title}
                    {notice.isPinned && (
                      <Badge variant="secondary" className="text-xs">
                        Pinned
                      </Badge>
                    )}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge>{notice.category}</Badge>
                    <span className="text-sm text-muted-foreground">{notice.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(notice)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setDeleteId(notice.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{notice.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Notice</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this notice? This action cannot be undone.
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

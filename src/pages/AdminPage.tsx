import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NoticeManager } from "@/components/admin/NoticeManager";
import { GalleryManager } from "@/components/admin/GalleryManager";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom section-padding">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-primary mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage notices and gallery content</p>
        </div>

        <Tabs defaultValue="notices" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="notices">Notices</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="notices" className="mt-6">
            <NoticeManager />
          </TabsContent>
          
          <TabsContent value="gallery" className="mt-6">
            <GalleryManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;

import { Hero } from "@/components/Hero";
import { NoticeCard } from "@/components/NoticeCard";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const NoticePage = () => {
  const [visibleNotices, setVisibleNotices] = useState(6);
  const [selectedNotice, setSelectedNotice] = useState<any>(null);

  const allNotices = [
    {
      title: "Annual Sports Day - Registration Open",
      date: "November 20, 2025",
      content:
        "We are excited to announce our Annual Sports Day on December 15th. All students are encouraged to participate in various athletic events including track and field, basketball, and swimming. Registration forms are available at the school office and must be submitted by December 1st.",
      isPinned: true,
      category: "Events",
    },
    {
      title: "Parent-Teacher Meeting Schedule",
      date: "November 18, 2025",
      content:
        "Parent-teacher meetings will be held from December 1-5. This is an important opportunity to discuss your child's academic progress and development. Please check your email for your scheduled slot or contact the administration office to book an appointment.",
      category: "Academic",
    },
    {
      title: "Winter Break Holiday Notice",
      date: "November 15, 2025",
      content:
        "The school will be closed from December 24th to January 5th for winter break. Classes will resume on January 6th. We wish all our students and families a joyful and safe holiday season!",
      category: "General",
    },
    {
      title: "Science Fair 2025 - Call for Participation",
      date: "November 12, 2025",
      content:
        "Students from grades 6-12 are invited to participate in our annual Science Fair scheduled for January 20th. This is a wonderful opportunity to showcase your scientific creativity and innovation. Project proposals should be submitted to the Science Department by November 30th.",
      category: "Academic",
    },
    {
      title: "New Library Books Arrival",
      date: "November 10, 2025",
      content:
        "The school library has added over 500 new books covering various subjects and genres. Visit the library during recess or after school hours to explore our new collection. Happy reading!",
      category: "General",
    },
    {
      title: "Flu Vaccination Camp",
      date: "November 8, 2025",
      content:
        "A free flu vaccination camp will be organized at school on November 25th in collaboration with City Health Department. Parents who wish to get their children vaccinated should submit the consent form by November 20th.",
      category: "Health",
    },
    {
      title: "Drama Club Auditions Announcement",
      date: "November 5, 2025",
      content:
        "The Drama Club is conducting auditions for the winter production of 'A Midsummer Night's Dream'. Auditions will be held on November 18th and 19th in the school auditorium. All interested students are welcome!",
      category: "Events",
    },
    {
      title: "Mid-Term Examination Schedule",
      date: "November 3, 2025",
      content:
        "Mid-term examinations for all grades will commence from December 8th. The detailed examination schedule has been sent to parents via email. Students are advised to start their preparation early.",
      isPinned: true,
      category: "Academic",
    },
    {
      title: "School Bus Route Changes",
      date: "November 1, 2025",
      content:
        "Due to road construction on Main Street, bus route #5 will be temporarily modified from November 15th. Please check the updated route map available at the transport office or on the school website.",
      category: "Transport",
    },
  ];

  const handleLoadMore = () => {
    setVisibleNotices((prev) => Math.min(prev + 3, allNotices.length));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero title="Notice Board" subtitle="Stay updated with school announcements" height="medium" />

      {/* Notices Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              {allNotices.slice(0, visibleNotices).map((notice, index) => (
                <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                  <NoticeCard {...notice} onClick={() => setSelectedNotice(notice)} />
                </div>
              ))}
            </div>

            {visibleNotices < allNotices.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  size="lg"
                  className="min-w-[200px]"
                >
                  Load More Notices
                </Button>
              </div>
            )}

            {visibleNotices >= allNotices.length && (
              <p className="text-center text-muted-foreground mt-12">
                You've reached the end of the notices
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Notice Detail Dialog */}
      <Dialog open={!!selectedNotice} onOpenChange={() => setSelectedNotice(null)}>
        <DialogContent className="max-w-2xl">
          {selectedNotice && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between gap-4">
                  <DialogTitle className="text-2xl font-display">
                    {selectedNotice.title}
                  </DialogTitle>
                  <Badge variant="secondary">{selectedNotice.category}</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedNotice.date}
                </div>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-foreground/90 leading-relaxed">
                  {selectedNotice.content}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NoticePage;

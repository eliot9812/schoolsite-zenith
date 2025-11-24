import { Hero } from "@/components/Hero";
import { NoticeCard } from "@/components/NoticeCard";
import { QuickLinkCard } from "@/components/QuickLinkCard";
import { Book, Users, Camera, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const recentNotices = [
    {
      title: "Annual Sports Day - Registration Open",
      date: "November 20, 2025",
      content:
        "We are excited to announce our Annual Sports Day on December 15th. All students are encouraged to participate. Registration forms are available at the school office.",
      isPinned: true,
      category: "Events",
    },
    {
      title: "Parent-Teacher Meeting Schedule",
      date: "November 18, 2025",
      content:
        "Parent-teacher meetings will be held from December 1-5. Please check your email for your scheduled slot or contact the administration office.",
      category: "Academic",
    },
    {
      title: "Winter Break Holiday Notice",
      date: "November 15, 2025",
      content:
        "The school will be closed from December 24th to January 5th for winter break. Classes will resume on January 6th. Wishing everyone happy holidays!",
      category: "General",
    },
  ];

  const quickLinks = [
    {
      title: "Admissions",
      description: "Learn about our admission process and requirements",
      icon: Book,
      href: "/contact",
    },
    {
      title: "About Us",
      description: "Discover our mission, vision, and values",
      icon: Users,
      href: "/about",
    },
    {
      title: "Gallery",
      description: "Browse through our school events and activities",
      icon: Camera,
      href: "/gallery",
    },
    {
      title: "Contact",
      description: "Get in touch with us for any queries",
      icon: Phone,
      href: "/contact",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Welcome to Motherland academy"
        subtitle="Empowering minds, building futures. Join us in our journey of academic excellence and holistic development."
        showCTA
      />

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              About Motherland academy
    
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over three decadeso Motherland academy has been at the forefront of quality
              education, nurturing young minds to become confident, creative, and responsible
              global citizens. Our dedicated faculty and state-of-the-art facilities create an
              environment where students thrive academically, socially, and emotionally.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in holistic development, combining rigorous academics with arts, sports,
              and character-building activities. Our students consistently excel in examinations
              and competitions while developing the skills and values needed for lifelong success.
            </p>
            <Link to="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-light mt-4">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Quick Links
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find what you're looking for quickly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {quickLinks.map((link, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <QuickLinkCard {...link} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Notices Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                Recent Notices
              </h2>
              <p className="text-muted-foreground">Stay updated with our latest announcements</p>
            </div>
            <Link to="/notice">
              <Button variant="outline" className="hidden md:inline-flex">
                View All Notices
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {recentNotices.map((notice, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <NoticeCard {...notice} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/notice">
              <Button variant="outline">View All Notices</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

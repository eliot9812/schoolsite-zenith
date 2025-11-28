import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in education and character development.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Creating global citizens who make a positive impact on the world.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Upholding honesty, ethics, and moral principles in all we do.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive environment where everyone belongs and thrives.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero title="About Motherland Academy" height="medium" />

      {/* About School Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 1990, Excellence Academy has been a beacon of quality education for over
                three decades. What started as a small school with just 50 students has grown into
                a thriving institution serving over 1,500 students from diverse backgrounds.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                Our journey has been marked by continuous innovation in teaching methodologies,
                integration of technology in education, and a steadfast commitment to holistic
                development. We pride ourselves on creating an environment where academic rigor
                meets creativity, discipline meets innovation, and tradition meets modernity.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                With state-of-the-art facilities including modern laboratories, a well-stocked
                library, sports complexes, and dedicated spaces for arts and music, we provide
                students with every opportunity to discover and nurture their talents.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Our faculty comprises highly qualified and experienced educators who are passionate
                about teaching and committed to student success. Through personalized attention,
                innovative teaching methods, and a curriculum that balances academics with
                co-curricular activities, we prepare students not just for examinations, but for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
            <Card className="border-l-4 border-l-foreground">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-display font-bold text-primary flex items-center gap-3">
                  <Target className="w-8 h-8 text-foreground" />
                  Our Mission
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  To provide a nurturing and inclusive learning environment that empowers every
                  student to achieve academic excellence, develop strong character, and become
                  responsible global citizens who contribute positively to society.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We are committed to fostering critical thinking, creativity, and lifelong learning
                  while respecting diversity and promoting ethical values.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-foreground">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-display font-bold text-primary flex items-center gap-3">
                  <Eye className="w-8 h-8 text-foreground" />
                  Our Vision
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  To be a leading educational institution recognized for excellence in academics,
                  innovation in teaching, and commitment to holistic development, preparing students
                  to excel in an ever-changing global landscape.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We envision a future where our students become confident, compassionate leaders
                  who make meaningful contributions to their communities and the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-hover text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="section-padding bg-muted border-y border-border">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted flex items-center justify-center shadow-lg">
                  <Users className="w-32 h-32 text-foreground" />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-primary">
                    Principal's Message
                  </h2>
                  <p className="text-muted-foreground font-medium">Dr. Sarah Johnson</p>
                </div>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    "Welcome to Excellence Academy! It is my privilege to serve as the principal of
                    this wonderful institution where we are committed to nurturing the potential of
                    every student."
                  </p>
                  <p>
                    "Education is not just about textbooks and examinations; it's about creating
                    well-rounded individuals who are equipped with knowledge, skills, values, and
                    the confidence to face life's challenges. At Excellence Academy, we strive to
                    provide a balanced education that develops the mind, body, and spirit."
                  </p>
                  <p>
                    "I invite you to explore our school and discover the Excellence Academy
                    difference. Together, let us build a brighter future for our children."
                  </p>
                  <p className="font-display font-semibold text-primary">
                    With warm regards,
                    <br />
                    Dr. Sarah Johnson
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

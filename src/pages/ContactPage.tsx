import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Biratnagar-04,Belgachhi,Morang,Nepal",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+977-9842041511",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@motherlandeacademy.edu",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Sun-Fri: 8:00 AM - 4:00 PM",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero title="Contact Us" subtitle="We'd love to hear from you" height="medium" />

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <info.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary mb-1">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="Eg:Hari" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Eg:Bahadur Rai" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="example@gmail..com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="98XXXXXXXX" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="Inquiry about admissions" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-primary mb-4">Visit Our School</h2>
                <p className="text-muted-foreground">
                  We welcome you to visit our SChool and experience our facilities firsthand.
                  Schedule a campus tour by calling our admissions office.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden mb-6">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                    {/* <p className="text-muted-foreground">Google Maps Location</p> */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.4171830896631!2d87.26758954476605!3d26.477077189157715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef747b38ba9c91%3A0x75878c656d79efc1!2sMotherland%20Academy%20Secondary%20School!5e0!3m2!1sen!2snp!4v1763968984143!5m2!1sen!2snp"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    {/* <p className="text-sm text-muted-foreground/70">Interactive map will be displayed here</p> */}
                  </div>
                </div>
              </Card>

              {/* Additional Info Card
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-semibold text-primary">
                    Admissions Inquiry
                  </h3>
                  <p className="text-foreground/80">
                    For specific questions about admissions, please contact our admissions office directly:
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Email:</strong> admissions@excellenceacademy.edu
                    </p>
                    <p className="text-sm">
                      <strong>Phone:</strong> +1 (555) 123-4568
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Download Admission Brochure
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our products or your order? We're here to help! 
              Reach out to us through any of the following channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone / WhatsApp</p>
                  <a href="tel:+918491943437" className="text-muted-foreground hover:text-primary">
                    +91 84919 43437
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:abuhurayrahessentials@gmail.com" className="text-muted-foreground hover:text-primary">
                    abuhurayrahessentials@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
            <p className="text-muted-foreground">
              We typically respond within 24 hours during business days.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Monday - Saturday: 10:00 AM - 7:00 PM IST</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

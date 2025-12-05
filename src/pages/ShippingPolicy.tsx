import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Shipping Policy</h1>
        
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <div className="bg-card rounded-lg p-8 shadow-sm border space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
              <p className="text-muted-foreground">
                At Abu Hurayrah Essentials, we are committed to delivering your Islamic books 
                and products safely and efficiently across India.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
              <p className="text-muted-foreground">
                Orders are processed within 1-2 business days after payment confirmation. 
                You will receive a confirmation email once your order has been shipped.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Delivery Time</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Metro Cities: 3-5 business days</li>
                <li>Other Cities: 5-7 business days</li>
                <li>Remote Areas: 7-10 business days</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Shipping Charges</h3>
              <p className="text-muted-foreground">
                Shipping charges are calculated at checkout based on the weight of your order 
                and delivery location. Free shipping may be available on orders above a certain amount.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Order Tracking</h3>
              <p className="text-muted-foreground">
                Once your order is shipped, you will receive a tracking number via email/SMS. 
                You can use this to track your package status.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Damaged or Lost Packages</h3>
              <p className="text-muted-foreground">
                If your package arrives damaged or is lost in transit, please contact us 
                immediately at <a href="mailto:abuhurayrahessentials@gmail.com" className="text-primary hover:underline">abuhurayrahessentials@gmail.com</a> or 
                call us at <a href="tel:+918491943437" className="text-primary hover:underline">+91 84919 43437</a>. 
                We will work to resolve the issue promptly.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <p className="text-muted-foreground">
                For any shipping-related queries, please reach out to us:
              </p>
              <ul className="list-none text-muted-foreground mt-2 space-y-1">
                <li>Email: abuhurayrahessentials@gmail.com</li>
                <li>Phone: +91 84919 43437</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Terms and Conditions</h1>
        
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <div className="bg-card rounded-lg p-8 shadow-sm border space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Abu Hurayrah Essentials. By accessing and using our website, 
                you agree to be bound by these Terms and Conditions. Please read them carefully.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">1. General Terms</h3>
              <p className="text-muted-foreground">
                By placing an order through our website, you confirm that you are at least 
                18 years of age or have parental consent, and that the information you provide 
                is accurate and complete.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">2. Products and Pricing</h3>
              <p className="text-muted-foreground">
                All products are subject to availability. Prices are listed in Indian Rupees (INR) 
                and are subject to change without prior notice. We reserve the right to modify 
                or discontinue any product at any time.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">3. Payment</h3>
              <p className="text-muted-foreground">
                We accept payments through secure payment gateways. All transactions are 
                encrypted and secure. Payment must be completed before order processing begins.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">4. Order Cancellation</h3>
              <p className="text-muted-foreground">
                Orders can be cancelled within 24 hours of placement, provided they have not 
                been shipped. Once shipped, orders cannot be cancelled.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">5. Returns and Refunds</h3>
              <p className="text-muted-foreground">
                We accept returns within 7 days of delivery if the product is damaged or 
                defective. Products must be in original condition with packaging intact. 
                Refunds will be processed within 5-7 business days after receiving the returned item.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">6. Intellectual Property</h3>
              <p className="text-muted-foreground">
                All content on this website, including text, images, and logos, is the property 
                of Abu Hurayrah Essentials and is protected by copyright laws.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">7. Limitation of Liability</h3>
              <p className="text-muted-foreground">
                Abu Hurayrah Essentials shall not be liable for any indirect, incidental, 
                or consequential damages arising from the use of our products or services.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">8. Governing Law</h3>
              <p className="text-muted-foreground">
                These Terms and Conditions are governed by the laws of India. Any disputes 
                shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">9. Contact Information</h3>
              <p className="text-muted-foreground">
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <ul className="list-none text-muted-foreground mt-2 space-y-1">
                <li>Email: abuhurayrahessentials@gmail.com</li>
                <li>Phone: +91 84919 43437</li>
              </ul>
            </section>
            
            <section>
              <p className="text-sm text-muted-foreground mt-8">
                Last updated: December 2024
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CancellationsRefunds = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Cancellation & Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Order Cancellation</h2>
            <p>
              Orders can be cancelled within 24 hours of placing the order, provided the order has not been shipped. 
              To cancel an order, please contact us immediately at:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Email: abuhurayrahessentials@gmail.com</li>
              <li>Phone: +91 84919 43437</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Refund Policy</h2>
            <p>
              We want you to be completely satisfied with your purchase. If you are not satisfied, 
              you may request a refund under the following conditions:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>The item must be unused and in its original packaging</li>
              <li>Refund requests must be made within 7 days of delivery</li>
              <li>Books with visible damage or defects are eligible for immediate replacement or refund</li>
              <li>Digital products are non-refundable once accessed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Refund Process</h2>
            <p>To initiate a refund:</p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Contact us with your order number and reason for refund</li>
              <li>We will review your request within 2-3 business days</li>
              <li>If approved, return the item to our address (shipping costs may apply)</li>
              <li>Upon receiving and inspecting the item, we will process your refund</li>
              <li>Refunds will be credited to the original payment method within 5-7 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Non-Refundable Items</h2>
            <ul className="list-disc pl-6">
              <li>Items marked as "Final Sale" or "Non-Returnable"</li>
              <li>Items damaged due to misuse or negligence by the customer</li>
              <li>Items returned after the 7-day window</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, please contact us within 48 hours of delivery 
              with photos of the damage. We will arrange for a replacement or full refund at no extra cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
            <p>For any questions regarding cancellations or refunds:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Email: abuhurayrahessentials@gmail.com</li>
              <li>Phone: +91 84919 43437</li>
            </ul>
          </section>

          <p className="text-sm text-muted-foreground mt-8">
            Last updated: December 2024
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationsRefunds;

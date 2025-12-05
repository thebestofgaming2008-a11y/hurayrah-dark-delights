import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Abu Hurayrah Essentials
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Premium Islamic products for the modern Muslim
            </p>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">⭐ 4.9/5.0</Badge>
              <Badge variant="outline" className="text-xs">10k+ Orders</Badge>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Shop</h5>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block text-muted-foreground hover:text-foreground transition">
                All Products
              </Link>
              <Link to="/shop?category=books" className="block text-muted-foreground hover:text-foreground transition">
                Books
              </Link>
              <Link to="/shop?category=clothing" className="block text-muted-foreground hover:text-foreground transition">
                Clothing
              </Link>
              <Link to="/shop?category=luxury" className="block text-muted-foreground hover:text-foreground transition">
                Luxury Items
              </Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <div className="space-y-2 text-sm">
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition">Contact Us</Link>
              <Link to="/shipping-policy" className="block text-muted-foreground hover:text-foreground transition">Shipping Policy</Link>
              <Link to="/terms-and-conditions" className="block text-muted-foreground hover:text-foreground transition">Terms & Conditions</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Account</h5>
            <div className="space-y-2 text-sm">
              <Link to="/auth" className="block text-muted-foreground hover:text-foreground transition">
                Sign In
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-foreground transition">
                View Cart
              </Link>
              <Link to="/checkout" className="block text-muted-foreground hover:text-foreground transition">
                Checkout
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abu Hurayrah Essentials. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/shipping-policy" className="hover:text-foreground transition">Shipping Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-foreground transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

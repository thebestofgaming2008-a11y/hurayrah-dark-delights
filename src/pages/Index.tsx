import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Book, Sparkles, Star, Shield, Truck, Lock, Package } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    {
      name: "Clothing",
      id: "clothing",
      icon: ShoppingBag,
      description: "Premium Islamic apparel",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop"
    },
    {
      name: "Luxury Items",
      id: "luxury",
      icon: Sparkles,
      description: "Honey, Saffron & Musk",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop"
    },
    {
      name: "Books",
      id: "books",
      icon: Book,
      description: "Islamic knowledge & literature",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop"
    }
  ];

  // Get featured products (bestsellers, popular, high-rated)
  const featuredProducts = products
    .filter(p => p.badge || p.rating >= 4.8)
    .slice(0, 8);

  const trustFeatures = [
    { icon: Truck, title: "Free Shipping", description: "On orders over $100" },
    { icon: Shield, title: "Secure Payment", description: "100% secure transactions" },
    { icon: Package, title: "Easy Returns", description: "30-day return policy" },
    { icon: Lock, title: "Privacy Protected", description: "Your data is safe" }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    if (!product.inStock) return;
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Announcement Bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-2 text-center">
        <p className="text-sm">
          <span className="font-semibold">New Arrivals!</span> Shop the latest collection - Free shipping on orders over $100
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-foreground border-primary/30">Trusted by 10,000+ Customers</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Islamic
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Essentials
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover authentic clothing, luxury treasures, and sacred knowledge
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/shop">
                <Button size="lg" className="shadow-[var(--shadow-glow)]">
                  Shop Now
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline">
                  View Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-12 px-4 border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-1 text-sm">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link to={`/shop?category=${category.id}`} key={category.name}>
                <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <category.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked items from our premium collection</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 relative">
                {product.badge && (
                  <Badge className="absolute top-4 left-4 z-10">
                    {product.badge}
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge className="absolute top-4 right-4 z-10" variant="destructive">
                    Out of Stock
                  </Badge>
                )}
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-xs text-primary mb-1 capitalize">{product.category}</p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors min-h-[2.5rem]">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    {product.salePrice ? (
                      <>
                        <p className="text-lg font-bold text-primary">${product.salePrice}</p>
                        <p className="text-sm text-muted-foreground line-through">${product.price}</p>
                      </>
                    ) : (
                      <p className="text-lg font-bold">${product.price}</p>
                    )}
                  </div>
                  <Button 
                    className="w-full" 
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product)}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Our Customers Say</h2>
            <p className="text-muted-foreground">Trusted by thousands worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Abdullah M.",
                rating: 5,
                review: "The quality of the books is exceptional. Original prints and authentic content. Highly recommend!",
                product: "Tafsir As-Sa'di"
              },
              {
                name: "Fatima K.",
                rating: 5,
                review: "Fast shipping and excellent customer service. The book collection is beautifully bound and authentic.",
                product: "Sahih Al-Bukhari Set"
              },
              {
                name: "Omar S.",
                rating: 5,
                review: "Best Islamic bookstore online. The descriptions are accurate and the prices are fair.",
                product: "Kitab at-Tawhid"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-border">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">Purchased: {testimonial.product}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            <div className="relative p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to receive updates on new arrivals, exclusive offers, and Islamic knowledge
              </p>
              <div className="flex gap-4 max-w-md mx-auto flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:border-primary"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

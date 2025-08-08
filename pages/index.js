import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Share2, MessageCircle, ShoppingCart, Zap } from 'lucide-react';

export default function Home() {
  const [likedCards, setLikedCards] = useState(new Set());
  const [cartCount, setCartCount] = useState(0);

  const toggleLike = (cardId) => {
    const newLikedCards = new Set(likedCards);
    if (newLikedCards.has(cardId)) {
      newLikedCards.delete(cardId);
    } else {
      newLikedCards.add(cardId);
    }
    setLikedCards(newLikedCards);
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const cardData = [
    {
      id: 1,
      title: "Premium UI Components",
      description: "Beautiful, accessible components built with Radix UI and Tailwind CSS.",
      price: "$49",
      badge: "Popular",
      badgeVariant: "default",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      title: "Design System Pro",
      description: "Complete design system with tokens, components, and documentation.",
      price: "$99",
      badge: "New",
      badgeVariant: "secondary",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      title: "React Templates",
      description: "Production-ready React templates for modern web applications.",
      price: "$79",
      badge: "Best Seller",
      badgeVariant: "destructive",
      rating: 4.7,
      reviews: 256
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              >
                Shadcn/UI Demo
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-blue-100"
              >
                Discover the power of modern UI components with beautiful cards and interactive buttons
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </motion.section>

        {/* Card Showcase Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Beautiful Card Components
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Explore our collection of carefully crafted cards with interactive elements and smooth animations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {cardData.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between">
                        <Badge variant={card.badgeVariant} className="mb-3">
                          {card.badge}
                        </Badge>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleLike(card.id)}
                          className="p-2 rounded-full hover:bg-red-50 transition-colors"
                        >
                          <Heart 
                            className={`h-5 w-5 transition-colors ${
                              likedCards.has(card.id) 
                                ? 'text-red-500 fill-red-500' 
                                : 'text-slate-400 hover:text-red-500'
                            }`} 
                          />
                        </motion.button>
                      </div>
                      <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 text-base leading-relaxed">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < Math.floor(card.rating) 
                                  ? 'text-yellow-400 fill-yellow-400' 
                                  : 'text-slate-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600">
                          {card.rating} ({card.reviews} reviews)
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-slate-800 mb-4">
                        {card.price}
                        <span className="text-sm font-normal text-slate-500 ml-1">/ month</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col gap-3">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={addToCart}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <div className="flex gap-2 w-full">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Review
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Button Showcase Section */}
        <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-200">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Interactive Buttons
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A comprehensive collection of button variants with hover effects and animations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Primary Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Primary Buttons</h3>
                <Button className="w-full">Default Button</Button>
                <Button className="w-full" size="lg">Large Button</Button>
                <Button className="w-full" size="sm">Small Button</Button>
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Gradient Button
                </Button>
              </motion.div>

              {/* Secondary Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Secondary Buttons</h3>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
                <Button variant="ghost" className="w-full">Ghost</Button>
                <Button variant="link" className="w-full">Link Button</Button>
              </motion.div>

              {/* Special Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Special States</h3>
                <Button variant="destructive" className="w-full">Destructive</Button>
                <Button disabled className="w-full">Disabled</Button>
                <Button className="w-full" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  With Icon
                </Button>
                <Button className="w-full relative overflow-hidden group">
                  <span className="relative z-10">Animated</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Button>
              </motion.div>
            </div>

            {/* Cart Counter */}
            {cartCount > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="font-semibold">{cartCount}</span>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Amazing UIs?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Start using these beautiful components in your next project and create stunning user experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg">
                <Zap className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Documentation
              </Button>
            </div
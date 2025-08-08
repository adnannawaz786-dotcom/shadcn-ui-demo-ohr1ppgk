import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-50"
      >
        <Card className="m-4 bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-white font-semibold text-lg">
                  Shadcn UI Demo
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.05 }}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Home
                </motion.a>
                <motion.a
                  href="#components"
                  whileHover={{ scale: 1.05 }}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Components
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  About
                </motion.a>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/20 hover:text-white"
                >
                  Get Started
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMenu}
                  className="text-white hover:bg-white/20"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
              initial={false}
              animate={{
                height: isMenuOpen ? 'auto' : 0,
                opacity: isMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-3">
                <motion.a
                  href="#home"
                  whileHover={{ x: 5 }}
                  className="block text-white/80 hover:text-white transition-colors duration-200"
                >
                  Home
                </motion.a>
                <motion.a
                  href="#components"
                  whileHover={{ x: 5 }}
                  className="block text-white/80 hover:text-white transition-colors duration-200"
                >
                  Components
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ x: 5 }}
                  className="block text-white/80 hover:text-white transition-colors duration-200"
                >
                  About
                </motion.a>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/20 hover:text-white mt-3"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mt-20"
      >
        <Card className="m-4 bg-white/5 backdrop-blur-sm border-white/10">
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <span className="text-white font-semibold">
                    Shadcn UI Demo
                  </span>
                </div>
                <p className="text-white/60 text-sm">
                  Demonstrating the power and beauty of Shadcn/ui components
                  with modern design patterns.
                </p>
              </div>

              {/* Links Section */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Quick Links</h3>
                <div className="space-y-2">
                  <motion.a
                    href="#home"
                    whileHover={{ x: 5 }}
                    className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Home
                  </motion.a>
                  <motion.a
                    href="#components"
                    whileHover={{ x: 5 }}
                    className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Components
                  </motion.a>
                  <motion.a
                    href="#about"
                    whileHover={{ x: 5 }}
                    className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    About
                  </motion.a>
                </div>
              </div>

              {/* Social Section */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Connect</h3>
                <div className="flex space-x-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Github size={16} className="text-white/80" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Twitter size={16} className="text-white/80" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Linkedin size={16} className="text-white/80" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/40 text-sm">
                © 2024 Shadcn UI Demo. Built with Next.js and Tailwind CSS.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-white/40 hover:text-white/60 transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-white/40 hover:text-white/60 transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </Card>
      </motion.footer>
    </div>
  );
};

export default Layout;
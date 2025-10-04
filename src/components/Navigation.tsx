import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 animate-fade-in">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-bold text-primary">Girlified</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/our-story" className="text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
              Our Story
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
              About Us
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
              Girlified Smart Pad
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5 focus:outline-none">
                Blog
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="cursor-pointer">All Posts</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/health" className="cursor-pointer">Health & Wellness</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/sustainability" className="cursor-pointer">Sustainability</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog/stories" className="cursor-pointer">Success Stories</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact" className="text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
              Contact
            </Link>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link
              to="/our-story"
              className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Girlified Smart Pad
            </Link>
            <div className="space-y-2">
              <p className="text-foreground font-medium px-2">Blog</p>
              <Link
                to="/blog"
                className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 pl-4"
                onClick={() => setIsOpen(false)}
              >
                All Posts
              </Link>
              <Link
                to="/blog/health"
                className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 pl-4"
                onClick={() => setIsOpen(false)}
              >
                Health & Wellness
              </Link>
              <Link
                to="/blog/sustainability"
                className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 pl-4"
                onClick={() => setIsOpen(false)}
              >
                Sustainability
              </Link>
              <Link
                to="/blog/stories"
                className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 pl-4"
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </Link>
            </div>
            <Link
              to="/contact"
              className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
              Shop Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

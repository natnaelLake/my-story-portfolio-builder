import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Briefcase, Code, Mail, Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 py-4 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
            Portfolio
          </Link>
          <div className="flex items-center space-x-8">
            {[
              { path: "/", icon: Home, label: "Home" },
              { path: "/resume", icon: FileText, label: "Resume" },
              { path: "/projects", icon: Code, label: "Projects" },
              { path: "/experience", icon: Briefcase, label: "Experience" },
              { path: "/contact", icon: Mail, label: "Contact" },
            ].map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className="relative group"
              >
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                  <span className="hidden md:inline">{label}</span>
                </div>
                {isActive(path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
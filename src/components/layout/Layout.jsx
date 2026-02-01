import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleBackground from "../3d/ParticleBackground";
// 1. Import the new Spotlight component
import Spotlight from "../ui/Spotlight"; 

export default function Layout({ children }) {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Overview" },
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30">
      <ParticleBackground />
      
      {/* 2. Add the Spotlight here, right after the background */}
      <Spotlight />

      {/* Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
        <div className="flex gap-1 p-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-lg">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <div
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-28 px-6 pb-12 max-w-5xl mx-auto">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
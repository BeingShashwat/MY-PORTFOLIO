// src/pages/Home.jsx
import { portfolioData } from "../data/portfolioData";
import { Button } from "@/components/ui/button";
import { Terminal, Activity, Mail } from "lucide-react"; 
import { Link } from "react-router-dom";

// Helper component to load icons from /public/assets/
const SocialIcon = ({ id, className }) => (
  <img 
    src={`/assets/${id}.svg`} 
    alt={id} 
    className={`${className} object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity`} 
  />
);

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[60vh] py-12">
      <div className="space-y-8 max-w-3xl">
        
        {/* Rating Badges */}
        <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                <Terminal size={14} />
                <span>1700+ LeetCode Rating</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                <Activity size={14} />
                <span>1100+ Codeforces Rating</span> 
            </div>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Hi, <br />
          I'm {portfolioData.name}.
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
          {portfolioData.tagline}
        </p>
        
        {/* Bio */}
        <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
          {portfolioData.bio}
        </p>

        {/* Socials Section (View Work Removed) */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-wrap gap-4">
            
            {/* Formal Socials - Now aligned to the start */}
            {portfolioData.social.formal.map((profile) => (
              <a key={profile.name} href={profile.url} target="_blank" rel="noreferrer">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group rounded-full border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all h-11"
                >
                  {/* Icon Image */}
                  <SocialIcon id={profile.id} className="mr-2 w-4 h-4" />
                  {profile.name}
                </Button>
              </a>
            ))}
          </div>

          {/* Informal Socials */}
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <span className="text-xs font-semibold uppercase tracking-wider">Socials</span>
            <div className="w-px h-4 bg-slate-800"></div>
            <div className="flex gap-4">
                {portfolioData.social.informal.map((profile) => (
                  <a 
                    key={profile.name} 
                    href={profile.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group transition-colors"
                    title={profile.name}
                  >
                    <SocialIcon id={profile.id} className="w-6 h-6 p-0.5 hover:scale-110 transition-transform" />
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Minimal Contact Section */}
        <div className="pt-10 mt-8 border-t border-slate-800/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold text-slate-200">Ready to collaborate?</h2>
                <p className="text-slate-500 text-sm">Open for full-time opportunities and freelance projects.</p>
            </div>
            
            <a href={`mailto:${portfolioData.social.email}`}>
                <Button variant="outline" className="rounded-full border-indigo-500/30 bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all group">
                    <Mail className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" /> 
                    Say Hello
                </Button>
            </a>
        </div>
      </div>
    </div>
  );
}
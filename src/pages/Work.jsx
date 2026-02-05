// src/pages/Work.jsx
import { portfolioData } from "../data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  return (
    <div className="space-y-16">
      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-indigo-500 rounded-full"></span>
          Professional Experience
        </h2>
        <div className="grid gap-6">
          {portfolioData.experience.map((exp, idx) => (
            <Card key={idx} className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-100">{exp.role}</CardTitle>
                    <CardDescription className="text-indigo-400 text-base">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-slate-400 border-slate-700">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-indigo-500 rounded-full"></span>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project) => (
            <a 
                key={project.id} 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="block h-full"
            >
                {/* UPDATED CARD STYLING: Backdrop Blur + Blue Glow on Hover */}
                <Card className="bg-slate-900/40 backdrop-blur-md border-slate-800 h-full hover:border-indigo-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.15)] transition-all duration-300 flex flex-col group cursor-pointer">
                <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">{project.category}</span>
                        <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-indigo-100 transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">{project.details}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map((tech) => (
                        <Badge key={tech} className="bg-slate-800 group-hover:bg-slate-700 text-slate-300 border-transparent">
                        {tech}
                        </Badge>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
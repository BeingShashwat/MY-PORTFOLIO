import { portfolioData } from "../data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Technical Arsenal</h2>
          <div className="grid grid-cols-2 gap-4">
            {portfolioData.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-colors">
                <skill.icon className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
             <GraduationCap className="text-indigo-500" /> Education
          </h2>
          <div className="relative border-l border-slate-800 ml-3 space-y-8 pl-8 py-2">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-indigo-500" />
                <h3 className="text-lg font-bold text-slate-100">{edu.institution}</h3>
                <p className="text-indigo-400">{edu.degree}</p>
                <div className="flex justify-between items-center text-sm text-slate-500 mt-1">
                  <span>{edu.period}</span>
                  <span className="font-semibold text-slate-400">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
             <Trophy className="text-yellow-500" /> Achievements
          </h2>
          <div className="space-y-4">
            {portfolioData.achievements.map((item, idx) => (
              <Card key={idx} className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex gap-4 items-start">
                  <span className="text-2xl font-bold text-slate-700">0{idx + 1}</span>
                  <p className="text-slate-300 leading-relaxed pt-1">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
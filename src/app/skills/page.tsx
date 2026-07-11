import PageContainer from "@/components/PageContainer";

export default function SkillsPage() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"]
    },
    {
      name: "Backend & Database",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Redis"]
    },
    {
      name: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"]
    }
  ];

  return (
    <PageContainer title="Skills" color="#6df0a3">
      <div className="space-y-8">
        <p className="text-lg text-white/80 leading-relaxed">
          The tools and technologies I use to build robust digital solutions.
        </p>

        <div className="grid gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-[#6df0a3] mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-black/40 border border-white/20 rounded-full text-white/90 font-medium hover:border-[#6df0a3]/60 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

import PageContainer from "@/components/PageContainer";

export default function ProjectsPage() {
  const projects = [
    { title: "Project Alpha", desc: "A robust e-commerce platform built with Next.js and Tailwind.", year: "2023" },
    { title: "Project Beta", desc: "A real-time chat application utilizing WebSockets and React.", year: "2022" },
    { title: "Project Gamma", desc: "An open-source UI component library for modern web apps.", year: "2021" },
  ];

  return (
    <PageContainer title="Projects" color="#e86a58">
      <div className="space-y-8">
        <p className="text-lg text-white/80 leading-relaxed">
          Here is a constellation of projects I have built over the years. Each one represents a unique challenge solved and a new skill acquired.
        </p>
        
        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#e86a58]/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#e86a58] transition-colors">{project.title}</h3>
                <span className="text-sm text-white/50 bg-black/50 px-3 py-1 rounded-full">{project.year}</span>
              </div>
              <p className="text-white/70">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

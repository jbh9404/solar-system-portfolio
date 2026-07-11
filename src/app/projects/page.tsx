import PageContainer from "@/components/PageContainer";

export default function ProjectsPage() {
  const professionalProjects = [
    {
      title: "Payverse Integrated Payment",
      company: "Eromnet (Global Fintech)",
      desc: "Led the complete UX/UI revamp of the core payment service. Implemented cross-origin secure communication, SRI, and dynamic payment method categorization based on countries. Reduced AWS resource costs by 33% through dynamic script loading.",
      year: "2025 - 2026",
      tags: ["React", "TypeScript", "Vite", "Spring Boot", "AWS"],
      link: "https://www.payverseglobal.com/",
      image:
        "https://fastly.picsum.photos/id/973/200/300.jpg?hmac=gFjS6R63ZUmM9pkLFyPxuEmsxvZ_e8VJxB3mcXpvTUQ",
    },
    {
      title: "Shopify Global Payment App",
      company: "Eromnet",
      desc: "Commercialized an offsite payment app strictly adhering to Shopify guidelines. Ensured 100% data integrity with real-time S2S synchronization and webhook integration.",
      year: "2025 - 2026",
      tags: ["Remix", "Shopify CLI", "Node.js", "GraphQL"],
      link: "https://apps.shopify.com/payverse-payments",
      image:
        "https://fastly.picsum.photos/id/973/200/300.jpg?hmac=gFjS6R63ZUmM9pkLFyPxuEmsxvZ_e8VJxB3mcXpvTUQ",
    },
    {
      title: "MEDMAP Hybrid Platform",
      company: "Bluebeaker",
      desc: "Developed a medical 3D/video communication platform. Utilized a hybrid architecture with React webviews inside a C# WPF container to optimize heavy 3D rendering for hospitals.",
      year: "2022 - 2023",
      tags: ["React", "Zustand", "WPF", "C#", "Swift"],
      link: "https://www.medmap.kr/",
      image:
        "https://fastly.picsum.photos/id/973/200/300.jpg?hmac=gFjS6R63ZUmM9pkLFyPxuEmsxvZ_e8VJxB3mcXpvTUQ",
    },
    {
      title: "WorkOnward",
      company: "DHD Consulting (US)",
      desc: "Built a location-based social recruiting platform. Implemented custom map searches and real-time pin clustering using Mapbox API to connect local businesses with job seekers.",
      year: "2021",
      tags: ["React", "Node.js", "Mapbox API", "MongoDB"],
      link: "https://www.workonward.com/",
      image:
        "https://fastly.picsum.photos/id/973/200/300.jpg?hmac=gFjS6R63ZUmM9pkLFyPxuEmsxvZ_e8VJxB3mcXpvTUQ",
    },
    {
      title: "TravelyMap",
      company: "TravelyMap (Startup)",
      desc: "Co-founded a location-based travel itinerary platform. Reached 40,000 users, built core UI components, and acquired 1M+ views on marketing channels.",
      year: "2019 - 2021",
      tags: ["React", "PHP", "Google Map API", "AWS"],
      link: "#",
      image:
        "https://fastly.picsum.photos/id/973/200/300.jpg?hmac=gFjS6R63ZUmM9pkLFyPxuEmsxvZ_e8VJxB3mcXpvTUQ",
    },
  ];

  const personalProjects = [
    {
      title: "Personal Portfolio",
      company: "Personal Side Project",
      desc: "A modern, responsive personal portfolio website built with Next.js and TailwindCSS. Designed with a unique space/galaxy theme to showcase my professional experience and side projects.",
      year: "2026",
      tags: ["Next.js", "TypeScript", "React", "TailwindCSS"],
      link: "https://byunghoon-portfolio.vercel.app/",
      image:
        "https://fastly.picsum.photos/id/973/200/300.jpg?hmac=gFjS6R63ZUmM9pkLFyPxuEmsxvZ_e8VJxB3mcXpvTUQ",
    },
    {
      title: "PINCATION",
      company: "Personal Side Project",
      desc: "A map-interface based social memory sharing platform. Spearheaded native map API rendering optimization and launched on iOS App Store & Android Play Store.",
      year: "2022 - 2023",
      tags: ["React Native", "Next.js", "Spring Boot", "PostgreSQL"],
      link: "https://pincation.com/",
      image:
        "https://fastly.picsum.photos/id/973/200/300.jpg?hmac=gFjS6R63ZUmM9pkLFyPxuEmsxvZ_e8VJxB3mcXpvTUQ",
    },
    {
      title: "Wecume Photo Editor",
      company: "Personal Side Project",
      desc: "A custom photo editing utility app based on text, stickers, and layers. Handled everything from Vultr cloud setup and backend API to frontend and app packaging. Launched exclusively on the iOS App Store.",
      year: "2021",
      tags: ["React", "Node.js", "Express", "MySQL", "Cordova"],
      link: "https://wecume.com/",
      image:
        "https://fastly.picsum.photos/id/973/200/300.jpg?hmac=gFjS6R63ZUmM9pkLFyPxuEmsxvZ_e8VJxB3mcXpvTUQ",
    },
  ];

  const renderProjectCard = (project: any, idx: number, colorTheme: "orange" | "blue") => {
    const isOrange = colorTheme === "orange";

    // Tailwind classes mapped dynamically based on the theme
    const hoverBorderColor = isOrange ? "hover:border-[#e86a58]/50" : "hover:border-[#4facf7]/50";
    const hoverShadow = isOrange
      ? "hover:shadow-[0_10px_30px_rgba(232,106,88,0.1)]"
      : "hover:shadow-[0_10px_30px_rgba(79,172,247,0.1)]";
    const textColor = isOrange ? "text-[#e86a58]" : "text-[#4facf7]";
    const groupHoverTextColor = isOrange
      ? "group-hover:text-[#e86a58]"
      : "group-hover:text-[#4facf7]";

    return (
      <div
        key={idx}
        className={`group flex flex-col bg-white/5 rounded-2xl border border-white/10 ${hoverBorderColor} transition-all duration-300 overflow-hidden hover:bg-white/10 hover:-translate-y-1 ${hoverShadow}`}
      >
        <div className="w-full h-48 relative overflow-hidden bg-[#1a1a2e]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white/90 border border-white/10">
            {project.year}
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <p className={`${textColor} text-xs font-bold tracking-wider uppercase mb-1`}>
              {project.company}
            </p>
            <h3
              className={`text-xl font-bold text-white ${groupHoverTextColor} transition-colors leading-tight`}
            >
              {project.title}
            </h3>
          </div>
          <p className="text-white/70 text-sm flex-1 mb-6 leading-relaxed">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tags.map((tag: string, tIdx: number) => (
              <span
                key={tIdx}
                className="text-[10px] font-semibold bg-white/10 text-white/80 px-2 py-1 rounded border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href={project.link}
              target={project.link === "#" ? "_self" : "_blank"}
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-medium text-white ${groupHoverTextColor} transition-colors group/link`}
            >
              View Project
              <span className="text-lg group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageContainer title="Projects" color="#e86a58">
      <div className="space-y-16">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <p className="text-lg text-white/80 leading-relaxed">
            A showcase of my professional work across global fintech, healthcare, and recruiting
            domains, as well as production-ready personal side projects built from scratch.
          </p>
        </div>

        {/* Professional Experience Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#e86a58]/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((project, idx) => renderProjectCard(project, idx, "orange"))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white">Personal Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#4facf7]/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, idx) => renderProjectCard(project, idx, "blue"))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}

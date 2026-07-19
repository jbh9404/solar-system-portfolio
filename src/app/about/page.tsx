import PageContainer from "@/components/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer title="About Me" color="#4facf7">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Profile Image & Basic Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-5">
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-[#4facf7]/30 shadow-[0_0_30px_rgba(79,172,247,0.3)]">
            <img src="/common/me.jpg" alt="Byunghoon Jun" className="object-cover w-full h-full" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-1">Byunghoon Jun</h2>
            <p className="text-[#4facf7] font-medium text-lg">Full-Stack / Frontend Engineer</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/jbh9404"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/80 hover:text-white transition-all text-sm"
            >
              GitHub
            </a>
            <a
              href="mailto:jbh9404@naver.com"
              className="px-4 py-2 bg-[#4facf7]/10 hover:bg-[#4facf7]/20 border border-[#4facf7]/30 rounded-full text-[#4facf7] hover:text-[#4facf7] transition-all text-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Education */}
          <div className="w-full mt-4 bg-white/5 p-5 rounded-xl border border-white/10 text-left">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              🎓 Education
            </h3>
            <div>
              <h4 className="text-[#4facf7] font-semibold">New York University (NYU)</h4>
              <p className="text-sm text-white/80">
                Computer Science <span className="text-xs text-[#4facf7]/80 ml-1 font-medium">(Graduated)</span>
              </p>
              <p className="text-xs text-white/50 mt-1">2018.09 - 2021.02</p>
            </div>
          </div>
        </div>

        {/* Intro & Highlights */}
        <div className="w-full md:w-2/3 text-lg text-white/80 leading-relaxed space-y-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="mb-4">
              Hello! I am a 6th-year <strong>Full-Stack & Frontend Engineer</strong> with a proven
              track record of solving complex business problems across global fintech, healthcare,
              and recruiting domains.
            </p>
            <p>
              I specialize in building sophisticated UI/UX using React and TypeScript, while also
              possessing deep architectural knowledge in backend systems and CI/CD cloud
              infrastructure. My experience spans the entire product lifecycle, from ideation to
              deployment across web and cross-platform mobile apps.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white pt-4">Why Me?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-white/5 to-transparent p-5 rounded-xl border border-white/10 hover:border-[#4facf7]/50 transition-colors">
              <h4 className="text-[#4facf7] font-semibold text-lg mb-2 flex items-center gap-2">
                🌍 Global & Fluent
              </h4>
              <p className="text-sm text-white/70">
                Experienced in working at a US-based company and coordinating with global
                headquarters. I excel in cross-cultural communication and technical bridging in
                English.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-transparent p-5 rounded-xl border border-white/10 hover:border-[#4facf7]/50 transition-colors">
              <h4 className="text-[#4facf7] font-semibold text-lg mb-2 flex items-center gap-2">
                💻 Full-Stack Expertise
              </h4>
              <p className="text-sm text-white/70">
                Comprehensive knowledge spanning Frontend (Web/App) and Backend. Proficient in
                various frameworks including Next.js, React Native, Spring Boot, and Node.js.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-transparent p-5 rounded-xl border border-white/10 hover:border-[#4facf7]/50 transition-colors">
              <h4 className="text-[#4facf7] font-semibold text-lg mb-2 flex items-center gap-2">
                🚀 Proactive Creator
              </h4>
              <p className="text-sm text-white/70">
                Beyond my professional work, I actively develop, deploy, and operate side projects,
                successfully launching native apps and web services for real users.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-transparent p-5 rounded-xl border border-white/10 hover:border-[#4facf7]/50 transition-colors">
              <h4 className="text-[#4facf7] font-semibold text-lg mb-2 flex items-center gap-2">
                🤖 AI-Driven Productivity
              </h4>
              <p className="text-sm text-white/70">
                Actively adopting AI tools (LLM CLIs, MCP integrations) into real-world workflows to
                automate tasks, ensuring high-quality code and drastically reducing development
                cycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

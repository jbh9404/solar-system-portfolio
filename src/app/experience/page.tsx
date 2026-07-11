import PageContainer from "@/components/PageContainer";

export default function ExperiencePage() {
  const experiences = [
    { role: "Senior Frontend Engineer", company: "Tech Innovations Inc.", period: "2021 - Present", details: "Led the frontend team to migrate legacy architecture to Next.js, improving performance by 40%." },
    { role: "Web Developer", company: "Digital Solutions LLC", period: "2018 - 2021", details: "Developed responsive web applications for various clients and maintained existing enterprise software." },
  ];

  return (
    <PageContainer title="Experience" color="#f9d776">
      <div className="space-y-10">
        <p className="text-lg text-white/80 leading-relaxed">
          My professional journey across the tech galaxy.
        </p>

        <div className="relative border-l border-white/20 pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-[#f9d776] border-4 border-black" style={{ boxShadow: '0 0 10px #f9d776' }} />
              
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#f9d776]/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-[#f9d776] text-sm font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg text-white/60 mb-4">{exp.company}</h4>
                <p className="text-white/80 leading-relaxed">{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

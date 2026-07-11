import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Experience | Byunghoon Jun",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Full-Stack / Frontend Engineer",
      company: "Eromnet (Global Fintech Platform)",
      period: "2024.06 - Present",
      details: [
        "Led UX/UI revamp of Payverse integrated payment window. Implemented cross-origin secure communication, SRI, and dynamic script loading, reducing AWS data transfer costs by 33%.",
        "Commercialized Shopify Global Payment App (Offsite), ensuring 100% order data integrity via real-time S2S webhook synchronization.",
        "Improved Payverse SDK and payment flows, migrating from popups to single-page redirects to reduce drop-off rates.",
        "Launched Payverse Developer Center using Next.js and MDX for optimized technical documentation.",
        "Renewed internal back-office system from legacy JSP to React ecosystem, stabilizing operations with i18n support.",
      ],
    },
    {
      role: "System Support Engineer / PM",
      company: "Facephi APAC (Global Biometric Auth)",
      period: "2023.05 - 2024.04",
      details: [
        "Managed cross-platform technical support (React Native, Flutter, iOS, Android) for biometric authentication widgets for global financial clients.",
        "Operated an IT Help Desk bridging the Spanish headquarters and APAC clients through fluent English technical communication.",
        "Led the 'Korea Fintech Week 2023' B2B booth operations, handling technical marketing, branding, and new partnerships.",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "Bluebeaker (Medical 3D Platform)",
      period: "2022.01 - 2023.04",
      details: [
        "Developed 'MEDMAP', a medical 3D/video platform. Implemented a hybrid architecture using React webviews inside a C# WPF container to handle heavy 3D rendering.",
        "Launched MEDMAP tablet application across iOS and Android app stores within 5 months.",
        "Built the 'Bluebeaker Lab' 3D content library and a multilingual Next.js website for an ophthalmic medical device company.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "DHD Consulting (US - New York)",
      period: "2021.04 - 2022.01",
      details: [
        "Designed the initial architecture and REST APIs for 'WorkOnward', a location-based social recruiting platform.",
        "Implemented custom map searches and real-time pin clustering using Mapbox API, successfully launching the MVP in the US market.",
      ],
    },
    {
      role: "CSO & Frontend Developer (Founding Member)",
      company: "TravelyMap (Location-based Travel Startup)",
      period: "2019.10 - 2021.03",
      details: [
        "Spearheaded the initial MVP and official product launch, solely developing React-based UI components.",
        "Utilized Google Analytics for data-driven growth hacking, successfully reaching 40,000 active users.",
        "Managed the corporate marketing channel, achieving over 1 million views and directly contributing to securing the Pre-TIPS government grant.",
      ],
    },
  ];

  return (
    <PageContainer title="Experience" color="#f9d776">
      <div className="space-y-10">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <p className="text-lg text-white/80 leading-relaxed">
            My professional journey across global fintech, healthcare, recruiting, and startups.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 pl-8 space-y-12 ml-2 md:ml-6 mt-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div
                className="absolute -left-[43px] top-1.5 h-5 w-5 rounded-full bg-[#f9d776] border-[4px] border-[#1a1a2e] group-hover:scale-125 transition-transform duration-300 z-10"
                style={{ boxShadow: "0 0 15px rgba(249, 215, 118, 0.4)" }}
              />

              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 group-hover:border-[#f9d776]/40 transition-all duration-300 group-hover:bg-white/10 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(249,215,118,0.1)]">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#f9d776] transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-white/70 mt-1 font-medium">{exp.company}</h4>
                  </div>
                  <div className="inline-flex">
                    <span className="bg-[#f9d776]/10 text-[#f9d776] text-sm font-semibold px-4 py-1.5 rounded-full whitespace-nowrap border border-[#f9d776]/20">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-white/80 leading-relaxed flex items-start text-sm md:text-base"
                    >
                      <span className="text-[#f9d776] mr-3 mt-0.5 text-xs">✦</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

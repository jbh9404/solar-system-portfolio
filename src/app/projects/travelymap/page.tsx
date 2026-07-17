"use client";

import PageContainer from "@/components/PageContainer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function TravelyMapProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <PageContainer title="TravelyMap" color="#e86a58">
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <section className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                CSO & Product Planning / Development
              </h2>
              <p className="text-[#e86a58] font-medium tracking-wide uppercase">
                Location-based free travel platform Co-Founder
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/80 font-mono bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                Oct 2019 – Mar 2021
              </p>
            </div>
          </div>
        </section>

        {/* Project 1 */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#e86a58]/20 flex items-center justify-center border border-[#e86a58]/50 shadow-[0_0_15px_rgba(232,106,88,0.3)]">
              <span className="text-[#e86a58] font-bold">01</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Official Version Launch & Data-Driven Enhancement
            </h3>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 transition-colors duration-300">
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-white/70">
              <p>
                <strong className="text-white">Period:</strong> May 2020 – Oct 2020
              </p>
              <p>
                <strong className="text-white">Contribution:</strong> Planning 70% | PM 100% | Ops
                50% | Frontend 20%
              </p>
            </div>
            <p className="text-white/80 leading-relaxed">
              <strong className="text-white">Overview:</strong> Functional enhancements for business
              expansion and traffic data analysis optimization.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "JavaScript",
                "React",
                "PHP",
                "MySQL",
                "Google Map API",
                "Google Analytics",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="text-lg font-semibold text-[#e86a58]">Key Achievements & Roles</h4>
              <ul className="list-disc list-outside ml-5 space-y-3 text-white/80 leading-relaxed">
                <li>
                  <strong className="text-white">Feature Enhancement:</strong> Intensively developed
                  React-based detailed pages for coupons and UI components. Planned the local guide
                  category and established a big-data collection and input pipeline to expand
                  service volume.
                </li>
                <li>
                  <strong className="text-white">Growth Hacking & Performance:</strong> Integrated
                  Google Analytics (GA) to analyze page-specific traffic and introduced a continuous
                  UI/UX improvement cycle, securing an accumulated 40,000 user traffic after the
                  official launch.
                </li>
                <li>
                  <strong className="text-white">Business Impact:</strong> Based on systematically
                  secured data metrics and products, played a pivotal role in being selected for the
                  Korea Tourism Organization Marketing Support Program, Pre-TIPS, and winning the
                  Grand Prize at the Seoul Tourism Startup Audition.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project 2 */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#e86a58]/20 flex items-center justify-center border border-[#e86a58]/50 shadow-[0_0_15px_rgba(232,106,88,0.3)]">
              <span className="text-[#e86a58] font-bold">02</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Location-Based Travel Platform MVP Planning & Development
            </h3>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 transition-colors duration-300">
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-white/70">
              <p>
                <strong className="text-white">Period:</strong> Oct 2019 – Feb 2020
              </p>
              <p>
                <strong className="text-white">Contribution:</strong> Planning 50% | Frontend 15%
              </p>
            </div>
            <p className="text-white/80 leading-relaxed">
              <strong className="text-white">Overview:</strong> Initial model construction for
              market validation of a travel itinerary planning service.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["JavaScript", "TypeScript", "React", "PHP", "MySQL", "Google Map API", "AWS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full border border-white/5"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="text-lg font-semibold text-[#e86a58]">Key Achievements & Roles</h4>
              <ul className="list-disc list-outside ml-5 space-y-3 text-white/80 leading-relaxed">
                <li>
                  <strong className="text-white">Initial Service Build-up:</strong> As a co-founding
                  member, planned the overall page structure and took full charge of the frontend
                  publishing of the landing page, successfully launching the MVP version.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project 3 */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#e86a58]/20 flex items-center justify-center border border-[#e86a58]/50 shadow-[0_0_15px_rgba(232,106,88,0.3)]">
              <span className="text-[#e86a58] font-bold">03</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Naver Post Channel Operations
            </h3>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 transition-colors duration-300">
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-white/70">
              <p>
                <strong className="text-white">Period:</strong> Oct 2019 – Nov 2020
              </p>
              <p>
                <strong className="text-white">Contribution:</strong> Content Planning 50% | Channel
                Operations 100%
              </p>
            </div>
            <p className="text-white/80 leading-relaxed">
              <strong className="text-white">Overview:</strong> Establishing marketing channels to
              raise TravelyMap&apos;s brand awareness and drive new user acquisition.
            </p>

            <div className="mt-6 space-y-4">
              <h4 className="text-lg font-semibold text-[#e86a58]">Key Achievements & Roles</h4>
              <ul className="list-disc list-outside ml-5 space-y-3 text-white/80 leading-relaxed">
                <li>
                  <strong className="text-white">
                    Achieved 1 Million Cumulative Views & Channel Growth:
                  </strong>{" "}
                  Operated the enterprise blog &quot;Naver Post&quot; channel, publishing curated
                  content such as recommended travel destinations, cafes, and restaurants nationwide
                  along with the TravelyMap map, reaching over 1 million cumulative views.
                </li>
                <li>
                  <strong className="text-white">User Acquisition & Service Activation:</strong>{" "}
                  Directly linked the locations introduced in the content to the TravelyMap service,
                  successfully driving natural traffic from subscribers and leading to new user
                  registrations.
                </li>
                <li>
                  <strong className="text-white">Travel Category Top Rankings:</strong> Through
                  targeted content publishing strategies, ranked in the Top 10 of the Naver Post
                  travel category over 30 times, significantly contributing to the establishment of
                  early brand awareness.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-6 h-1 bg-[#e86a58] rounded-full shadow-[0_0_10px_#e86a58]"></span>
            Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-video shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(`/projects/travelymap-sample-${num}.png`)}
              >
                <Image
                  src={`/projects/travelymap-sample-${num}.png`}
                  alt={`TravelyMap Sample ${num}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 transform translate-y-4 group-hover:translate-y-0">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back navigation */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e86a58]/10 hover:bg-[#e86a58]/20 text-[#e86a58] font-semibold transition-all border border-[#e86a58]/30 hover:border-[#e86a58]/50 hover:-translate-x-1"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Lightbox Modal via Portal */}
      {mounted && selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged gallery view"
              fill
              className="object-contain"
            />
            <button 
              className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )}
    </PageContainer>
  );
}

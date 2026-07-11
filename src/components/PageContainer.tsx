import Link from "next/link";
import { ReactNode } from "react";

interface PageContainerProps {
  title: string;
  color: string;
  children: ReactNode;
}

export default function PageContainer({ title, color, children }: PageContainerProps) {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden flex flex-col items-center pt-40 pb-20 px-4 md:px-8">
      {/* Background stars effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black" />
      
      {/* Contextual Back Button */}
      <Link 
        href="/" 
        className="fixed top-20 md:top-24 left-4 md:left-12 z-40 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-md border border-white/10 shadow-lg text-sm font-medium tracking-wide group hover:-translate-x-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#4facf7] group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-gray-200 group-hover:text-white transition-colors">Return to Universe</span>
      </Link>

      <div className="z-10 w-full max-w-4xl flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <header className="flex flex-col gap-2">
          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tighter"
            style={{ textShadow: `0 0 30px ${color}80`, color: '#fff' }}
          >
            {title}
          </h1>
          <div className="h-1 w-24 rounded-full mt-4" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
        </header>

        <section className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
          {children}
        </section>
      </div>
    </main>
  );
}

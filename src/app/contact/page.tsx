"use client";

import PageContainer from "@/components/PageContainer";

export default function ContactPage() {
  return (
    <PageContainer title="Contact" color="#b67df2">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-white/80 leading-relaxed">
            Ready to start a new project or just want to say hi? Send a transmission across the cosmos. 
            I am always open to discussing new opportunities and exciting ideas.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#b67df2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/50">Email</p>
                <a href="mailto:hello@example.com" className="text-white hover:text-[#b67df2] transition-colors font-medium">hello@example.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#b67df2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/50">Social</p>
                <a href="#" className="text-white hover:text-[#b67df2] transition-colors font-medium mr-4">LinkedIn</a>
                <a href="#" className="text-white hover:text-[#b67df2] transition-colors font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Name</label>
            <input type="text" id="name" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#b67df2] focus:ring-1 focus:ring-[#b67df2] transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email</label>
            <input type="email" id="email" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#b67df2] focus:ring-1 focus:ring-[#b67df2] transition-all" placeholder="john@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Message</label>
            <textarea id="message" rows={4} className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#b67df2] focus:ring-1 focus:ring-[#b67df2] transition-all resize-none" placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-[#b67df2] hover:bg-[#a268e0] text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-[0_0_15px_rgba(182,125,242,0.4)] hover:shadow-[0_0_25px_rgba(182,125,242,0.6)]">
            Send Message
          </button>
        </form>
      </div>
    </PageContainer>
  );
}

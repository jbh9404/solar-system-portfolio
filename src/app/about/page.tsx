import PageContainer from "@/components/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer title="About Me" color="#4facf7">
      <div className="text-lg text-white/80 leading-relaxed space-y-6">
        <p>
          Hello! I am a passionate developer who loves exploring the vast universe of code. My
          journey started with a curiosity for how things work, and it has evolved into a deep
          passion for creating beautiful, functional, and scalable applications.
        </p>
        <p>
          Just like space exploration, software development requires problem-solving, creativity,
          and the courage to venture into the unknown. I thrive on challenges and am always eager to
          learn new technologies and frameworks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-[#4facf7] font-semibold text-xl mb-2">Vision</h3>
            <p className="text-sm">
              To build digital experiences that leave a lasting impact and make the web a more
              beautiful place.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-[#4facf7] font-semibold text-xl mb-2">Mission</h3>
            <p className="text-sm">
              Continuously push the boundaries of frontend engineering by combining aesthetics with
              performant code.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

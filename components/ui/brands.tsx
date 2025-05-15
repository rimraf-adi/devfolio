import { Building2, Rocket, Briefcase, Factory } from 'lucide-react';

const brands = [
  { name: 'CoreOS', icon: Building2 },
  { name: 'Euphoria', icon: Rocket },
  { name: 'Acme Co.', icon: Briefcase },
  { name: 'TechCorp', icon: Factory },
];

export default function AboutGrid() {
  return (
    <section className="bg-gray-50 w-full h-full gap-4 md:gap-6 flex flex-col justify-around items-center">
      {/* How I Work */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col flex-1 justify-center">
        <h2 className="text-xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'var(--font-antic)' }}>How I Work</h2>
        <p style={{ fontFamily: 'var(--font-avenir)' }} className="text-gray-700 text-sm leading-relaxed">
          I believe in building robust, user-focused solutions with clean code, rapid prototyping, and a strong emphasis on collaboration and continuous learning. My approach is grounded in curiosity, empathy for users, and a drive to turn ideas into impactful products. I value open communication, iterative feedback, and always strive to deliver work that is both reliable and delightful to use.
        </p>
      </div>
      {/* What I Solve */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col flex-1 justify-center">
        <h2 className="text-xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'var(--font-antic)' }}>What I Solve</h2>
        <p style={{ fontFamily: 'var(--font-avenir)' }} className="text-gray-700 text-sm leading-relaxed">
          I build tools and platforms for developer productivity, real-time collaboration, and scalable machine learning. My work spans developer experience, distributed systems, and data infrastructure—empowering teams to move faster and solve complex problems with clarity and efficiency. I enjoy tackling challenges in automation, data engineering, and seamless user experiences.
        </p>
      </div>
      {/* Current Focus */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col flex-1 justify-center">
        <h2 className="text-xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'var(--font-antic)' }}>Current Focus</h2>
        <p style={{ fontFamily: 'var(--font-avenir)' }} className="text-gray-700 text-sm leading-relaxed">
          I'm currently exploring advancements in AI infrastructure, building open-source tools for distributed systems, and contributing to projects that bridge the gap between research and real-world applications. I'm passionate about learning new technologies, mentoring others, and collaborating on projects that have a positive impact.
        </p>
      </div>
    </section>
  );
} 
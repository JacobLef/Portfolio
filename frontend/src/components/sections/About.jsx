import { RevealOnScroll } from "../RevealOnScroll";

/**
 * Constructs the About page of the Website, containing information regarding my architectural
 * skills, backend skills, software knowledge, languages, education, and work experience.
 */
export const About = () => {
  const architecturalSkills = [
    "OOP",
    "Layered Architecture",
    "Client-server Architecture",
    "Modular Design",
    "Domain Driven Design"
  ];
  const backendSkills = [
    "Node.js/npm",
    "Vite",
    "Python",
    "AWS",
    "Postgres & SQL",
  ]
  const softwares = [
    "Docker",
    "Git/Version Control",
    "VSCode & nvim/vim",
    "CMake",
    "Linux",
  ]
  const languages = [
    "Java",
    "C/C++",
    "Python",
    "Bash",
    "Typescript",
    "Rust",
  ]
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm a sophomore computer science major passionate about building scalable backend systems and cloud infrastructure. With experience in Java, Typescript, Python, and
            C/C++, I enjoy tackling complex technical challenges that require deep systems thinking and careful architectural design.
          </p>
          <p className="text-gray-300 mb-6">
            I'm drawn to behind-the-scenes work—optimizing performance, designing clean APIs, and building infrastructure that powers modern applications at scale. Whether it's network software engineering or distributed systems, I'm constantly seeking opportunities to deepen my understanding of how modern software infrastructure works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Architectural Skills</h3>
              <div className="flex flex-wrap gap-2">
                {architecturalSkills.map((arch, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {arch}
                  </span>
                ))}
              </div>
            </div>
           
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend Skills</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Software & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {softwares.map((software, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {software}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 📚Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>
                  Pursuing M.S. Software Engineering Systems: Northeastern University (2025-2029)
                </strong>
              </li>
              <li>
                <strong>
                  Pursuing B.S. Computer Science: Northeastern University (2024-2028)
                </strong>
              </li>
              <li>
                Relevant Coursework: Data Structures, Object-Oriented Design, Computer Systems, Software Engineering 
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💻Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Backend Software Developer at Sandbox Northeastern (July 2025 - Present)
                </h4>
                <p>
                  Developed and maintained backend services for full-stack web applications using the T3 stack. Participated in architectural decisions, team meetings, and application development on the COOPER team.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
import { FaGithub } from 'react-icons/fa';

export const Projects = () =>
{
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center"
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2"> Image Seam Carver (Java) </h3>
            <p className="text-gray-400 mb-4"> 
              Works as an image compression software to maintain the overall look of an image and cause minimal distortion to the original look of the image. Provides functionality to 
              invert the colors of the image, see the seam before it is removed, pause the program,
              switch between horizontal and vertical compression, and undo carve actions.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Custom Weighted Graph", "Dijkstra's", "Dynamic Programming"].map(
                (skill, key) =>
                {
                  return (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                )})}
            </div>
            <div>
              <a
                href="https://github.com/JacobLef/SeamCarver/tree/main"
                className="text-orange-500 hover:text-orange-300 transition-colors my-4"
              >
                View Project → <FaGithub className="inline ml-1" /> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
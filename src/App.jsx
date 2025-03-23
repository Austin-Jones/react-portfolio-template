import { useState } from "react";
import { projects, profile } from "./data/content";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState("home");

  const Section = () => {
    switch (currentSection) {
      case "home":
        return (
          <div className="text-center py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-32 h-32 mx-auto rounded-full shadow-lg mb-6"
            />
            <h1 className="text-4xl font-extrabold mb-2 text-gray-900">{profile.name}</h1>
            <h2 className="text-xl text-blue-600 mb-4">{profile.tagline}</h2>
            <p className="max-w-xl mx-auto text-gray-600 leading-relaxed">{profile.about}</p>
            <div className="mt-6 flex justify-center gap-4">
              <a href={profile.github} target="_blank" className="text-gray-700 hover:text-black text-2xl"><FaGithub /></a>
              <a href={profile.linkedin} target="_blank" className="text-blue-700 hover:text-blue-900 text-2xl"><FaLinkedin /></a>
              <a href={profile.twitter} target="_blank" className="text-sky-500 hover:text-sky-700 text-2xl"><FaTwitter /></a>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-600 hover:underline text-sm"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        );

      case "contact":
        return (
          <div className="text-center py-20 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Let’s Connect</h2>
            <p className="mb-2 text-gray-600">Email me at:</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-500 text-lg font-medium hover:underline"
            >
              {profile.email}
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl font-bold text-blue-700">{profile.name}</div>
        <nav className="flex gap-6 text-gray-600 text-sm">
          <button onClick={() => setCurrentSection("home")} className={`hover:text-blue-600 transition ${currentSection === "home" ? "font-semibold text-blue-600" : ""}`}>Home</button>
          <button onClick={() => setCurrentSection("projects")} className={`hover:text-blue-600 transition ${currentSection === "projects" ? "font-semibold text-blue-600" : ""}`}>Projects</button>
          <button onClick={() => setCurrentSection("contact")} className={`hover:text-blue-600 transition ${currentSection === "contact" ? "font-semibold text-blue-600" : ""}`}>Contact</button>
        </nav>
      </header>

      <main>
        <Section />
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm bg-white">
        Built with ❤️ using React + Tailwind · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
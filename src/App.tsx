import { 
  Mail, Linkedin, Github, Code, Briefcase, GraduationCap, 
  FolderKanban, MessageSquare, Server, Terminal, 
  Cloud, GitBranch, Database, Figma 
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50 text-gray-800">
      {/* Header */}
      <header className="py-4 bg-gradient-to-r from-teal-600/95 to-blue-600/95 shadow-lg backdrop-blur-sm sticky top-0 z-50 transition-all duration-200">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
              <a href="#about" className="text-white hover:text-teal-200 transition-colors font-medium">
                About
              </a>
              <a href="#skills" className="text-white hover:text-teal-200 transition-colors font-medium">
                Skills
              </a>
              <a href="#projects" className="text-white hover:text-teal-200 transition-colors font-medium">
                Projects
              </a>
              <a href="#contact" className="text-white hover:text-teal-200 transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg hover:scale-105 transition-transform">
                JD
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
                  Hi, I'm <span className="text-teal-500">John Doe</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  A Computer Science student with a passion for creating innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white mb-3">
              🎓
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-3 bg-teal-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600">University of Technology</p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside mt-4">
                  <li>Focusing on software development</li>
                  <li>Specializing in AI/ML</li>
                  <li>3.8 GPA</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-3 bg-teal-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Bachelor of Arts in Digital Media
                </h3>
                <p className="text-gray-600">University of Technology</p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside mt-4">
                  <li>UI/UX design focus</li>
                  <li>Interactive media</li>
                  <li>Design thinking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 relative">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white mb-3">
              <Briefcase className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-3 bg-teal-500"></div>
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="w-20 h-20 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Server className="h-8 w-8 text-teal-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800">Software Development Intern</h3>
                  <p className="text-gray-600 mt-2">TechStart Solutions • 2023</p>
                  <p className="text-gray-600 mt-4">
                    Developed full-stack applications using React and Node.js, implemented REST APIs,
                    and collaborated with cross-functional teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-3 bg-teal-500"></div>
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="w-20 h-20 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Terminal className="h-8 w-8 text-teal-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800">Teaching Assistant</h3>
                  <p className="text-gray-600 mt-2">University of Technology • 2022</p>
                  <p className="text-gray-600 mt-4">
                    Conducted programming workshops, assisted students with Python projects,
                    and graded assignments for introductory CS courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-16 relative">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white mb-3">
              <Code className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCategory 
              title="Languages" 
              icon={<Terminal className="h-6 w-6" />}
              skills={[
                { name: "JavaScript", icon: <Code className="h-4 w-4" /> },
                { name: "Python", icon: <Terminal className="h-4 w-4" /> },
                { name: "Java", icon: <Code className="h-4 w-4" /> },
                { name: "HTML/CSS", icon: <Code className="h-4 w-4" /> }
              ]}
              color="teal"
            />

            <SkillCategory 
              title="Frameworks" 
              icon={<Cloud className="h-6 w-6" />}
              skills={[
                { name: "React", icon: <Code className="h-4 w-4" /> },
                { name: "Node.js", icon: <Code className="h-4 w-4" /> },
                { name: "Express", icon: <Server className="h-4 w-4" /> },
                { name: "Django", icon: <Code className="h-4 w-4" /> }
              ]}
              color="blue"
            />

            <SkillCategory 
              title="Tools" 
              icon={<GitBranch className="h-6 w-6" />}
              skills={[
                { name: "Git", icon: <GitBranch className="h-4 w-4" /> },
                { name: "Docker", icon: <Terminal className="h-4 w-4" /> },
                { name: "AWS", icon: <Cloud className="h-4 w-4" /> },
                { name: "Figma", icon: <Figma className="h-4 w-4" /> }
              ]}
              color="cyan"
            />

            <SkillCategory 
              title="Databases" 
              icon={<Database className="h-6 w-6" />}
              skills={[
                { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
                { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
                { name: "Redis", icon: <Database className="h-4 w-4" /> }
              ]}
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 relative">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white mb-3">
              📁
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all h-full">
                <div className="h-48 bg-gradient-to-br from-teal-100 to-blue-100 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex justify-between w-full">
                      <button className="text-white hover:text-teal-200 flex items-center gap-1">
                        <span>🔗</span> Demo
                      </button>
                      <button className="text-white hover:text-teal-200 flex items-center gap-1">
                        <span>💻</span> Code
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Project {project}</h3>
                  <p className="text-gray-600">
                    Description of project {project} with key features and technologies used
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white mb-3">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
          </div>

          <div className="mt-12 max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <ContactLink
                icon={<Mail className="h-5 w-5" />}
                label="john.doe@example.com"
                href="mailto:john.doe@example.com"
              />
              <ContactLink
                icon={<Linkedin className="h-5 w-5" />}
                label="linkedin.com/in/johndoe"
                href="https://linkedin.com/in/johndoe"
              />
              <ContactLink
                icon={<Github className="h-5 w-5" />}
                label="github.com/johndoe"
                href="https://github.com/johndoe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-teal-600/90 to-blue-600/90 text-white backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <p className="text-white/90">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCategory({ title, icon, skills, color }: { 
  title: string; 
  icon: React.ReactNode;
  skills: { name: string; icon: React.ReactNode }[];
  color: string;
}) {
  const colorClasses = {
    teal: "border-teal-400 bg-teal-50",
    blue: "border-blue-400 bg-blue-50",
    cyan: "border-cyan-400 bg-cyan-50", 
    emerald: "border-emerald-400 bg-emerald-50"
  };

  return (
    <div className={`rounded-lg shadow-md p-6 border-l-4 ${colorClasses[color]}`}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full shadow-sm hover:shadow-md transition-all">
            {skill.icon}
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactLink({ icon, label, href }: { 
  icon: React.ReactNode; 
  label: string;
  href: string;
}) {
  return (
    <a 
      href={href}
      className="flex items-center p-3 bg-white rounded-lg hover:bg-teal-50 transition-colors group"
    >
      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
        {icon}
      </div>
      <span className="text-gray-700 group-hover:text-teal-600">{label}</span>
    </a>
  );
}
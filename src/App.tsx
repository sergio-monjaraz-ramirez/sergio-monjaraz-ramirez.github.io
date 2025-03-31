import { useEffect, useState } from "react";
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Button from "./components/buttons/Button";
import Badge from "./components/Badge";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/tabs";
import Coso from "./components/Coso";
import { Card, CardContent } from "./components/cards";

function App() {
  const navItems = [
    { id: "home", label: "Home", icon: <Code size={18} /> },
    { id: "about", label: "About Me", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vue",
        "Angular",
        "Tailwind CSS",
      ],
    },
    { category: "Backend", items: ["Node.js", "Java", "Go", "MongoDB", "SQL"] },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma", "Atlassian"],
    },
  ];

  const projects = [
    {
      title: "BeHIT",
      description:
        "Implementation and migration of platform for hospital management, the project was done on angular 1 and was migrated to vue 3, using MEVN (Mongo, Express, Vue, Node) stack",
      technologies: [
        "Vue 3",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "Adobe XD",
        "Typescript",
      ],
      image: "https://www.behit.net/images/logo.png",
      demo: "https://www.behit.net/ES/index.html",
    },
    {
      title: "BlueYonder",
      description:
        "Developing a custom React component library for application teams that delivers high performance and custom functionality for the company.",
      technologies: [
        "React JS",
        "Typescript",
        "Styled Components",
        "Storybook",
        "Jest",
        "Git",
        "Figma",
      ],
      image:
        "https://es.blueyonder.com/_next/image?url=https%3A%2F%2Fcdn.blueyonder.com%2Fglobal%2Fimages%2Flogo-dark.svg&w=256&q=75",
      demo: "https://blueyonder.com/",
    },
    {
      title: "Citelis | Jac Mexico",
      description:
        "Implementation of a CRM for Jac Mexico (a partner brand) that help to improve his process of the sales and the tracking for each client also to providing data that helps decision making.",
      technologies: [
        "Vue JS",
        "Typescript",
        "Java",
        "PostgresSQL",
        "Flutter",
        "Tailwind CSS",
        "Figma",
      ],
      image:
        "https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/485104699_1087081600125521_6071726326193108068_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1D3u3ps4tbUQ7kNvgG-PXs_&_nc_oc=AdkJLhX4PNZobYuHnnw2dHUtKupCibTAbu7zGEISUrjnLWOba5NDp1m-WgcXztkuvqdmSOlYx44hL0w_ZpGNEuOn&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=GXje59Jd0M0jVe8qnVlZ6w&oh=00_AYHGogzrYihfuVhxZD6k_f9RFjrc4tOKCak10mh6styFlw&oe=67F018A4",
      demo: "https://www.citelis.com.mx/",
    },
    {
      title: "Securitec (Beex)",
      description:
        "Developed a system omnichannel for customer service, using Vue, and WebRTC, this system is on the cloud and offerts a high customization .",
      technologies: [
        "Vue JS",
        "Python",
        "Figma",
        "Typescript",
        "WhatsApp API",
        "Twilio",
        "PostgresSQL",
      ],
      image:
        "https://multiwasap.com/wp-content/uploads/2022/10/securitec-1.png",
      demo: "https://beexcc.com/",
    },
    {
      title: "Kiritek | Tres Marias Mexico",
      description:
        "Developed and improved processes for MyFrac Project using React JS, AWS and Java. That helped to grow project and improved sales of 100% in new neighborhoods.",
      technologies: ["React JS", "Java", "PostgresSQL", "AWS"],
      image:
        "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-1/335141978_155755060690366_2152455510833938026_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=smlY83owpBQQ7kNvgHA8sVm&_nc_oc=AdnlBZyepCJFcrsg3GmDxptwqjPCdnaY9_HUXQ9apjfpg8nr1gEBuBuUmihla2rp8xrQHMNIu__lVmnjaQTvxDDF&_nc_zt=24&_nc_ht=scontent-qro1-2.xx&_nc_gid=KvIyaAV6zqSSt2bupLLN9Q&oh=00_AYGTaFl1CcMot5THuwnU-Ti7W-akQukYHamxRdZuRNMbqw&oe=67F0234B",
      demo: "https://kiritek.com/",
    },
    {
      title: "Legalex GS",
      description:
        "Contributed to design a mobile app to e-signature to help users to signature docs from mobile devices",
      technologies: [
        "Java",
        "Android",
        "PostgresSQL",
      ],
      image:
        "https://grupotron-gs.com/grupotron/assets/images/single-serv/Legalex.jpg",
      demo: "https://www.legalexgs.com/",
    }
  ];

  const education = [
    {
      period: "2009 - 2015",
      title: "Computer Systems Engineering",
      institution: "National Technological Institute of Mexico - Morelia Campus",
      description:
        "Studies focused on development, programming, and software engineering.",
    },
    {
      period: "2015 - 2017",
      title: "Master's in Advanced Technology",
      institution:
        "National Polytechnic Institute - Center for Innovation in Applied Science and Advanced Technology",
      description:
        "Advanced training in technologies such as computer vision, machine learning, and image processing.",
    },
    {
      period: "Ongoing",
      title: "Vue JS Certification",
      institution: "Online Platform",
      description:
        "Certification in web application development using Vue.js, a progressive framework for building user interfaces.",
    },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  // Change theme to light/dark
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Change active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold">
              SM
            </div>
            <span className="font-bold text-xl hidden sm:block">
              Sergio Monjaraz
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-gray-100 dark:bg-gray-800 text-teal-500 dark:text-teal-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50 p-2"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              onClick={() => alert("Contact")}
              className="hidden md:flex bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0"
            >
              Contact
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-teal-500/10 !text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 hover:bg-teal-500/20 dark:hover:bg-teal-400/20">
                  Software Engineer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hello, I'm{" "}
                  <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
                    Sergio Monjaraz
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Software engineer passionate about creating engaging and functional web experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => alert("goToProjects")}
                    className="flex bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0"
                  >
                    View Projects{" "}
                    <ArrowRight className="ml-2 flex self-center h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => alert("download")}
                    className="border-gray-300 dark:border-gray-700 border-2  dark:bg-black dark:hover:bg-gray-800 hover:bg-gray-300  rounded-md px-4 py-2 flex items-center"
                  >
                    Download CV
                  </Button>
                </div>

                <div className="mt-12 flex gap-4">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 blur-3xl opacity-20 absolute -inset-4"></div>
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative z-10">
                    <img
                      src="/images/foto.jpeg"
                      alt="Your photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 !text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                About Me
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Get to know me better</h2>
              <p className="text-gray-600 dark:text-gray-300">
                I am a software engineer passionate about technology and web development. I love learning new tools and frameworks to improve my skills and offer innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Software engineer with over 7 years of experience in web development. I enjoy collaborating in multidisciplinary teams, promoting good development practices, and actively contributing to continuous improvement. I consider myself proactive and self-taught, with ease to adapt to new technological challenges.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Currently, I am focused on frontend development with React and Vue but also have experience with Node.js and databases.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-1">
                      7+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Years of experience
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">
                      6+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Completed projects
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
                <Coso
                  className="w-full"
                  tabs={skills.map((skill) => ({
                    label: skill.category,
                    content: (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {skill.items.map((item) => (
                          <div
                            key={item}
                            className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ),
                  }))}
                ></Coso>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 !text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold mb-4">My Recent Work</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Here is a selection of projects I have recently worked on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index}>
                  <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                        <div className="flex gap-3">
                          <a
                            href={project.demo}
                            target="_blank"
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink size={18} className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="!bg-gray-100 dark:bg-gray-700 !text-gray-800 dark:text-gray-200 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className="py-20 bg-gray-100 dark:bg-gray-900/50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Education
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                My Academic Background
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                My educational trajectory and professional training.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {education.map((item, index) => (
                <div key={index} className="flex gap-6 mb-12 last:mb-0">
                  <div className="hidden sm:block pt-1">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 mt-2"></div>
                    )}
                  </div>

                  <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-indigo-500/10 !text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400">
                        {item.period}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {item.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 !text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Contact
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Shall we talk?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Interested in working together or have any questions?
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-teal-500 to-indigo-500 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-6">
                      Contact Information
                    </h3>
                    <p className="mb-8 opacity-90">
                      Complete the form and I will get in touch with you as soon as possible.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Mail size={20} />
                        </div>
                        <span>mta.sergio.monjaraz@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Github size={20} />
                        </div>
                        <span>github.com/sergio-monjaraz-ramirez</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Linkedin size={20} />
                        </div>
                        <span>linkedin.com/in/sergio-monjaraz-ramirez</span>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 opacity-10">
                      <Code size={180} />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

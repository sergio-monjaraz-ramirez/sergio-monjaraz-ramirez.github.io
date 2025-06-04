import { styles } from "../styles/styles";
import Avatar from "./Avatar";
import Badge from "./Badge";
import { Mail, Github, Linkedin } from "lucide-react";
// import { ComputersCanvas } from "./canvas";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <Badge className="mb-0 bg-teal-400/10 text-teal-400 hover:bg-teal-400/20">
            Software Engineer
          </Badge>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, i'm{" "}
            <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
              Sergio Monjaraz
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            Software engineer passionate about creating engaging and functional
            web experiences.
          </p>
          <div className="mt-2 flex gap-4">
            <a
              href="https://github.com/sergio-monjaraz-ramirez"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-monjaraz-ramirez/"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mta.sergio.monjaraz@gmail.com"
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <Avatar url="/images/foto.jpeg" />
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;

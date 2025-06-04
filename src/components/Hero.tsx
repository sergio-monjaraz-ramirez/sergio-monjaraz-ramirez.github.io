import { socialMedia } from "../constants";
import { styles } from "../styles/styles";
import Avatar from "./Avatar";
import Badge from "./Badge";
import IconButton from "./buttons/IconButton";


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
            {
              socialMedia.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  
                >
                  <social.icon size={20} />
                </IconButton>
              ))
            }
          </div>
        </div>
        <Avatar url="/images/foto.jpeg" />
      </div>

    </section>
  );
};

export default Hero;

interface AvatarProps {
  url: string;
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return (
    <div className="relative">
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 blur-3xl opacity-20 absolute -inset-4"></div>
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative z-10">
        <img
          src={url}
          alt="Your photo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;

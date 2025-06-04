import React from "react";

interface IconButtonProps {
    href: string;
    children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({href, children}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-teal-400 transition-colors"
    >
      {children}
    </a>
  );
};

export default IconButton;

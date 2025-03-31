import React, { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`rounded-lg shadow-md bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
};
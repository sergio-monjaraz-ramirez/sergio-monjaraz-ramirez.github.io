import React from 'react';

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, className, children }) => {
  return (
    <button className={className} data-value={value}>
      {children}
    </button>
  );
};
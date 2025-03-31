import React from 'react';

interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, className, children }) => {
  return (
    <div className={className} data-value={value}>
      {children}
    </div>
  );
};
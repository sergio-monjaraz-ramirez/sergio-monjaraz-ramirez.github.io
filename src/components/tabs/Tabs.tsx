import React, { ReactNode } from 'react';

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, className, children }) => {
  return (
    <div className={className} data-default-value={defaultValue}>
      {children}
    </div>
  );
};
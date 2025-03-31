import React, { ReactNode } from 'react';

interface TabsListProps {
  className?: string;
  children: ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
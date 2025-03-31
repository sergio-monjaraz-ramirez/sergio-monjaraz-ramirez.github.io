import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
    return (
        <span
            className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${className}`}
        >
            {children}
        </span>
    );
};

export default Badge;
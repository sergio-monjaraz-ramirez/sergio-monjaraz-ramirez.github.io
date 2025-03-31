import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, className = '', type = 'button'}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 text-gray-900 dark:text-gray-100 rounded disabled:bg-gray-400 cursor-pointer ${className}`}
        >
            { children }
        </button>
    );
};

export default Button;
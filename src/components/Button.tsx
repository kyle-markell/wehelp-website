import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-[#00B900] text-white hover:bg-[#009900] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        secondary: "bg-white text-gray-900 border border-gray-200 hover:border-gray-300 shadow-sm hover:bg-gray-50",
        outline: "border-2 border-white text-white hover:bg-white/10",
        ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}

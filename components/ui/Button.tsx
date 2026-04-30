"use client";

import { ButtonProps } from '@/types';
import styles from './Button.module.scss';

const Button = ({ label, icon, onClick, type = "button", variant = 'primary', className }: ButtonProps) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${className || ''}`;

    return (
        <button 
        type={type} 
        className={buttonClass} 
        onClick={onClick}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.label}>{label}</span>
        </button>
    );
};

export default Button;

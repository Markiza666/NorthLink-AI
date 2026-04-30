export interface ButtonProps {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: 'primary' | 'ghost' | 'danger';
    className?: string;
}

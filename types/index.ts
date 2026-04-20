export interface ButtonProps {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'ghost' | 'danger';
    className?: string;
}

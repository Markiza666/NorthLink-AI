import Link from 'next/link';
import { LayoutDashboard, Ticket, Settings } from 'lucide-react';
import styles from './NavigationList.module.scss';

const NavigationList = () => {
    const navItems = [
        { name: 'Dashboard', href: '/', icon: <LayoutDashboard size={20} /> },
        { name: 'Cases', href: '/tickets', icon: <Ticket size={20} /> },
        { name: 'Settings', href: '/settings', icon: <Settings size={20} /> },
    ];

    return (
        <ul className={styles.navList}>
            {navItems.map((item) => (
                <li key={item.href}>
                    <Link href={item.href} className={styles.navLink}>
                            <span className={styles.icon}>{item.icon}</span>
                            <span className={styles.label}>{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavigationList;
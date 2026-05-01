"use client";

import Link from 'next/link';
import { LayoutDashboard, Ticket, Settings } from 'lucide-react';
import styles from './NavigationList.module.scss';
import { usePathname } from 'next/navigation';

const NavigationList = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/', icon: <LayoutDashboard size={20} /> },
        { name: 'Cases', href: '/tickets', icon: <Ticket size={20} /> },
        { name: 'Settings', href: '/settings', icon: <Settings size={20} /> },
    ];

    return (
        <ul className={styles.navList}>
            {navItems.map((item) => {
                const isActive = pathname === item.href;

                return(
                    <li key={item.href}>
                        <Link 
                            href={item.href} 
                            className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            <span className={styles.label}>{item.name}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationList;
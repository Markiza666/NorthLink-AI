"use client";

import { Moon, Sun, LogOut } from 'lucide-react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from './SidebarFooter.module.scss';
import Button from '../ui/Button';

const SidebarFooter = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const handle = requestAnimationFrame(() => {
            setMounted(true);
        });
        return () => cancelAnimationFrame(handle);
    }, []);

    // Prevent rendering theme-specific UI until mounted
    if (!mounted) {
        return (
            <div className={styles.footer}>
                <div className={styles.skeleton}>Loading...</div>
            </div>
        );
    }

    const isDark = theme === 'dark';

    return (
        <div className={styles.footer}>
            <Button 
                label={isDark ? "Light Mode" : "Dark Mode"} 
                icon={isDark ? <Sun size={18} /> : <Moon size={18} />} 
                variant="ghost" 
                className={styles.themeBtn}
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
            />
            <Button 
                label="Log out" 
                icon={<LogOut size={18} />} 
                variant="danger" 
                onClick={() => console.log("Logging out...")}
            />
        </div>
    );
};

export default SidebarFooter;

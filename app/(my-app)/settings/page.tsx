"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from '@/components/ui/Button';
import styles from './settings.module.scss';
import { User, Globe, Moon, Save, Trash2 } from 'lucide-react';

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const handle = requestAnimationFrame(() => {
            setMounted(true);
        });
        return () => cancelAnimationFrame(handle);
    }, []);

    const handleSave = () => alert("Settings saved!");
    const handleDeleteData = () => alert("This would erase the data...");

    if (!mounted) {
        return <div className={styles.container}>Loading settings...</div>;
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Settings</h1>
                <p>Manage your profile and system settings</p>
            </header>

            <section className={styles.section}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <User size={20} />
                        <h2>User profile</h2>
                    </div>
                    <div className={styles.profileInfo}>
                        <div className={styles.avatar}>M</div>
                        <div>
                            <h3>Markiza</h3>
                            <p>System Developer</p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Globe size={20} />
                        <h2>System settings</h2>
                    </div>
                    
                    <div className={styles.settingRow}>
                        <label htmlFor="language-select" className={styles.label}>Language</label>
                        <select 
                            id="language-select"
                            className={styles.select} 
                            defaultValue="sv"
                        >
                            <option value="sv">Swedish</option>
                            <option value="en">English</option>
                        </select>
                    </div>

                    <div className={styles.settingRow}>
                        <div className={styles.withIcon}>
                            <Moon size={16} />
                            <span>{theme === 'dark' ? 'Dark Mode On' : 'Light Mode On'}</span>
                        </div>
                        <Button 
                            label={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'} 
                            variant="ghost" 
                            className={styles.compactBtn}
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        />
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.dangerTitle}>Security</h2>
                    </div>
                    <div className={styles.settingRow}>
                        <span>Clear all history</span>
                        <Button 
                            label="Delete" 
                            icon={<Trash2 size={16} />}
                            variant="danger" 
                            className={styles.compactBtn}
                            onClick={handleDeleteData} 
                        />
                    </div>
                </div>

                <div className={styles.actions}>
                    <Button 
                        label="Save changes" 
                        icon={<Save size={18} />} 
                        variant="primary" 
                        type="submit"
                        className={styles.saveBtn}
                        onClick={handleSave} 
                    />
                </div>
            </section>
        </div>
    );
}

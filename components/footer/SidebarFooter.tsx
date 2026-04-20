"use client";

import { Moon, LogOut } from 'lucide-react';
import styles from './SidebarFooter.module.scss';
import Button from '../ui/Button';

const SidebarFooter = () => {
    return (
        <div className={styles.footer}>
            <Button 
                label="Theme" 
                icon={<Moon size={18} />} 
                variant="ghost" 
                onClick={() => console.log("Change theme")}
            />
            <Button 
                label="Log out" 
                icon={<LogOut size={18} />} 
                variant="danger" 
                onClick={() => console.log("Log out")}
            />
        </div>
    );
};

export default SidebarFooter;

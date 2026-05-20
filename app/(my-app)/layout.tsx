import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.scss";
import Sidebar from "@/components/sidebar/Sidebar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
    title: "NorthLink AI | Support System",
    description: "AI-powered support ticket management",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={styles.container}>
                <ThemeProvider>
                    <a href="#main-content" className={styles.skipLink}>
                        Skip to content
                    </a>
                    
                    <div className={styles.sidebarWrapper}>
                        <Sidebar />
                    </div>
                    
                    <main id="main-content" className={styles.mainContent} tabIndex={-1}>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}

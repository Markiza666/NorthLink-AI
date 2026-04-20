import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.scss";
import Sidebar from "@/components/sidebar/Sidebar";

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
        <html lang="en">
            <body className={styles.container}>
                <a href="#main-content" className={styles.skipLink}>
                    Skip to content
                </a>

                <div className={styles.sidebarWrapper}>
                    <Sidebar />
                </div>
                
                <main id="main-content" className={styles.mainContent} tabIndex={-1}>
                    {children}
                </main>
            </body>
        </html>
    );
}

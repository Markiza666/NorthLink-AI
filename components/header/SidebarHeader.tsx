import Link from 'next/link';
import styles from './SidebarHeader.module.scss';

const SidebarHeader = () => {
    return (
        <Link href="/" className={styles.header}>
            <div className={styles.logo}>NL</div>
            <h2 className={styles.title}>NorthLink AI</h2>
        </Link>
    );
};

export default SidebarHeader;

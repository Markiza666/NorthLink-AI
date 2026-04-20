import styles from './SidebarHeader.module.scss';

const SidebarHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>NL</div>
            <h2 className={styles.title}>NorthLink AI</h2>
        </div>
    );
};

export default SidebarHeader;

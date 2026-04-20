import styles from './Sidebar.module.scss';
import SidebarHeader from '../header/SidebarHeader';
import SidebarFooter from '../footer/SidebarFooter';
import NavigationList from './NavigationList';

const Sidebar = () => {
    return (
        <nav className={styles.navContainer}>
            <SidebarHeader />
            <NavigationList />
            <SidebarFooter />
        </nav>
    );
}

export default Sidebar;

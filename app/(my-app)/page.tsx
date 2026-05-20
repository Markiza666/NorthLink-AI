import styles from './page.module.scss';

const Home = () => {
    return (
        <div className={styles.cont}>
            <h1 className={styles.head}>Dashboard</h1>
            <p className={styles.p}>
                Welcome to NorthLink AI. Here you will soon see a summary of all support cases.
            </p>
        </div>
    );
};

export default Home;

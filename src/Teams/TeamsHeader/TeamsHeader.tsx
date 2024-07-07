// src/Teams/TeamsHeader/TeamsHeader.tsx

import styles from './TeamsHeader.module.css';
import { FaSearch, FaPlus } from 'react-icons/fa';

const TeamsHeader = () => {
    return (
        <div className={styles.header}>
            <h1>Teams</h1>
            <div className={styles.searchCreateContainer}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search" />
                    <FaSearch />
                </div>
                <button className={styles.createButton}>
                    <FaPlus /> Create Team
                </button>
            </div>
        </div>
    );
};

export default TeamsHeader;

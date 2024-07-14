import Button from '../../../components/Button/Button';
import { SearchIcon } from '../../../components/Icons/Icons';
import styles from './StoreHeader.module.css';

const StoreHeader = () => {

//todo: handle new store
    function handleNewStore() {
        console.log('New Store');
    }


    return (
        <div className={styles.header}>
            <h1>Stores</h1>
            <div className={styles.searchCreateContainer}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search" />
                    <div className={styles.searchIcon}>
                        <SearchIcon fill='currentcolor' />
                    </div>
                </div>
                <Button className='create' onClick={handleNewStore} type={'button'}>
                    Set Up New Store
                </Button>
            </div>
        </div>
    );
};

export default StoreHeader;

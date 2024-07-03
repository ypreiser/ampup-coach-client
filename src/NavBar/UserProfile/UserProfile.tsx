import styles from './UserProfile.module.css'
import userData from "../../fakeData/userData.json"

export default function UserProfile({ isopen }) {
    const { name, email, avatar } = userData
    return (

        <div className={styles.userProfile}>
            <img src={avatar} alt={name} className={styles.userImage} />
            {isopen &&
                <div className={styles.userInfo}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.userEmail}>{email}</span>
                </div>
            }
        </div>
    )
}

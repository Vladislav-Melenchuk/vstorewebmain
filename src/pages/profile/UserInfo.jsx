import styles from './Profile.module.css'
import userIcon from '../../assets/img/general-img/user.png'

const UserInfo = ({ user, onEdit, onChangePassword, userPlus, block, libraryLength }) => {
  return (
    <div className={styles.userBox}>
      
      <img
        src={user.profilePictureUrl || userIcon}
        className={styles.avatar}
      />

      <div className={styles.titleBox}>
        <span>
          Level <span className={styles.greenSpan}>1</span>
        </span>

        <span>{user.username}</span>
        <span style={{ fontSize: '24px' }}>{user.email}</span>
      </div>

      <div className={styles.gamesBox}>
        <p>Games</p>
        <span>{libraryLength}</span>
      </div>

      <div className={styles.gamesBox}>
        <p>Achievements</p>
        <span>100</span>
      </div>

      <div className={styles.iconBox}>
        <div className={styles.bttnActionBox}>
          <button
            className={styles.bttnAction}
            style={{ backgroundImage: `url(${userPlus})` }}
            onClick={onEdit}
          />
          <button
            className={styles.bttnAction}
            style={{ backgroundImage: `url(${block})` }}
            onClick={onChangePassword}
          />
        </div>
      </div>

    </div>
  )
}

export default UserInfo;
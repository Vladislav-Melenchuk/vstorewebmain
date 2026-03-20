import styles from './Profile.module.css'
import userIcon from '../../assets/img/general-img/user.png'
import userPlus from '../../assets/img/general-img/user-plus.png'
import block from '../../assets/img/general-img/block.png'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.userBox}>
         <img src={userIcon} />
         <div className={styles.titleBox}>
            <span>Level <span className={styles.greenSpan}>1</span></span>
            <span>{user.username}</span>
         </div>
         <div className={styles.gamesBox}>
            <p>Games</p>
            <span>10</span>
         </div>
         <div className={styles.gamesBox}>
            <p>Achievements</p>
            <span>100</span>
         </div>

         <div className={styles.iconBox}>
            <img src={userPlus} />
            <img src={block}/>
         </div>
      </div>

      <div className={styles.box}>
         <h4>Achievements</h4>
      </div>

       <div className={styles.box}>
         <h4>Game collection</h4>
      </div>

   </div>
   
  );
};
export default Profile;
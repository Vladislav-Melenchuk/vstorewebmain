import styles from './Profile.module.css'
import userIcon from '../../assets/img/general-img/user.png'
import Button from '../../components/ui/buttons/button/Button.jsx'

const EditProfile = ({
  user,
  editName,
  setEditName,
  preview,
  handleFileChange,
  handleSave,
  handleCancel
}) => {

  return (
    <div className={styles.userBox}>

      <img
        src={preview || user.profilePictureUrl || userIcon}
        className={styles.avatar}
      />

      <div className={styles.titleBox}>
        <span>
          Level <span className={styles.greenSpan}>1</span>
        </span>

        <input
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />

        <span style={{ fontSize: '24px' }}>{user.email}</span>

        <label className={styles.uploadBtn}>
          Choose photo
          <input type="file" onChange={handleFileChange} hidden />
        </label>
      </div>

      <div className={styles.iconBox}>
        <Button title="Save" onClick={handleSave} />
        <Button title="Cancel" onClick={handleCancel} />
      </div>

    </div>
  )
}

export default EditProfile;
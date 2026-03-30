import styles from './Profile.module.css'
import { useState } from 'react'
import Button from '../../components/ui/buttons/button/Button.jsx'
import { changePassword } from '../../api/userApi.js'

const ChangePassword = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChangePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        alert('Passwords do not match')
        return
      }

      await changePassword({ currentPassword, newPassword })

      alert('Password changed successfully')
      onClose()

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.inputBox}>
      <h4>Change Password</h4>

      <div className={styles.changeBox}>
        <div className={styles.passwordBox}>
          <input
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className={styles.passwordActions}>
          <Button title="Save" onClick={handleChangePassword} />
          <Button title="Cancel" onClick={onClose} />
        </div>
      </div>
    </div>
  )
}

export default ChangePassword;
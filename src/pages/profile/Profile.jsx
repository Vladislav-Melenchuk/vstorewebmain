import { useState, useEffect, useContext } from 'react'
import styles from './Profile.module.css'

import { getUser, updateUser, updateProfilePicture } from '../../api/userApi.js'
import { getWishlist } from '../../utils/wishlist.js'
import { getMyLibrary } from '../../utils/library.js'
import { AuthContext } from '../../context/AuthContext'
import { addToCart } from '../../utils/cart.js'
import userPlus from '../../assets/img/general-img/user-plus.png'
import block from '../../assets/img/general-img/block.png'

import UserInfo from './UserInfo.jsx'
import EditProfile from './EditProfile.jsx'
import ChangePassword from './ChangePassword.jsx'

const Profile = () => {
  const { token } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [editName, setEditName] = useState('');
  const [editFile, setEditFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRes = await getUser();
        setUser(userRes.data);

        const wishlistRes = await getWishlist(token);
        setWishlist(wishlistRes);

        const libraryRes = await getMyLibrary(token);
        setLibrary(libraryRes);
      } 
      catch (err) {
        console.error(err);
      } 
      finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [token]);

  const handleEdit = () => {
    setIsChangingPassword(false)
    setIsEditing(true)
    setEditName(user.username)
    setPreview(user.profilePictureUrl)
  };

  const handleCancel = () => {
    setIsEditing(false)
    setEditFile(null)
    setPreview(null)
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setEditFile(file)
      setPreview(URL.createObjectURL(file))
    }
  };

  const handleSave = async () => {
    try {
      await updateUser({ username: editName })

      let newAvatarUrl = null

      if (editFile) {
        const res = await updateProfilePicture(editFile)
        newAvatarUrl = res.data.profilePictureUrl
      }

      setUser(prev => ({
        ...prev,
        username: editName,
        profilePictureUrl: newAvatarUrl || prev.profilePictureUrl
      }))

      setIsEditing(false)
      setEditFile(null)
      setPreview(null)

    } catch (err) {
      console.error(err)
    }
  };

  if (loading) return <div>Loading...</div>
  if (!user) return <div>No user...</div>

  return (
    <div className={styles.container}>

      {isEditing ? (
        <EditProfile
          user={user}
          editName={editName}
          setEditName={setEditName}
          preview={preview}
          handleFileChange={handleFileChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      ) : (
        <UserInfo
          user={user}
          onEdit={handleEdit}
          onChangePassword={() => setIsChangingPassword(true)}
          userPlus={userPlus}
          block={block}
          libraryLength={library.length}
        />
      )}

      {isChangingPassword && (
        <ChangePassword onClose={() => setIsChangingPassword(false)} />
      )}

      <div className={styles.gamesSection}>
        {/* Wishlist */}
        <div className={styles.block}>
          <h2>Wishlist</h2>

          {wishlist.length === 0 ? (
            <p>List is empty</p>
            ) : (
            <ul className={styles.gamesList}>
              {wishlist.map(game => (
                <li key={game.gameId} className={styles.gameItem}>
                  {game.title}
                </li>
              ))}
            </ul>
            )}
        </div>

        {/* Library */}
        <div className={styles.block}>
          <h2>My Library</h2>

          {library.length === 0 ? (
            <p>List is empty</p>
          ) : (
            <ul className={styles.gamesList}>
              {library.map(game => (
                <li key={game.gameId} className={styles.gameItem}>
                  {game.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

    </div>
  )
};

export default Profile;
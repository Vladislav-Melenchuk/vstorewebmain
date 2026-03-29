import styles from './Header.module.css';
import '../../../styles/variables.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useState } from 'react'
import LanguageModal from '../../modals/language/LanguageModal.jsx'
import userIcon from '../../../assets/icons/header-icons/user.svg';
import favoriteIcon from '../../../assets/icons/header-icons/favorite.svg';
import basketIcon from '../../../assets/icons/header-icons/basket.svg';
import globeIcon from '../../../assets/icons/header-icons/globe.svg';
import { Logo } from './Logo.jsx';
import { HeaderNavigation } from './HeaderNavigation.jsx';
import { Search } from './Search.jsx';
import { HeaderActions } from './HeaderActions.jsx';
import Download from '../../modals/download/Download.jsx';

const Header = () => {
  const navigate = useNavigate();
  const { token, user, logout } = useContext(AuthContext);
  const [langOpen, setLangOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const links = [
    { text: 'Discover', path: '/discover' },
    { text: 'Support', path: '/support' },
    { text: 'News', path: '/news' },
  ];

  const actionIcons = [
    { alt: 'user-icon', src: userIcon, to: token ? '/profile' : '/auth' },
    { alt: 'favorite-icon', src: favoriteIcon, to: '/wishlist' },
    { alt: 'basket-icon', src: basketIcon, to: '/cart' },
    { alt: 'globe-icon', src: globeIcon, type: 'modal' }
  ];
  
  const handleUserClick = () => {
    if (token) {
      navigate('/profile');
    } else {
      navigate('/auth');
    }
  };

  const handleSignIn = () => {
    navigate('/auth');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
  <>
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoNavInputWrapper}>
          <Logo />
          <HeaderNavigation links={links} />
          <Search />
        </div>

        <HeaderActions
          actionIcons={actionIcons}
          onUserClick={handleUserClick}
          onSignIn={handleSignIn}
          onLogout={handleLogout}
          isAuth={!!token}
          user={user}
          onOpenLang={() => setLangOpen(true)}
          onOpenDownload={() => setDownloadOpen(true)}
        />
      </div>
    </header>

    <LanguageModal
      isOpen={langOpen}
      onClose={() => setLangOpen(false)} />

    <Download    
      isOpen={downloadOpen}
      onClose={() => setDownloadOpen(false)} />
  </>
  );
};

export default Header;
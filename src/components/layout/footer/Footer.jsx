import styles from './Footer.module.css'

import twitterIcon from '../../../assets/icons/social-media-icons/twitter.svg'
import fbIcon from '../../../assets/icons/social-media-icons/fb.svg'
import youtubeIcon from '../../../assets/icons/social-media-icons/youtube.svg'

import { SocialLinks } from './SocialLinks.jsx'
import { FooterNavigation } from './FooterNavigation.jsx'
import { FooterDescription } from './FooterDescription.jsx'

const Footer = () => {

   const icons = [
      {src: twitterIcon, alt: 'twitter-icon', to: '/'},
      {src: fbIcon, alt: 'facebook-icon', to: '/'},
      {src: youtubeIcon, alt: 'youtube-icon', to: '/'},
   ]

     const navList = [
      {title: 'Terms of service', href: '/'},
      {title: 'Jobs', href: '/'},
      {title: 'Rules', href: '/'},
      {title: 'Contracts', href: '/'},
      {title: 'Gift cards', href: '/'},
      {title: 'Facebook', href: '/'},
      {title: 'Twitter', href: '/'},
   ]


   return (
      <footer className={styles.footer}>
         <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
               <SocialLinks icons={icons} />                  
               <FooterDescription />
               <FooterNavigation navList={navList} />
            </div>
         </div>
      </footer>
   )
}

export default Footer;
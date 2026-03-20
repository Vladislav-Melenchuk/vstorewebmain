import styles from './Button.module.css'

const Button = ({title, onClick, variant = 'primary', size = 'medium', disabled = false}) => {
   return (
      <button onClick={onClick}
              className={`${styles.button} ${styles[variant]} ${styles[size]}`}
              disabled={disabled}
      >
         {title}
      </button>
   )
}

export default Button; 
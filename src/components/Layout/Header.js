import React from 'react'
import styles from './Header.module.css'
import headerImage from '../../assets/meals1.jpg'
import HeaderCardButton from './HeaderCardButton'

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Mealsilog</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img  src={headerImage} alt="table with foods"/>
      </div>
    </>
  )
}

export default Header
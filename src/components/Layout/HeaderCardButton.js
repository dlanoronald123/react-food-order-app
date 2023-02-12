import {React,useContext, useEffect, useState} from 'react'
import styles from './HeaderCardButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCardButton = (props) => { 
  const [btnHighlighted, setBtnHighlighted] = useState(false)

  const cartCtx = useContext(CartContext);

  const {items} = cartCtx

  const numberOfCart = items.reduce((currentNum, item) => { return currentNum + item.amount}, 0)


  const buttonClasses = `${styles.button} ${btnHighlighted ? styles.bump: ''}`

  useEffect(()=> {
    if(items.length === 0){
      return;
    }
    setBtnHighlighted(true)

    const timer = setTimeout(()=> {
      setBtnHighlighted(false)
    }, 200);

    return ()=> {
      clearTimeout(timer)
    }
  },[items])

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {numberOfCart}
      </span>
    </button>
  )
}

export default HeaderCardButton
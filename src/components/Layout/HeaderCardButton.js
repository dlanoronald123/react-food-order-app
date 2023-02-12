import {React,useContext} from 'react'
import styles from './HeaderCardButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCardButton = (props) => {

  const cartCtx = useContext(CartContext);

  const numberOfCart = cartCtx.items.reduce((currentNum, item) => { return currentNum + item.amount}, 0)

  return (
    <button className={styles.button} onClick={props.onClick}>
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
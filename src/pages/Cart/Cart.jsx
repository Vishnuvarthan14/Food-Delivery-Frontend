import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../components/Context/Storecontext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

    const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
const navigate=useNavigate();

  return (
<div className='cart'>
     <div className="cart-items">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>
        <br />
        <hr />

        {food_list.map((item,index)=>{
                if(cartItems[item._id]>0)
                {
                    return(
                    <div>
                         <div className="cart-item-title cart-items-item">
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>${item.price*cartItems[item._id]}</p>
                            <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                        </div>
                        <hr />
                     </div>
                    )
                }
            })
        }

     </div>
      <div className="cart-bottom">
    <div className="cart-total">
          <h2>Cart Totals</h2>
            <div className="cart-total-details">
                <p>SubTotal</p>
                 <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                 <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                            
             </div>   
             <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>

            <div className="cart-promocode">
              <div>
               <p>If you have promocode enter it here</p>
                  <div className="cart-promrocode-input">
                  <input type="text" placeholder='Promocode' name="" id="" />
                 <button>Submit</button>
                 </div>
                 </div>
            </div>
     </div>
</div>

  )
}

export default Cart

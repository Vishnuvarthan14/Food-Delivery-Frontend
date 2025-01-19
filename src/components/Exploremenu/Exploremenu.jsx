import React from 'react'
import { menu_list } from '../../assets/assets'
import './Exploremenu.css'
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='Exploremenu' id='Exploremenu'>
      <h1>Explore Our Menu</h1>
      <p className='Exploremenu_text'>Explore our menu filled with all-new dishes designed to excite your taste buds! From unique flavors to creative twists, there’s something fresh and fun to try. Come and treat yourself to something different!</p>
      <div className="Explore-menu-list">
        {
            menu_list.map((item,index)=>{

                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{ item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu

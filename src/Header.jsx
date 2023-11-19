import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img  className="header_icon" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon icon" />
        <div className='header_serch'><input type="text" className='header_searchInput'/><SearchIcon className='header_searchIcon'/></div>
        <div className="header_nav">
            <div className="header_option">
                <div className="header_option_lineone">Hello Guest</div>
                <div className="header_option_linetwo">Sign up</div>
            </div>
            <div className="header_option">
                <div className="header_option_lineone">Returns</div>
                <div className="header_option_linetwo">& orders</div>
            </div>
            <div className="header_option">
                <div className="header_option_lineone">Your</div>
                <div className="header_option_linetwo">Prime</div>
            </div>
            <div className="header_optionBasket">
                <ShoppingBasketIcon className='header_basket'/>
                <span className='header_product_count'>0</span>                
            </div>
        </div>
    </div>
  )
}

export default Header
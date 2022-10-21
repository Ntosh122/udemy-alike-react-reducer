import React from 'react'
import { useSideBarContext } from '../context/sidebar_context'
import styled from 'styled-components'
import {MdMenu, MdShoppingBag} from 'react-icons/md'
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
const Navbar = () => {
  const {total_items} = useCartContext()
  const {openSidebar} = useSideBarContext()
  return (
    <NavbarWrapper className="bg-white flex">
        <div className='container w-100'>
          <div className='brand-and-toggler flex flex-between w-100'>
            {/* logo */}
            <Link to ='/' className='navbar-brand text-uppercase ls-1 fw-8'>
              <span>u</span>learn
            </Link>
            {/* cart */}
            <div className='navbar-btns flex'>
              <Link to ='/cart' className='cart-btn'>
                <MdShoppingBag/>
                <span className="item-count-badge">{total_items}</span>
              </Link>
              <button type='button' className="sidebar-open-btn" onClick={() => openSidebar()}>
                <MdMenu/>
              </button>
            </div>
          </div>
        </div>
    </NavbarWrapper>
  )
}
const NavbarWrapper = styled.nav`
  height:80px;
  box-shadow:rgba(50,50, 93, 0.15) 0px 16px 12px
  -2px, rgba(0,0,0,0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size:23px;
    span{
      color: var(--clr-red);
      font-family:var(--additional-font);
      font-size:30px;
    }
  }
  .cart-btn{
    margin-right:18px;
    font-size:23px;
    position:relative;

    .item-count-badge{
      position:absolute;
      right:-10px;
      top:-10px;
      background-color:var(--clr-red);
      font-size:11px;
      font-weight:700;
      display:block;
      width:22px;
      height:22px;
      color:var(--clr-white);
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
    }
  }
  .sidebar-open-btn{
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: .7;
    }
  }
`;
export default Navbar;
import React, { useEffect, useRef } from 'react'
import logo from '../assets/images/logo-pg.png'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    }, {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    },

]


const Header = () => {
    let localtion = useLocation()
    const actiNav = mainNav.findIndex(e => e.path === localtion.pathname)

    const headerScr = useRef(null)
    console.log(headerScr)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 83 || document.documentElement.scrollTop > 83) {
                headerScr.current.classList.add('shrink')
            } else { headerScr.current.classList.remove('shrink') }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    const menuLeft = useRef(null)
    const menuToggle = () => {
        menuLeft.current.classList.toggle('active')
    }
    return (
        <div>
            <div className='header' ref={headerScr}>
                <div className='container'>
                    <div className='header__logo'>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='header__menu'>
                        <div className='header__menu__mobile__toggle' onClick={menuToggle}>
                            <i className='icon__open'>
                                +
                            </i>
                        </div>
                        <div className='header__menu__left' ref={menuLeft}>
                            <div className='header__menu__left__close' onClick={menuToggle}>
                                <i className='icon__close'>
                                    -
                                </i>
                            </div>
                            {
                                mainNav.map((item, index) => (
                                    <div key={index} className={`header__menu__item header__menu__left__item ${index === actiNav ? 'active' : ''}`
                                    }
                                        onClick={menuToggle}>
                                        <Link to={item.path}>
                                            <span>
                                                {item.display}
                                            </span>
                                        </Link>

                                    </div>
                                ))
                            }
                        </div>

                        <div className='header__menu__right'>

                            <div className='header__menu__item header__menu__right__item'>

                                <FontAwesomeIcon className='icon_seach' icon={faMagnifyingGlass} color="black" />

                            </div>
                            <div className='header__menu__item header__menu__right__item'>
                                <Link to="/cart">
                                    <FontAwesomeIcon className='icon_cart' icon={faCartShopping} color="black" />
                                </Link>



                            </div>  <div className='header__menu__item header__menu__right__item'>

                                <FontAwesomeIcon className='icon_user' icon={faUser} color="black" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

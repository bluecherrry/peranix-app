import React, { useState, useEffect } from 'react';
import './HM.css';
import ButtonHeader from '../../Assets/Button/ButtonHeader'
import { Link } from 'react-router-dom'
function MenuNavigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const menuArray = [
    {
      id: '1',
      nav: '  صفحه اصلی ',
      link: ' /'
    },
    {
      id: '2',
      nav: '   تست سرعت اینترنت   ',
      link: '/oops'
    },
    {
      id: ' 3',
      nav: '    سوالات متداول    ',
      link: '/questions/questionpage'
    },
    {
      id: '4 ',
      nav: '    درباره ما    ',
      link: '/oops '
    },

  ]

  return (
    
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://peranix.com/wp-content/uploads/2019/08/LOGO-AND-TYPE-1.png" style={{ width: "170px" }} />
          </Link>

          {/* bars and time icon  */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>

          {/* menu items  */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            {menuArray.map((item) => {
              return (
                <li className='nav-item' key={item.id}>
                  <Link to={item.link} className='nav-links' onClick={closeMobileMenu}>
                    {item.nav}
                  </Link>
                </li>
                
              )
            })}

            <li>
              <Link
                to='/register/registerpage'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                ثبت نام /ورود
              </Link>
            </li>
          </ul>
          {button &&
            <Link to='/register/registerpage'>
              <ButtonHeader buttonStyle='btn--outline'>ثبت نام /ورود</ButtonHeader>
            </Link>

          }
        </div>
      </nav>
    
  );
}

export default MenuNavigation

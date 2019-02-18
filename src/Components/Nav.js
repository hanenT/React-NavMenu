import React, {Component} from 'react';

const menuObj= [
  {
    link: "Home"
  },
  {
    link: "Services",
    submenu: [{link: "For entrepreneur"}, {link: "For students"}, {link: "For Hobbyists"}]
  },
  {
    link: "Contact"
  }
]

const Menu = () => {
    {
      return (
        <div className="menu">
        {menuObj.map((el)=>
        <ul className="primary-menu">
          <li>{el.link}</li>
          
          {el.submenu && el.submenu.map((el)=>
            <ul className="sub-menu">
             
              <li>{el.link}</li>
          </ul>
          )}
        </ul>
        )}
        </div>
      )
    }
  }
  
  export default Menu;

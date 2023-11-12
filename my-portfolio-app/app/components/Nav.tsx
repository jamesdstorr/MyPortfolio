import React from 'react';
import Link from 'next/link';
import style from '../../styles/Nav.module.css'

const Nav = () => {
    return (
        <div className={style.sidebar}>
              <ul className={style.nav}>
                <li><Link className={style.navLink} href="/">Home</Link></li>
                <li><Link className={style.navLink} href="/">About Me</Link></li>
                <li><Link className={style.navLink} href="/">Experience</Link></li>
                <li><Link className={style.navLink} href="/">Projects</Link></li>
                <li><Link className={style.navLink} href="/blog">Blog</Link></li>
            </ul> 

        </div>
   
      
    );
};

export default Nav;

import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <p className="FontLogo">FC</p>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'contact', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link=${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>

        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'contact', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

        )}
      </div>
      <div className="app__navbar-flags">
        <a href="" >
          <img src={images.bandeiraBrasil} alt="Português" />
        </a>
        <a href="">
          <img src={images.bandeiraUSA} alt="English" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
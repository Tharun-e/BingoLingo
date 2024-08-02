import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false); 
  }, [location]);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="/Photos/logo.jpeg" alt="Logo" style={styles.logoImage} />
      </div>
      
      <div style={styles.brandName}>BINGOLINGO</div>
      
      <div style={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      
      <ul
        ref={menuRef}
        style={{ ...styles.navList, display: menuOpen ? 'flex' : 'none' }}
      >
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/Courses" style={styles.navLink}>Courses</Link></li>
        <li style={styles.navItem}><Link to="/testimonials" style={styles.navLink}>Testimonials</Link></li>
        <li style={styles.navItem}><Link to="/Login" style={styles.navLink}>Login</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#FFDAB9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    fontSize: '1.2rem', 
  },
  logo: {
    flex: 1,
  },
  logoImage: {
    height: '50px',
    cursor: 'pointer',
    borderRadius: '15px',
    border: '2px solid #fff',
  },
  brandName: {
    flex: 2, 
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000', 
    marginLeft: '-580px', 
    fontSize:'25px',
    fontFamily: '"Arial Black',
  },
  menuIcon: {
    color: 'black',
    display: 'block',
    cursor: 'pointer',
    fontSize: '2rem', 
    marginRight: '60px', 
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    position: 'absolute',
    top: '60px', 
    right: '20px', 
    backgroundColor: '#FFDAB9',
    width: '200px',
    flexDirection: 'column',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navItem: {
    margin: '10px 0',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'block',
    padding: '10px 20px',
    textAlign: 'center',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#b3e0ff',
  },
  
  '@media (max-width: 992px)': {
    navbar: {
      padding: '10px 15px',
    },
    navItem: {
      margin: '0 15px',
    },
  },
  '@media (max-width: 768px)': {
    menuIcon: {
      display: 'block',
      marginRight: '15px', 
    },
    navList: {
      flexDirection: 'column',
      position: 'absolute',
      top: '60px',
      right: '20px', 
      backgroundColor: '#0077ff',
      width: '200px',
    },
    navItem: {
      margin: '10px 0',
    },
    logoImage: {
      height: '40px',
    },
  },
  '@media (max-width: 576px)': {
    logoImage: {
      height: '30px',
    },
    navLink: {
      fontSize: '0.9rem',
    },
  },
};

export default Navbar;

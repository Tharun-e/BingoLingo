import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const styles = {
    '@import': "url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap')",
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      background: '#f4f4f4',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    mainBanner: {
      background: "url('/Photos/slbb.gif') no-repeat center center/cover",
      color: '#fff',
      textAlign: 'center',
      padding: '100px 20px',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      marginTop: '-80px',
      justifyContent: 'center',
      animation: 'fadeInUp 1s ease-in-out forwards'
    },
    bannerContent: {
      animation: 'fadeInUp 1s ease-in-out forwards'
    },
    mainBannerH1: {
      fontSize: '3em',
      margin: 0,
      color: 'white'
    },
    mainBannerP: {
      fontSize: '1.2em',
      margin: '10px 0 0',
      color: 'white'
    },
    fadeInUp: {
      from: {
        transform: 'translateY(20px)',
        opacity: 0
      },
      to: {
        transform: 'translateY(0)',
        opacity: 1
      }
    },
    loginContainer: {
      background: '#fff',
      padding: '2rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      width: '90%',
      maxWidth: '400px',
      margin: '0 auto 2rem',
      textAlign: 'center',
      position: 'relative',
      top: '-50px',
      zIndex: 1
    },
    loginFormH1: {
      marginBottom: '1.5rem',
      fontSize: '2rem',
      color: '#00aaff'
    },
    inputGroup: {
      marginBottom: '1rem',
      textAlign: 'left'
    },
    inputGroupLabel: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
      color: '#333'
    },
    inputGroupInput: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    inputGroupInputFocus: {
      borderColor: '#00aaff',
      outline: 'none'
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      background: '#00aaff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.3s ease, transform 0.3s ease'
    },
    buttonHover: {
      background: '#008ecc',
      transform: 'translateY(-2px)'
    },
    signupLink: {
      marginTop: '1rem',
      color: '#555'
    },
    signupLinkA: {
      color: '#00aaff',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s ease'
    },
    signupLinkAHover: {
      color: '#008ecc'
    },
    '@media (max-width: 768px)': {
      mainBannerH1: {
        fontSize: '2.5em'
      },
      mainBannerP: {
        fontSize: '1em'
      },
      loginContainer: {
        padding: '1.5rem',
        maxWidth: '90%',
        top: 0
      }
    },
    '@media (max-width: 576px)': {
      mainBannerH1: {
        fontSize: '2em'
      },
      mainBannerP: {
        fontSize: '0.9em'
      },
      loginContainer: {
        padding: '1rem',
        maxWidth: '100%'
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login logic
    // If login is successful, navigate to the home page
    navigate('/');
  };

  return (
    <div style={styles.body}>
      <section id="home" style={styles.mainBanner}>
        <div style={styles.bannerContent}>
          <h1 style={styles.mainBannerH1}>Login</h1>
          <p style={styles.mainBannerP}>Home / Login</p>
        </div>
      </section>
      <div style={styles.loginContainer}>
        <div className="login-form">
          <h1 style={styles.loginFormH1}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.inputGroupLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                style={styles.inputGroupInput}
                onFocus={(e) => e.target.style.borderColor = styles.inputGroupInputFocus.borderColor}
                onBlur={(e) => e.target.style.borderColor = styles.inputGroupInput.borderColor}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.inputGroupLabel}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                style={styles.inputGroupInput}
                onFocus={(e) => e.target.style.borderColor = styles.inputGroupInputFocus.borderColor}
                onBlur={(e) => e.target.style.borderColor = styles.inputGroupInput.borderColor}
              />
            </div>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => {
                e.target.style.background = styles.buttonHover.background;
                e.target.style.transform = styles.buttonHover.transform;
              }}
              onMouseOut={(e) => {
                e.target.style.background = styles.button.background;
                e.target.style.transform = 'none';
              }}
            >
              Login
            </button>
            <p style={styles.signupLink}>
              Don't have an account?{' '}
              <a
                href="/Sign"
                style={styles.signupLinkA}
                onMouseOver={(e) => e.target.style.color = styles.signupLinkAHover.color}
                onMouseOut={(e) => e.target.style.color = styles.signupLinkA.color}
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

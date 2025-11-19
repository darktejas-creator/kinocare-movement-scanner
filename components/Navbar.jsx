import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    color: isActive(path) ? 'var(--color-primary)' : 'var(--color-text-muted)',
    fontWeight: isActive(path) ? 600 : 400,
    textShadow: isActive(path) ? '0 0 10px var(--color-primary-glow)' : 'none',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius-sm)',
    transition: 'all 0.3s ease',
    position: 'relative',
  });

  return (
    <>
      <nav
        className="glass-panel"
        style={{
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          position: 'sticky',
          top: '1rem',
          zIndex: 100,
          margin: '1rem auto',
          maxWidth: '1200px',
          width: '95%'
        }}
      >
        <Link to="/" className="flex-center" style={{ gap: '0.8rem', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Kinocare Logo" style={{ height: '40px', width: 'auto' }} />
          <span className="nav-logo-text" style={{
            fontSize: '1.4rem',
            fontWeight: '800',
            letterSpacing: '1px',
            background: 'linear-gradient(to right, #fff, #aaa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            KINOCARE
          </span>
        </Link>

        {/* Desktop & Mobile Nav Links */}
        <div className="flex-center nav-links" style={{ gap: '1rem', borderRadius: 'var(--radius-full)' }}>
          <Link to="/" style={linkStyle('/')}>Dashboard</Link>
          <Link to="/scan" style={linkStyle('/scan')}>New Scan</Link>
          <Link to="/results" style={linkStyle('/results')}>History</Link>
        </div>

        <div className="flex-center" style={{ gap: '1rem' }}>
          <div className="hide-on-mobile" style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>Alex Morgan</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-primary)' }}>Pro Athlete</p>
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--color-surface-hover)',
            border: '2px solid var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <User size={20} color="var(--color-text)" />
          </div>
        </div>
      </nav>
      {/* Spacer for mobile bottom nav */}
      <div className="hide-on-desktop" style={{ height: '80px', display: 'none' }}></div>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react'
import logo from '../assets/images/Group1(1).png'
import { COLORS, FONTS } from '../theme'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Proses', href: '#proses' },
  { label: 'Produk', href: '#produk' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Header() {
  const [hovered, setHovered] = useState(null)

  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      backgroundColor: COLORS.ivory,
      borderBottom: `1px solid ${COLORS.border}`,
    },
    inner: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 64px',
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    logoImg: {
      height: '28px',
      width: 'auto',
      objectFit: 'contain',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '44px',
    },
    navLink: (isHovered) => ({
      fontFamily: FONTS.body,
      fontSize: '15px',
      fontWeight: 400,
      color: isHovered ? COLORS.textDark : COLORS.textBody,
      transition: 'color 0.2s ease',
    }),
  }

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <a href="#top" style={styles.logoLink}>
          {/* Logo diambil dari file lokal: src/assets/images/logo.png */}
          <img src={logo} alt="Reverra" style={styles.logoImg} />
        </a>

        <nav style={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={styles.navLink(hovered === item.label)}
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

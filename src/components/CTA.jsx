import React from 'react'
import ctaBg from '../assets/images/image.png'
import { COLORS, FONTS } from '../theme'

const contactItems = [
  { icon: '📍', label: 'Surabaya, Jawa Timur' },
  { icon: '✉️', label: 'canmacarbon@gmail.com', href: 'mailto:canmacarbon@gmail.com' },
  { icon: '📷', label: 'reverra.studio' },
]

export default function CTA() {
  const styles = {
    section: {
      backgroundColor: COLORS.creamDark,
      padding: '96px 64px',
    },
    card: {
      maxWidth: '1080px',
      margin: '0 auto',
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden',
      minHeight: '360px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgImage: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(70, 76, 68, 0.72)',
    },
    content: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    },
    heading: {
      fontFamily: FONTS.display,
      fontWeight: 500,
      fontSize: '34px',
      color: COLORS.white,
      margin: 0,
    },
    description: {
      fontFamily: FONTS.body,
      fontSize: '14.5px',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.85)',
      maxWidth: '520px',
      margin: 0,
    },
    contactList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
    },
    contactRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: FONTS.body,
      fontSize: '14px',
      color: COLORS.white,
    },
  }

  return (
    <section id="kontak" style={styles.section}>
      <div style={styles.card}>
        {/* Gambar background lokal: src/assets/images/cta-hexagon-panel.jpg */}
        <img src={ctaBg} alt="" style={styles.bgImage} />
        <div style={styles.overlay} />

        <div style={styles.content}>
          <h2 style={styles.heading}>Mulai Kolaborasi Anda Dengan Kami</h2>
          <p style={styles.description}>
            Apakah Anda arsitek, desainer interior, atau pemilik bisnis? Kami
            siap membantu mewujudkan ruang yang tenang dan berkelanjutan.
          </p>

          <div style={styles.contactList}>
            {contactItems.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href} style={styles.contactRow}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ) : (
                <div key={item.label} style={styles.contactRow}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

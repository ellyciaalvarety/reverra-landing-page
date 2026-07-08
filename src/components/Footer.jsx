import React from 'react'
import { COLORS, FONTS } from '../theme'

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: COLORS.ivory,
      padding: '56px 64px 40px',
      textAlign: 'center',
    },
    inner: {
      maxWidth: '600px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
    brand: {
      fontFamily: FONTS.display,
      fontSize: '20px',
      fontWeight: 500,
      color: COLORS.textDark,
      paddingBottom: '16px',
      borderBottom: `1px solid ${COLORS.border}`,
      marginBottom: '16px',
      width: '100%',
    },
    tagline: {
      fontFamily: FONTS.body,
      fontSize: '12.5px',
      color: COLORS.textMuted,
      lineHeight: 1.6,
    },
    copyright: {
      fontFamily: FONTS.body,
      fontSize: '11.5px',
      color: COLORS.textMuted,
      marginTop: '8px',
    },
  }

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>Reverra</div>
        <p style={styles.tagline}>
          Mendefinisikan ulang kemewahan melalui material berkelanjutan
          <br />
          dan performa akustik yang unggul.
        </p>
        <p style={styles.copyright}>
          © 2024 Reverra. Conscious Luxury for Acoustic Environments.
        </p>
      </div>
    </footer>
  )
}

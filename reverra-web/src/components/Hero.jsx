import React from 'react'
import heroImage from '../assets/images/image63.png'
import { COLORS, FONTS } from '../theme'

export default function Hero() {
  const styles = {
    section: {
      backgroundColor: COLORS.creamLight,
      paddingTop: '0px',
      paddingLeft: '60px',
      paddingRight: '0px',
      paddingBottom: '90px',
    },
    grid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: '48px',
      alignItems: 'center',
    },
    textCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    heading: {
      fontFamily: FONTS.display,
      fontWeight: 500,
      fontSize: '58px',
      lineHeight: 1.15,
      color: COLORS.textDark,
      margin: 0,
    },
    description: {
      fontFamily: FONTS.body,
      fontSize: '15px',
      lineHeight: 1.7,
      color: COLORS.textBody,
      maxWidth: '420px',
    },
    imageWrap: {
      borderRadius: '0px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '560px',
      objectFit: 'cover',
    },
  }

  return (
    <section id="top" style={styles.section}>
      <div style={styles.grid}>
        <div style={styles.textCol}>
          <h1 style={styles.heading}>
            Waste Into
            <br />
            Timeless Design
          </h1>
          <p style={styles.description}>
            Mendefinisikan ulang kemewahan melalui material berkelanjutan dan
            performa akustik yang unggul.
          </p>
        </div>

        <div style={styles.imageWrap}>
          {/* Gambar hero lokal: src/assets/images/hero-panel-room.jpg */}
          <img
            src={heroImage}
            alt="Ruangan dengan panel akustik Reverra"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

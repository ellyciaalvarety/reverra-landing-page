import React from 'react'
import step1 from '../assets/images/image72.png'
import step2 from '../assets/images/image73.png'
import step3 from '../assets/images/image74.png'
import step4 from '../assets/images/image75.png'
import { COLORS, FONTS } from '../theme'

const steps = [
  { image: step1, label: 'Waste Collection' },
  { image: step2, label: 'Shredding & Shorting' },
  { image: step3, label: 'Bio Binder Compressing' },
  { image: step4, label: 'Sterile Room Curing' },
]

export default function Process() {
  const styles = {
    section: {
      backgroundColor: COLORS.creamDark,
      padding: '80px 64px',
    },
    heading: {
      fontFamily: FONTS.display,
      fontWeight: 500,
      fontSize: '38px',
      color: COLORS.textDark,
      textAlign: 'center',
      margin: '0 0 56px',
    },
    grid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '28px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    imageWrap: {
      borderRadius: '4px',
      overflow: 'hidden',
      aspectRatio: '1 / 1',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    label: {
      fontFamily: FONTS.body,
      fontSize: '14.5px',
      fontWeight: 400,
      color: COLORS.textBody,
      textAlign: 'center',
    },
  }

  return (
    <section id="proses" style={styles.section}>
      <h2 style={styles.heading}>Proses Kami</h2>
      <div style={styles.grid}>
        {steps.map((step) => (
          <div key={step.label} style={styles.card}>
            <div style={styles.imageWrap}>
              {/* Gambar lokal, lihat src/assets/images/ */}
              <img src={step.image} alt={step.label} style={styles.image} />
            </div>
            <p style={styles.label}>{step.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

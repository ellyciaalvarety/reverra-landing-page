import React from 'react'
import productImage from '../assets/images/Rectangle250.png'
import { COLORS, FONTS } from '../theme'

const specs = [
  { label: 'Material', value: 'Serat Tekstil Daur Ulang' },
  { label: 'Aplikasi', value: 'Panel Dinding & Plafon' },
  { label: 'Ketebalan', value: '5 cm' },
  { label: 'Diameter', value: '15 cm' },
  { label: 'Pemasangan', value: 'Perekat Atau Sistem Mekanis' },
]

export default function Product() {
  const styles = {
    section: {
      backgroundColor: COLORS.ivory,
      padding: '80px 64px 100px',
    },
    heading: {
      fontFamily: FONTS.display,
      fontWeight: 500,
      fontSize: '38px',
      color: COLORS.textDark,
      margin: '0 0 44px',
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    grid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: '56px',
      alignItems: 'center',
    },
    imageWrap: {
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '420px',
      objectFit: 'cover',
    },
    imageTag: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      backgroundColor: 'rgba(255,255,255,0.9)',
      padding: '8px 16px',
      fontFamily: FONTS.body,
      fontSize: '13px',
      color: COLORS.textDark,
    },
    specCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    specTitle: {
      fontFamily: FONTS.body,
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '1.5px',
      color: COLORS.textMuted,
      marginBottom: '20px',
    },
    specRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 0',
      borderBottom: `1px solid ${COLORS.border}`,
    },
    specLabel: {
      fontFamily: FONTS.body,
      fontSize: '14.5px',
      color: COLORS.textBody,
    },
    specValue: {
      fontFamily: FONTS.body,
      fontSize: '14.5px',
      fontWeight: 600,
      color: COLORS.textDark,
      textAlign: 'right',
    },
  }

  return (
    <section id="produk" style={styles.section}>
      <h2 style={styles.heading}>Produk Kami</h2>
      <div style={styles.grid}>
        <div style={styles.imageWrap}>
          {/* Gambar lokal: src/assets/images/produk-acoustic-wall-panel.jpg */}
          <img
            src={productImage}
            alt="Acoustic Wall Panel Reverra"
            style={styles.image}
          />
          <span style={styles.imageTag}>Acoustic Wall Panel</span>
        </div>

        <div style={styles.specCol}>
          <p style={styles.specTitle}>SPESIFIKASI MATERIAL</p>
          {specs.map((spec) => (
            <div key={spec.label} style={styles.specRow}>
              <span style={styles.specLabel}>{spec.label}</span>
              <span style={styles.specValue}>{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

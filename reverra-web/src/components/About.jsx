import React from 'react'
import aboutImage from '../assets/images/image2.png'
import { COLORS, FONTS } from '../theme'

export default function About() {
  const styles = {
    section: {
      backgroundColor: COLORS.ivory,
      padding: '80px 64px',
    },
    grid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: '56px',
      alignItems: 'center',
    },
    imageWrap: {
      borderRadius: '4px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '460px',
      objectFit: 'cover',
    },
    textCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
    },
    heading: {
      fontFamily: FONTS.display,
      fontWeight: 500,
      fontSize: '36px',
      color: COLORS.textDark,
      margin: 0,
      marginBottom: '8px',
    },
    paragraph: {
      fontFamily: FONTS.body,
      fontSize: '14.5px',
      lineHeight: 1.75,
      color: COLORS.textBody,
      margin: 0,
    },
  }

  return (
    <section id="about" style={styles.section}>
      <div style={styles.grid}>
        <div style={styles.imageWrap}>
          {/* Gambar lokal: src/assets/images/about-living-room.jpg */}
          <img
            src={aboutImage}
            alt="Ruang tamu dengan panel dinding Reverra"
            style={styles.image}
          />
        </div>

        <div style={styles.textCol}>
          <h2 style={styles.heading}>Tentang Reverra</h2>
          <p style={styles.paragraph}>
            Reverra hadir untuk mendefinisikan ulang kemewahan melalui
            material yang bertanggung jawab. Kami mengubah limbah tekstil
            menjadi panel akustik premium yang tidak hanya memperindah
            interior, tetapi juga meningkatkan kenyamanan dan ketenangan
            ruang.
          </p>
          <p style={styles.paragraph}>
            Dengan memadukan estetika desain modern, performa akustik yang
            unggul, dan komitmen terhadap keberlanjutan, Reverra menghadirkan
            solusi interior yang relevan bagi hunian, ruang komersial, dan
            lingkungan kerja masa kini.
          </p>
          <p style={styles.paragraph}>
            Setiap panel Reverra dirancang dengan perhatian terhadap detail,
            kualitas, dan dampak lingkungan. Kami percaya bahwa desain yang
            baik bukan hanya tentang tampilan, tetapi juga tentang bagaimana
            sebuah ruang dapat terasa lebih nyaman, fungsional, dan bermakna.
          </p>
        </div>
      </div>
    </section>
  )
}

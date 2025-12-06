import React from "react";
import styles from "@/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        
        {/* Columna 1: Marca */}
        <div className={styles.brandColumn}>
          <div className={styles.logoWrapper}>
            <img
              src="/images/logo_horizontal.png"
              alt="Panozzo Logo"
              className={styles.logoImage}
            />
          </div>
          <p className={styles.brandDescription}>
            Vistiendo la pasión del fútbol con la mejor calidad y estilo. 
            Camisetas exclusivas para hinchas exigentes.
          </p>
          
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
               <img src="/images/icons/logo_facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
               <img src="/images/icons/logo_instagram.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
               <img src="/images/icons/logo_twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces */}
        <div className={styles.linksColumn}>
          <h3 className={styles.columnTitle}>Explorar</h3>
          <ul className={styles.linkList}>
            <li><Link href="/" className={styles.link}>Inicio</Link></li>
            <li><Link href="/productos" className={styles.link}>Catálogo</Link></li>
            <li><Link href="/sobreNosotros" className={styles.link}>Nuestra Historia</Link></li>
            <li><Link href="/carrito/cart" className={styles.link}>Mi Carrito</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className={styles.contactColumn}>
          <h3 className={styles.columnTitle}>Contacto</h3>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📍</span>
            <p>Av. Viamonte 1384, CABA</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📞</span>
            <p>+54 11 1234-5678</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>✉️</span>
            <p>hola@panozzo.com</p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} <strong>Panozzo Indumentaria</strong>. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
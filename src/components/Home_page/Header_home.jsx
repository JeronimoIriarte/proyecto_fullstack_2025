import styles from "@/styles/style_home/Header_home.module.css";
import Link from "next/link";
import Login from './Login_home';

export default function SeccionPrincipal() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          
          <div className={`${styles.logoContainer} ${styles.fadeInDown}`}>
            <img
              src="/images/logo.png"
              alt="Logo PANOZZO"
              className={styles.logo}
            />
          </div>
          
          <div className={styles.heroContent}>
            <h1 className={styles.fadeInUp}>EL FÚTBOL SE VISTE DE GALA</h1>
            <p className={`${styles.fadeInUp} ${styles.delay1}`}>
              Las camisetas más exclusivas de tus equipos favoritos al mejor precio.
            </p>
            
            <div className={`${styles.buttonsContainer} ${styles.fadeInUp} ${styles.delay2}`}>
              <Link href="/productos" className={styles.btnPrimary}>
                Ver Catálogo
              </Link>
              <div className={styles.loginWrapper}>
                 <Login/>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
import React from 'react';
import styles from '../../styles/style_nosotros/sobreNosotros.module.css';
import { useInView } from 'react-intersection-observer'; 

// Datos de ejemplo para el equipo.
const miembros = [
  {
    name: 'Julián Álvarez',
    role: 'Fundador y Diseñador Principal',
    bio: 'Apasionado por el arte y la moda, Julián fundó Panozzo con la visión de crear camisetas que cuenten una historia.',
    imageUrl: '/images/miembros/member1.jpg',
  },
  {
    name: 'Martina García',
    role: 'Directora de Marketing',
    bio: 'Martina es la voz de nuestra marca. Conecta con nuestra comunidad y se asegura de que nuestros diseños lleguen a ti.',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    name: 'Carlos Benítez',
    role: 'Jefe de Operaciones',
    bio: 'Carlos se encarga de que cada camiseta sea impresa a la perfección y llegue a tu puerta a tiempo.',
    imageUrl: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg',
  },
];

const SobreNosotrosContent = () => {
  
  const animationOptions = {
    triggerOnce: true, 
    threshold: 0.1,  
  };
  const { ref: missionRef, inView: missionIsVisible } = useInView(animationOptions);
  const { ref: localRef, inView: localIsVisible } = useInView(animationOptions);
  const { ref: teamRef, inView: teamIsVisible } = useInView(animationOptions);
  const { ref: locationRef, inView: locationIsVisible } = useInView(animationOptions);


  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <h1 className={styles.heroTitle}>Nuestra Historia</h1>
        <p className={styles.heroSubtitle}>Conoce el corazón y el alma detrás de cada camiseta.</p>
      </section>

      <section ref={missionRef} className={`${styles.contentSection} ${styles.fadeInUp} ${missionIsVisible ? styles.visible : ''}`}>
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <h2>La Pasión es Nuestro Hilo Conductor</h2>
            <p>
              Panozzo Indumentaria nació de una idea simple: la ropa no es solo algo que vistes, es una forma de expresión. En nuestro taller, cada diseño es más que una imagen; es una pieza de arte, una declaración de intenciones y un tributo a la creatividad. Usamos solo los mejores materiales porque creemos que una gran idea merece una ejecución impecable.
            </p>
          </div>
          <div className={styles.imageContent}>
            <img src="/images/pasion.jpg" alt="Taller de diseño de Panozzo" />
          </div>
        </div>
      </section>

      <section ref={localRef} className={`${styles.contentSection} ${styles.altBackground} ${styles.fadeInUp} ${localIsVisible ? styles.visible : ''}`}>
        <div className={`${styles.contentContainer} ${styles.reverseContainer}`}>
          <div className={styles.textContent}>
            <h2>Un Espacio Para la Creatividad</h2>
            <p>
              Visítanos en nuestro local, un lugar diseñado no solo para mostrar nuestras colecciones, sino para ser un punto de encuentro para la comunidad creativa. Aquí podrás ver de cerca la calidad de nuestras prendas, probarte tus diseños favoritos y sentir la energía que nos impulsa.
            </p>
            <p className={styles.address}>
              <strong>Dirección:</strong> Av. Siempre Viva 742, Springfield
            </p>
          </div>
          <div className={styles.imageContent}>
            <img src="/images/tienda-camisetas.webp" alt="Interior de la tienda Panozzo" />
          </div>
        </div>
      </section>

      <section ref={teamRef} className={`${styles.teamSection} ${styles.fadeInUp} ${teamIsVisible ? styles.visible : ''}`}>
        <h2 className={styles.teamTitle}>Conoce al Equipo</h2>
        <div className={styles.teamGrid}>
          {miembros.map((miembro, index) => (
            <div key={index} className={styles.teamMemberCard}>
              <img src={miembro.imageUrl} alt={`Foto de ${miembro.name}`} className={styles.teamMemberImage} />
              <h3 className={styles.teamMemberName}>{miembro.name}</h3>
              <p className={styles.teamMemberRole}>{miembro.role}</p>
              <p className={styles.teamMemberBio}>{miembro.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section ref={locationRef} className={`${styles.locationSection} ${styles.fadeInUp} ${locationIsVisible ? styles.visible : ''}`}>
        <h2 className={styles.locationTitle}>Encuéntranos Aquí</h2>
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.105892361699!2d-58.388025407390884!3d-34.600813665357705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac70f6e3e83%3A0x58420641bb7a100e!2sCAOL%20INDUMENTARIA!5e0!3m2!1ses!2sus!4v1760851603196!5m2!1ses!2sus" width="100%" height="100%" style={{"border": 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  );
};

export default SobreNosotrosContent;
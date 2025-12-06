import styles from "@/styles/style_home/Comentarios_home.module.css";

const testimonios = [
    {
        id: 1,
        name: "Matias",
        estrellas: 5,
        comentario: "La calidad de la tela es increíble, nada que envidiarle a las originales. El estampado del número se ve muy duradero. ¡Un 10!"
    },
    {
        id: 2,
        name: "Lucas",
        estrellas: 4,
        comentario: "La camiseta está bárbara, muy buenos detalles. Le bajo una estrella porque el talle M me quedó un poco más ajustado de lo que esperaba. Recomiendo pedir un talle más."
    },
    {
        id: 3,
        name: "Nicolas",
        estrellas: 5,
        comentario: "Impecable. Los detalles del escudo y los parches son de primera. Llegó super rápido a Córdoba."
    },
    {
        id: 4,
        name: "Sofia",
        estrellas: 3,
        comentario: "El producto es bueno, la tela es fresca. Lo único malo fue que el envío demoró 3 días más de lo que decía la página. Si no tienen apuro, vale la pena."
    },
    {
        id: 5,
        name: "Julián",
        estrellas: 4,
        comentario: "Muy buena relación precio-calidad. Vino con unos hilitos sueltos en la costura de abajo, pero nada que una tijera no arregle. Se ve genial puesta."
    },
    {
        id: 6,
        name: "Sebastian",
        estrellas: 5,
        comentario: "Ya es la tercera vez que compro para mi equipo de fútbol 5. Nunca fallan. La atención por Instagram para dudas fue excelente."
    }
];

// Función auxiliar para renderizar estrellas
const renderEstrellas = (cantidad) => {
    return (
        <div className={styles.starsContainer}>
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < cantidad ? styles.starFilled : styles.starEmpty}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default function SeccionComentarios() {
    return (
        <section className={styles.sectionAbout}>
            <div className={styles.headerContainer}>
                <h3 className={styles.tituloTestimonios}>Lo que dicen los hinchas</h3>
                <div className={styles.divider}></div>
            </div>
            
            <div className={styles.gridTestimonios}>
                {testimonios.map((item) => (
                    <div key={item.id} className={styles.tarjetaTestimonio}>
                        <div className={styles.quoteIcon}>“</div>
                        {renderEstrellas(item.estrellas)}
                        <p className={styles.textoTestimonio}>{item.comentario}</p>
                        <div className={styles.autorContainer}>
                            <div className={styles.avatarPlaceholder}>
                                {item.name.charAt(0)}
                            </div>
                            <div className={styles.infoAutor}>
                                <p className={styles.nombreTestimonio}>{item.name}</p>
                                <span className={styles.verificado}>Cliente Verificado</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
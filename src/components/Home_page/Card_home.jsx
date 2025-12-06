import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/style_home/Card_home.module.css";

const Tarjeta = (props) => {
    const { imageUrl, title, price, id } = props.productos;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div 
            className={styles.card} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.imageWrapper}>
                <div className={styles.badgeWrapper}>
                    <span className={styles.badge}>OFERTA</span>
                </div>
                
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className={`${styles.image} ${isHovered ? styles.imageHover : ''}`} 
                />
                
                <div className={`${styles.overlayAction} ${isHovered ? styles.showAction : ''}`}>
                    <Link href="/productos?filtro=Ofertas" className={styles.quickViewBtn}>
                        Ver Ofertas
                    </Link>
                </div>
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.priceRow}>
                    <span className={styles.price}>${price.toLocaleString("es-ES")}</span>
                    <span className={styles.oldPrice}>${(parseInt(price.replace(/,/g, '')) * 1.2).toLocaleString("es-ES")}</span>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;
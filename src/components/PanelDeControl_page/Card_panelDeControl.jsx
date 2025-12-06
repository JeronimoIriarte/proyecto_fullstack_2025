import React from 'react';
import styles from "../../styles/style_PanelDeControl/Card_panelDeControl.module.css";

export default function Card_panelDeControl({ product, deleteProduct, setDataToEdit }) {
    
    const { title, price, imageUrl, id } = product;

    // Subir al inicio de la página suavemente para editar
    const handleEdit = () => {
        setDataToEdit(product);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {product.onSale && <span className={styles.badge}>OFERTA</span>}
                <img src={imageUrl} alt={title} className={styles.cardImage} />
                <div className={styles.idBadge}>ID: {id.slice(-4)}</div> {/* Muestra los últimos 4 dígitos del ID */}
            </div>
            
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardPrice}>${parseInt(price.replace(/,/g, '')).toLocaleString("es-ES")}</p>
                
                <div className={styles.actions}>
                    <button onClick={handleEdit} className={styles.btnEdit} title="Editar">
                        ✏️ Editar
                    </button>
                    <button onClick={() => deleteProduct(product)} className={styles.btnDelete} title="Eliminar">
                        🗑️ Borrar
                    </button>
                </div>
            </div>
        </div>
    );
}
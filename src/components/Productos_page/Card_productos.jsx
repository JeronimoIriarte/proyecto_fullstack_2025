import React, { useState, useContext, useRef } from 'react';
import { ShoppingCartContext } from '@/pages/carrito/ShoppingCartContextProvider.jsx';
import styles from '@/styles/style_productos/Card_productos.module.css';

// Importamos Swiper para el Modal
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Card_productos({ product, context = 'products', deleteFromCart }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState({ visible: false, text: '', type: '' });
  const { addToCart } = useContext(ShoppingCartContext);
  const sizeSelectRef = useRef(null);

  if (!product) return null;

  const { id, title, price, imageUrl, imageAltUrl, description, quantity } = product;

  const openModal = () => {
    setMessage({ visible: false, text: '', type: '' });
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const getNumericPrice = (value) => {
      if (!value) return 0;
      if (typeof value === 'number') return value;
      return parseFloat(String(value).replace(/[^0-9.-]+/g,"")) || 0;
  }
  
  const numericPrice = getNumericPrice(price);

  const handleAddToCart = (productId) => {
    const selectedSize = sizeSelectRef.current.value;

    if (!selectedSize) {
      setMessage({ visible: true, text: 'Por favor, selecciona una talla.', type: 'error' });
      sizeSelectRef.current.classList.add(styles.errorBorder);
      setTimeout(() => {
        setMessage({ visible: false, text: '', type: '' });
        if (sizeSelectRef.current) sizeSelectRef.current.classList.remove(styles.errorBorder);
      }, 2500);
      return;
    }

    addToCart(productId);
    setMessage({ visible: true, text: '✓ Agregado al carrito', type: 'success' });
    setTimeout(() => {
      setMessage({ visible: false, text: '', type: '' });
    }, 2000);
  };

  return (
    <>
      {/* --- TARJETA DEL CATÁLOGO --- */}
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
            {/* NUEVO: Badge Diagonal (Estructura Wrapper) */}
            {product.onSale && (
                <div className={styles.badgeWrapper}>
                    <span className={styles.badge}>OFERTA</span>
                </div>
            )}
            
            <img 
                src={imageUrl || "/images/placeholder.png"} 
                alt={title} 
                className={styles.cardImage}
            />
            
            {context === 'products' && (
                <div className={styles.cardOverlay}>
                    <button onClick={openModal} className={styles.quickViewBtn}>
                        Ver Más
                    </button>
                </div>
            )}
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardPrice}>${numericPrice.toLocaleString("es-ES")}</p>
          
          {context === 'cart' && (
            <div className={styles.cartControls}>
                <div className={styles.cartInfo}>
                    <span>Cant: {quantity}</span>
                    <span className={styles.subtotal}>Sub: ${(numericPrice * quantity).toLocaleString("es-ES")}</span>
                </div>
                <div className={styles.cartActions}>
                    <button onClick={() => deleteFromCart(id)} className={styles.deleteBtn}>
                        -1
                    </button>
                    <button onClick={() => deleteFromCart(id, true)} className={`${styles.deleteBtn} ${styles.deleteAll}`}>
                        🗑️
                    </button>
                </div>
            </div>
          )}
        </div>
      </div>

      {/* --- MODAL CON SLIDER --- */}
      {context === 'products' && isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            
            <div className={styles.modalGrid}>
                <div className={styles.sliderContainer}>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        pagination={{ clickable: true }}
                        navigation={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        className={styles.swiperCustom} // Clase para estilos globales del slider
                    >
                        <SwiperSlide>
                            <div className={styles.slideImageWrapper}>
                                <img src={imageUrl} alt={title} />
                            </div>
                        </SwiperSlide>

                        {imageAltUrl && (
                            <SwiperSlide>
                                <div className={styles.slideImageWrapper}>
                                    <img src={imageAltUrl} alt={`${title} vista trasera`} />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>

                <div className={styles.modalDetails}>
                    <h2 className={styles.modalTitle}>{title}</h2>
                    <p className={styles.modalPrice}>${numericPrice.toLocaleString("es-ES")}</p>
                    
                    <div className={styles.divider}></div>
                    
                    <p className={styles.modalDescription}>{description}</p>
                    
                    {message.visible && (
                        <div className={`${styles.messageBox} ${styles[message.type]} ${message.visible ? styles.show : ''}`}>
                            {message.text}
                        </div>
                    )}
                    
                    <div className={styles.actionArea}>
                        <div className={styles.selectorContainer}>
                            <label>Talla:</label>
                            <select ref={sizeSelectRef} className={styles.sizeSelect} defaultValue="">
                                <option value="" disabled>Elegir...</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>

                        <button 
                            className={styles.addToCartButton} 
                            onClick={() => handleAddToCart(id)}
                            disabled={message.type === 'success'}
                        >
                            {message.type === 'success' ? '¡Listo!' : 'Añadir al Carrito'}
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from '@/styles/style_home/Productos_home.module.css';
import Card from './Card_home';
import axios from 'axios';

export default function SeccionProductos() {

  const [ofertas, setOfertas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const ENDPOINT = "http://localhost:5000/products";
        const response = await axios.get(ENDPOINT);
        
        // Filtramos solo los productos que están en oferta
        const productosEnOferta = response.data.filter((producto) => producto.onSale === true);
        
        setOfertas(productosEnOferta);
        setIsLoading(false);
      } catch (error) {
        console.error("Error obteniendo ofertas:", error);
        setIsLoading(false);
      }
    };

    fetchOfertas();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.productosSection}>
        <h2>Cargando Ofertas...</h2>
      </section>
    );
  }

  return (
    <>
      <section className={styles.productosSection}>
        <h2>Ofertas</h2>
        {ofertas.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {ofertas.map((producto) => (
              <SwiperSlide key={producto.id}>
                <div className={styles.card}>
                  <Card productos={producto} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No hay ofertas disponibles en este momento.</p>
        )}
      </section>
    </>
  );
};
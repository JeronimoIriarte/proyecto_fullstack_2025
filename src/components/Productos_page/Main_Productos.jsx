import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '@/styles/style_productos/Main_Productos.module.css';
import Card_productos from '@/components/Productos_page/Card_productos.jsx';

const Main_Productos = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const ENDPOINT = "http://localhost:5000/products";
                const response = await axios.get(ENDPOINT);
                const data = response.data;
                
                setProducts(data);

                if (router.isReady && router.query.filtro) {
                    const category = router.query.filtro;
                    setFilter(category);
                    applyFilter(category, data);
                } else {
                    setFilteredProducts(data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Error cargando productos:", error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [router.isReady, router.query.filtro]);


    const applyFilter = (category, dataOrigin) => {
        let result = [];
        if (category === "All") {
            result = dataOrigin;
        } else if (category === "Ofertas") {
            result = dataOrigin.filter((product) => product.onSale === true);
        } else {
            result = dataOrigin.filter((product) => product.category === category);
        }
        setFilteredProducts(result);
        setIsLoading(false);
    };

    const handleFilterChange = (category) => {
        setIsLoading(true);
        setFilter(category);
        setTimeout(() => {
            applyFilter(category, products);
        }, 300); // Reduje un poco el tiempo de carga artificial para que se sienta más rápido
    };

    // Helper para renderizar botones más limpio
    const renderFilterButton = (label, value) => (
        <button 
            key={value}
            onClick={() => handleFilterChange(value)}
            className={filter === value ? styles.active : ''}
        >
            {label}
            {filter === value && <span>•</span>} {/* Puntito decorativo al activo */}
        </button>
    );

    return (
        <>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Catálogo Oficial</h1>
                <p className={styles.heroSubtitle}>Viste los colores de tu pasión con la mejor calidad del mercado.</p>
            </section>
            
            <main className={styles.main}>
                <div className={styles.contenedorDeProductos}>
                    
                    {/* Barra Lateral */}
                    <aside className={styles.filtro}>
                        <h3>Categorías</h3>
                        <div className={styles.filtroBotones}>
                            {renderFilterButton("Ver Todo", "All")}
                            {renderFilterButton("🔥 Ofertas", "Ofertas")}
                            {renderFilterButton("Selección Argentina", "seleccion_arg")}
                            {renderFilterButton("Boca Juniors", "boca")}
                            {renderFilterButton("River Plate", "river")}
                            {renderFilterButton("Racing Club", "racing")}
                            {renderFilterButton("Independiente", "independiente")}
                            {renderFilterButton("San Lorenzo", "san_lorenzo")}
                            {renderFilterButton("Internacionales", "importadas")}
                        </div>
                    </aside>

                    {/* Grilla */}
                    <div className={styles.productGrid}>
                        {isLoading ? (
                            <div className={styles.loadingContainer}>
                              <div className={styles.spinner}></div>
                            </div>
                        ) : (
                            filteredProducts.length > 0 ? (
                                filteredProducts.map((producto) => (
                                    <Card_productos key={producto.id} product={producto} />
                                ))
                            ) : (
                                <p>No se encontraron productos en esta categoría.</p>
                            )
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main_Productos;
import React from 'react';
import styles from '@/styles/style_PanelDeControl/Productos_panelDeControl.module.css';
import Card_panelDeControl from '@/components/PanelDeControl_page/Card_panelDeControl';

const Productos_panelDeControl = ({ handleFilterChange, deleteProduct, setDataToEdit, filteredProducts, isLoading }) => {
    
    // Lista de categorías para generar botones dinámicamente (más limpio)
    const categories = [
        { label: "Todo", value: "All" },
        { label: "🔥 Ofertas", value: "Ofertas" },
        { label: "Selección Arg", value: "seleccion_arg" },
        { label: "Boca", value: "boca" },
        { label: "River", value: "river" },
        { label: "Racing", value: "racing" },
        { label: "Independiente", value: "independiente" },
        { label: "San Lorenzo", value: "san_lorenzo" },
        { label: "Importadas", value: "importadas" },
    ];

    return (
        <div className={styles.gridContainer}>
            <div className={styles.filterBar}>
                <span className={styles.filterLabel}>Filtrar por:</span>
                <div className={styles.filterScroll}>
                    {categories.map((cat) => (
                        <button 
                            key={cat.value} 
                            className={styles.filterChip} 
                            onClick={() => handleFilterChange(cat.value)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.resultsInfo}>
                Mostrando {filteredProducts.length} productos
            </div>

            <div className={styles.productGrid}>
                {isLoading ? (
                    <div className={styles.loadingContainer}>
                        <div className={styles.spinner}></div>
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <Card_panelDeControl 
                            key={product.id} 
                            product={product} 
                            deleteProduct={deleteProduct} 
                            setDataToEdit={setDataToEdit} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Productos_panelDeControl;
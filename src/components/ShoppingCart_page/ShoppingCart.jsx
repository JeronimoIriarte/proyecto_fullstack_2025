import { ShoppingCartContext } from "@/pages/carrito/ShoppingCartContextProvider";
import { useContext } from "react";
import ProductCard from "@/components/Productos_page/Card_productos";
import Link from "next/link";
import cartStyles from '@/styles/style_productos/ShoppingCart_productos.module.css';
import productStyles from '@/styles/style_productos/Main_Productos.module.css';

const ShoppingCart = () => {
    const { state, deleteFromCart, clearCart } = useContext(ShoppingCartContext);
    const { cart } = state;

    if (cart.length === 0) {
        return (
            <div className={cartStyles.emptyCart}>
                <h2 className={cartStyles.emptyTitle}>Tu carrito está vacío</h2>
                <p style={{marginBottom: '2rem', color: '#64748b'}}>¡Explora nuestro catálogo y encuentra tu nueva camiseta favorita!</p>
                <Link href="/productos" className={cartStyles.emptyLink}>
                    Ir a la Tienda
                </Link>
            </div>
        );
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Link href="/productos" className={cartStyles.continueLink}>
                    &larr; Seguir comprando
                </Link>
                <button onClick={clearCart} className={cartStyles.clearButton}>
                    Vaciar Carrito
                </button>
            </div>

            {/* Usamos la grilla de productos pero se verán las tarjetas con los controles de carrito */}
            <div className={productStyles.productGrid}>
                {cart.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        context="cart" // Esto activa los botones de eliminar en la tarjeta
                        deleteFromCart={deleteFromCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShoppingCart;
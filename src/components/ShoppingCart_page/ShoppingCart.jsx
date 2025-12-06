import { ShoppingCartContext } from "@/pages/carrito/ShoppingCartContextProvider";
import { useContext } from "react";
import ProductCard from "@/components/Productos_page/Card_productos";
import Link from "next/link";
import styles from '@/styles/style_productos/ShoppingCart_productos.module.css';
import productStyles from '@/styles/style_productos/Main_Productos.module.css';

const ShoppingCart = () => {

    const { state, deleteFromCart, clearCart } = useContext(ShoppingCartContext);
    const { cart } = state;


    const getNumericPrice = (priceString) => {
        if (typeof priceString !== 'string') return 0;
        return parseFloat(priceString.replace(/[^0-9.-]+/g, "")) || 0;
    }

    const total = cart.reduce((acc, item) => acc + getNumericPrice(item.price) * item.quantity, 0);


    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartHeader}>
                <Link href="/productos" className={styles.continueShoppingLink}>
                    &larr; Seguir Comprando
                </Link>
                <button onClick={clearCart} className={styles.clearButton} disabled={cart.length === 0}>Limpiar Carrito</button>
            </div>

            <article>
                {cart.length === 0 ? (
                    <p className={styles.emptyCartMessage}>El carrito está vacío.</p>
                ) : (
                    <>
                        <div className={productStyles.productGrid}>
                            {cart.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    product={item}
                                    context="cart"
                                    deleteFromCart={deleteFromCart}
                                />
                            ))}
                        </div>
                        <div className={styles.cartTotal}>
                            Total: ${total.toLocaleString("es-ES")}
                        </div>
                    </>
                )}
            </article>
        </div>
    );
};

export default ShoppingCart;
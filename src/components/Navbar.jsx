import { ShoppingCartContext } from "@/pages/carrito/ShoppingCartContextProvider";
import { useContext, useState, useEffect } from "react";
import styles from '@/styles/navbar.module.css';
import Link from 'next/link';

// Agregamos la prop 'alwaysSolid'
export default function Navbar({ alwaysSolid = false }) {
    const { state } = useContext(ShoppingCartContext);
    const { cart } = state;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Si alwaysSolid es true, forzamos la clase navbarScrolled */}
            <div className={`${styles.mainHeader} ${isScrolled || alwaysSolid ? styles.navbarScrolled : ''}`}>
                <nav className={styles.navbar}>
                    <a href="/" className={styles.navbarLogo}>
                        <img src="/images/logo_horizontal.png" alt="panozzo" className={styles.logoPrincipal} />
                    </a>
                    
                    <ul className={`${styles.navbarMenu} ${isOpen ? styles.open : ''}`}>
                        <li><Link href="/" className={styles.navLink}>Inicio</Link></li>
                        <li><Link href="/productos" className={styles.navLink}>Productos</Link></li>
                        <li><Link href="/sobreNosotros" className={styles.navLink}>Sobre Nosotros</Link></li>
                        <li><Link href="#footer" className={styles.navLink}>Contacto</Link></li>
                    </ul>

                    <div className={styles.navbarActions}>
                        <div className={styles.navbarCart}>
                            <Link href="/carrito/cart" className={styles.cartButton}>
                                <img src="/images/icons/cart_icon.svg" alt="Ir al carrito" className={styles.cartImage} />
                                {totalItems > 0 && (
                                    <span className={styles.cartItemCount}>
                                        {totalItems > 9 ? '9+' : totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>
                        <div className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`} onClick={toggleMenu}>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
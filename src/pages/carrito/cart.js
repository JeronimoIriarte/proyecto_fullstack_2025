import Head from "next/head";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import Metatags from "@/components/Metatags.jsx";
import ShoppingCart from "@/components/ShoppingCart_page/ShoppingCart.jsx";
import SimulacionCompra from "@/components/ShoppingCart_page/SimulacionCompra.jsx";
import styles from '@/styles/style_productos/ShoppingCart_productos.module.css';
import { useContext } from "react";
import { ShoppingCartContext } from "@/pages/carrito/ShoppingCartContextProvider";

export default function Cart() {
  const { state } = useContext(ShoppingCartContext);
  const { cart } = state;
  const isEmpty = cart.length === 0;

  return (
    <>
      <Head>
        <title>Mi Carrito | Panozzo</title>
        <Metatags />
      </Head>
      
      <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
        <header>
          {/* Forzamos el Navbar sólido para que se vea sobre el fondo blanco */}
          <Navbar alwaysSolid={true} />
        </header>

        <div style={{ height: "80px" }}></div>

        <main className={styles.main}>
          <div className={styles.headerCart}>
            <h1 className={styles.pageTitle}>Tu Carrito</h1>
          </div>

          {/* Cambiamos la clase según si está vacío o no */}
          <div className={isEmpty ? styles.cartLayoutEmpty : styles.cartLayout}>
            
            <section className={styles.itemsColumn}>
               <ShoppingCart />
            </section>

            {/* Solo mostramos la columna lateral si hay productos */}
            {!isEmpty && (
              <aside className={styles.summaryColumn}>
                 <SimulacionCompra />
              </aside>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
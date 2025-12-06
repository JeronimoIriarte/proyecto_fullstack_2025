import Head from "next/head";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import Metatags from "@/components/Metatags.jsx";
import ShoppingCart from "@/components/ShoppingCart_page/ShoppingCart.jsx";
import SimulacionCompra from "@/components/ShoppingCart_page/SimulacionCompra.jsx";
import productStyles from '@/styles/style_productos/Main_Productos.module.css';
import cartStyles from '@/styles/style_productos/ShoppingCart_productos.module.css';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Carrito de Compras</title>
        <Metatags />
      </Head>
      <div>
        <header>
          <Navbar />
        </header>

        <section className={cartStyles.hero}>
          <div className={productStyles.heroOverlay}></div>
          <h1 className={productStyles.heroTitle}>Mi Carrito</h1>
          <p className={productStyles.heroSubtitle}>Revisa tus productos y finaliza tu compra</p>
        </section>
        <main className={productStyles.main}>
          <h2 className={productStyles.pageTitle}>Resumen de tu pedido</h2>
          <ShoppingCart />
          <SimulacionCompra />
        </main>

        <Footer />
      </div>
    </>

  );
}
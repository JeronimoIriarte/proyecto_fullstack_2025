import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "@/pages/carrito/ShoppingCartContextProvider";
import styles from "@/styles/style_shoppingCart/SimulacionCompra_shoppingCart.module.css";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

const SimulacionCompra = () => {
    const { state, clearCart } = useContext(ShoppingCartContext);
    const { cart } = state;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        card: "",
        expiry: "",
        cvv: "",
    });
    const [status, setStatus] = useState("idle"); // idle, processing, success

    const {
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        wrapperProps,
        getCardImageProps,
    } = usePaymentInputs();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.address) {
            alert("Por favor completa todos los datos.");
            return;
        }

        setStatus("processing");

        // Simulamos un tiempo de procesamiento
        setTimeout(() => {
            clearCart();
            setStatus("success");
            setTimeout(() => {
                setIsModalOpen(false);
                setStatus("idle");
                setFormData({ name: "", address: "", card: "", expiry: "", cvv: "" });
            }, 3000);
        }, 2000);
    };

    const getNumericPrice = (value) => {
        if (!value) return 0;
        if (typeof value === 'number') return value;
        return parseFloat(String(value).replace(/[^0-9.-]+/g,"")) || 0;
    }

    const subtotal = cart.reduce((acc, item) => acc + getNumericPrice(item.price) * item.quantity, 0);
    const shipping = subtotal > 0 ? 5000 : 0; // Ejemplo: Envío fijo
    const total = subtotal + shipping;

    if (cart.length === 0) return null; // No mostrar resumen si está vacío

    return (
        <>
            {/* --- TARJETA DE RESUMEN (Sticky) --- */}
            <div className={styles.summaryCard}>
                <h3 className={styles.summaryTitle}>Resumen del Pedido</h3>
                
                <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString("es-ES")}</span>
                </div>
                <div className={styles.summaryRow}>
                    <span>Envío</span>
                    <span>${shipping.toLocaleString("es-ES")}</span>
                </div>
                
                <div className={styles.divider}></div>
                
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span>Total</span>
                    <span>${total.toLocaleString("es-ES")}</span>
                </div>

                <button onClick={() => setIsModalOpen(true)} className={styles.checkoutButton}>
                    Iniciar Compra
                </button>
                
                <p className={styles.secureText}>🔒 Pago 100% Seguro</p>
            </div>

            {/* --- MODAL DE PAGO --- */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        {status === "success" ? (
                            <div className={styles.successView}>
                                <div className={styles.checkIcon}>✅</div>
                                <h3>¡Compra Exitosa!</h3>
                                <p>Gracias por tu pedido, {formData.name}.</p>
                                <p>Te enviamos el recibo a tu correo.</p>
                            </div>
                        ) : (
                            <>
                                <div className={styles.modalHeader}>
                                    <h3>Finalizar Compra</h3>
                                    <button onClick={() => setIsModalOpen(false)} className={styles.closeBtn}>&times;</button>
                                </div>
                                
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label>Información de Envío</label>
                                        <input
                                            className={styles.input}
                                            type="text"
                                            name="name"
                                            placeholder="Nombre Completo"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            name="address"
                                            placeholder="Dirección de entrega"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Método de Pago</label>
                                        <div className={styles.cardInputContainer}>
                                            <svg className={styles.cardIcon} {...getCardImageProps({ images })} />
                                            <div className={styles.cardFields} {...wrapperProps}>
                                                <input className={styles.inputCard} {...getCardNumberProps()} placeholder="Número de Tarjeta" name="card" />
                                                <div className={styles.cardRow}>
                                                    <input className={styles.inputCard} {...getExpiryDateProps()} placeholder="MM/AA" name="expiry" />
                                                    <input className={styles.inputCard} {...getCVCProps()} placeholder="CVC" name="cvv" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className={styles.payButton} 
                                        disabled={status === "processing"}
                                    >
                                        {status === "processing" ? "Procesando..." : `Pagar $${total.toLocaleString("es-ES")}`}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default SimulacionCompra;
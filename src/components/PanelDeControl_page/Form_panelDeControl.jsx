import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import cloudinaryConfig from "@/components/CloudinaryConfig";
import styles from '@/styles/style_PanelDeControl/Form_panelDeControl.module.css';

const initialForm = {
    id: null,
    title: '',
    price: '',
    imageUrl: '',
    imageAltUrl: '',
    description: '',
    category: '',
    onSale: false,
};

export const Form_panelDeControl = ({ createProduct, updateProduct, dataToEdit }) => {

    const [formData, setFormData] = useState(initialForm);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (dataToEdit) {
            setFormData(dataToEdit);
        } else {
            setFormData(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = async (event, type) => {
        const file = event.target.files[0];
        if (file) {
            setUploading(true);
            const formDataUpload = new FormData();
            formDataUpload.append("file", file);
            formDataUpload.append("upload_preset", cloudinaryConfig.uploadPreset);

            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
                    formDataUpload
                );
                const imageUrl = response.data.secure_url;
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [type]: imageUrl,
                }));
            } catch (error) {
                console.error("Error al subir la imagen:", error);
                alert("Error al subir imagen");
            } finally {
                setUploading(false);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validación básica
        if (!formData.title || !formData.price || !formData.description || !formData.imageUrl || !formData.category) {
            alert("Por favor completa los campos obligatorios.");
            return;
        }
        
        if (formData.id === null) {
            createProduct(formData);
        } else {
            updateProduct(formData);
        }
        handleReset();
    };

    const handleReset = () => {
        setFormData(initialForm);
    };

    return (
        <div className={styles.adminContainer}>
            <header className={styles.header}>
                <Link href="/" className={styles.backLink}>← Volver a la Tienda</Link>
                <h1 className={styles.pageTitle}>Gestión de Inventario</h1>
            </header>

            <div className={styles.formCard}>
                <h2 className={styles.formTitle}>
                    {dataToEdit ? "✏️ Editar Producto" : "➕ Nuevo Producto"}
                </h2>
                
                <form className={styles.formGrid} onSubmit={handleSubmit} onReset={handleReset}>
                    
                    {/* Columna Izquierda: Datos Básicos */}
                    <div className={styles.column}>
                        <div className={styles.inputGroup}>
                            <label>Nombre del Producto</label>
                            <input className={styles.input} type="text" name='title' placeholder="Ej: Camiseta Boca 2025" onChange={handleChange} value={formData.title} />
                        </div>

                        <div className={styles.rowGroup}>
                            <div className={styles.inputGroup}>
                                <label>Precio</label>
                                <input className={styles.input} type="text" name='price' placeholder="Ej: 45000" onChange={handleChange} value={formData.price} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Categoría</label>
                                <select className={styles.select} name='category' onChange={handleChange} value={formData.category}>
                                    <option value="">Seleccionar...</option>
                                    <option value="seleccion_arg">Selección Argentina</option>
                                    <option value="boca">Boca Juniors</option>
                                    <option value="river">River Plate</option>
                                    <option value="independiente">Independiente</option>
                                    <option value="racing">Racing Club</option>
                                    <option value="san_lorenzo">San Lorenzo</option>
                                    <option value="importadas">Importadas</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Descripción</label>
                            <textarea className={styles.textarea} name='description' onChange={handleChange} value={formData.description} placeholder='Detalles del producto...'></textarea>
                        </div>

                        <div className={styles.radioGroup}>
                            <span className={styles.radioLabel}>Estado:</span>
                            <label className={styles.radioOption}>
                                <input type="radio" name="onSale" value="true" checked={formData.onSale === true} onChange={(e) => setFormData({ ...formData, onSale: true })} />
                                🔥 En Oferta
                            </label>
                            <label className={styles.radioOption}>
                                <input type="radio" name="onSale" value="false" checked={formData.onSale === false} onChange={(e) => setFormData({ ...formData, onSale: false })} />
                                Normal
                            </label>
                        </div>
                    </div>

                    {/* Columna Derecha: Imágenes */}
                    <div className={styles.column}>
                        <div className={styles.imageUploadSection}>
                            <label>Imagen Principal</label>
                            <input className={styles.fileInput} type="file" accept="image/*" onChange={(e) => handleImageChange(e, "imageUrl")} />
                            <div className={styles.previewBox}>
                                {formData.imageUrl ? (
                                    <img src={formData.imageUrl} alt="Vista previa" />
                                ) : (
                                    <span className={styles.placeholderText}>Sin imagen</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.imageUploadSection}>
                            <label>Imagen Secundaria (Opcional)</label>
                            <input className={styles.fileInput} type="file" accept="image/*" onChange={(e) => handleImageChange(e, "imageAltUrl")} />
                            <div className={styles.previewBox}>
                                {formData.imageAltUrl ? (
                                    <img src={formData.imageAltUrl} alt="Vista previa secundaria" />
                                ) : (
                                    <span className={styles.placeholderText}>Sin imagen</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Botones de Acción (Ocupan todo el ancho) */}
                    <div className={styles.actionsContainer}>
                        <button className={styles.btnCancel} type="reset" onClick={handleReset}>Limpiar / Cancelar</button>
                        <button className={styles.btnSubmit} type="submit" disabled={uploading}>
                            {uploading ? "Subiendo..." : (dataToEdit ? "Guardar Cambios" : "Crear Producto")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
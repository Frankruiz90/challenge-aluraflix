import React, { useState, useContext, useEffect } from "react";
import Input from "../Input/Input";
import styles from "./form.module.scss";
import { VideoContext } from "../../context/VideoContext"; // Importamos el contexto

export default function Form({
  titleForm,
  subTitle,
  create,
  title,
  link,
  description,
  category,
  id,
  img,onCloseModal
}) {
  const { addVideo,editVideo } = useContext(VideoContext); // Usamos el contexto
  const [formData, setFormData] = useState({
    name: title || "",
    imageUrl: img || "",
    videoUrl: link || "",
    description: description || "",
    category: category || "",
  });

  const [errors, setErrors] = useState({
    name: "",
    imageUrl: "",
    videoUrl: "",
    category: "",
  });

  // Función para validar URL
  const isValidUrl = (url) => {
    const regex = /^(https?:\/\/)[^\s]+$/;
    return regex.test(url);
  };

  // Función para validar el formulario
  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        error =
          value.trim().length < 5
            ? "El nombre debe tener al menos 5 caracteres."
            : "";
        break;
      case "imageUrl":
        error = !isValidUrl(value) ? "La imagen debe ser una URL válida." : "";
        break;
      case "videoUrl":
        error = !isValidUrl(value) ? "El video debe ser una URL válida." : "";
        break;
      case "description":
        error =
          value.trim().length < 10
            ? "La descripción debe tener al menos 10 caracteres."
            : "";
        break;
      case "category":
        error = value ? "" : "Debe seleccionar una opción.";
        break;
      default:
        break;
    }

    return error;
  };

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar datos del formulario
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar campo y actualizar errores
    const error = validate(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // Verificar si todos los campos son válidos
  const isFormValid = () => {
    return (
      formData.name.trim().length >= 5 &&
      isValidUrl(formData.imageUrl) &&
      isValidUrl(formData.videoUrl) &&
      formData.description.trim().length >= 10 &&
      formData.category &&
      !Object.values(errors).some((error) => error)
    );
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
  
    try {
      const newVideo = {
        id: id || Date.now(),
        title: formData.name,
        img: formData.imageUrl,
        link: formData.videoUrl,
        description: formData.description,
        category: formData.category,
      };
  
      if (create) await addVideo(newVideo);
      if (create) handleCleanForm();
      if (!create) await editVideo(id,newVideo)
      if (!create) onCloseModal();
  
      alert(create ? "Video creado" : "Video actualizado");
    } catch (error) {
      console.error("Error al guardar el video:", error);
    } finally {
      // setLoading(false);
    }
  };

  const handleCleanForm = () => {
    setFormData({
      name: "",
      imageUrl: "",
      videoUrl: "",
      description: "",
      category: "",
    });
    console.log(formData);
  };

  return (
    <div>
      <h1>{titleForm||formData.name}</h1>
      {subTitle && (

        <h4>{subTitle}</h4> 
      )
      }
      {create && (
        <div>
          <h6>{create}</h6>
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          title="Nombre"
          placeholder="Ingrese el nombre"
          onChange={handleChange}
          name="name"
          value={formData.name}
        >
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </Input>
        <Input
          type="text"
          title="Imagen"
          placeholder="Enlace de imagen"
          onChange={handleChange}
          name="imageUrl"
          value={formData.imageUrl}
        >
          {errors.imageUrl && (
            <span className={styles.error}>{errors.imageUrl}</span>
          )}
        </Input>
        <Input
          type="text"
          title="Video"
          placeholder="Enlace de video"
          onChange={handleChange}
          name="videoUrl"
          value={formData.videoUrl}
        >
          {errors.videoUrl && (
            <span className={styles.error}>{errors.videoUrl}</span>
          )}
        </Input>
        <Input
          type="select"
          title="Categoría"
          onChange={handleChange}
          name="category"
          value={formData.category}
        >
          {errors.category && (
            <span className={styles.error}>{errors.category}</span>
          )}
        </Input>
        <Input
          type="textarea"
          title="Descripción"
          placeholder="Ingrese la descripción"
          onChange={handleChange}
          name="description"
          value={formData.description}
        >
          {errors.description && (
            <span className={styles.error}>{errors.description}</span>
          )}
        </Input>
        <div className={styles.containerButtons}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isFormValid()}
          >
            Guardar
          </button>
          <button type="button" onClick={handleCleanForm}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

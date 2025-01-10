import React, { createContext, useEffect, useState, useCallback } from "react";

// Contexto
export const VideoContext = createContext();

// Hook personalizado para realizar peticiones
const useApi = () => {
  const baseUrl = "https://6740ce51d0b59228b7f16a98.mockapi.io/api/v1/";

  const makeRequest = useCallback(
    async (endpoint, method = "GET", body = null) => {
      const options = {
        method,
        headers: { "Content-type": "application/json" },
      };
      if (body) options.body = JSON.stringify(body);
      // eslint-disable-next-line no-useless-catch
      try {
        const response = await fetch(`${baseUrl}${endpoint}`, options);
        if (!response.ok) throw new Error("Error en la solicitud");
        return await response.json();
      } catch (error) {
        throw error;
      }
    },
    [baseUrl]
  );

  return makeRequest;
};

// Proveedor del contexto
export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const makeRequest = useApi();

  // Fetch inicial de videos con manejo de errores y estado de carga
  useEffect(() => {
    const fetchVideos = async () => {
      changeLoading(true);
      try {
        const data = await makeRequest("/videos");
        setVideos(data);
      } catch (error) {
        setError("No se pudo cargar los videos");
      } finally {
        changeLoading(false);
      }
    };
    fetchVideos();
  }, [makeRequest]);

  // Función para agregar un video
  const addVideo = useCallback(
    async (newVideo) => {
      changeLoading(true);
      try {
        await makeRequest("/videos", "POST", newVideo);
        setVideos((prev) => [...prev, newVideo]);
      } catch (error) {
        setError("No se pudo agregar el video");
      } finally {
        changeLoading(false);
      }
    },
    [makeRequest]
  );

  // Función para editar un video
  const editVideo = useCallback(
    async (id, updatedVideo) => {
      changeLoading(true);
      try {
        await makeRequest(`/videos/${id}`, "PUT", updatedVideo);
        setVideos((prev) =>
          prev.map((video) =>
            video.id === id ? { ...video, ...updatedVideo } : video
          )
        );
      } catch (error) {
        setError("No se pudo editar el video");
      } finally {
        changeLoading(false);
      }
    },
    [makeRequest]
  );

  // Función para eliminar un video
  const deleteVideo = useCallback(
    async (id) => {
      changeLoading(true);
      try {
        await makeRequest(`/videos/${id}`, "DELETE");
        setVideos((prev) => prev.filter((video) => video.id !== id));
      } catch (error) {
        setError("No se pudo eliminar el video");
      } finally {
        changeLoading(false);
      }
    },
    [makeRequest]
  );

  const changeLoading = (value) => {
    setLoading(value);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        addVideo,
        editVideo,
        deleteVideo,
        loading,
        changeLoading,
        error,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

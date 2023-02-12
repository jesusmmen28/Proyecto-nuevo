import { useEffect, useState } from "react";
import { getAllLinksServices, getUserLinksService } from "../services";

const useLinks = (id) => {
  const [enlaces, setEnlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);

        const data = id
        ? getUserLinksService(id)
        : await getAllLinksServices();
        setEnlaces(data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLinks();
  }, [id]);

  const addLink = (data) => {
    setEnlaces([data, ...enlaces]);
  };

  const removeLink = (id) => {
    setEnlaces(enlaces.filter((enlace) => enlace.id !== id));
  };
  return { enlaces, loading, error, addLink, removeLink };
};

export default useLinks;

import { useState, useEffect } from "react";

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch("https://picsum.photos/v2/list?limit=30");
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        setError("Failed to fetch photos");
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return { photos, loading, error };
}
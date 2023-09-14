import { useState, useEffect } from "react";
import { PhotoData } from "../components/PhotoCard/PhotoCard";

export const useImage = () => {
  const [images, setImages] = useState<PhotoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setLoading(false);
    fetch(
      `https://pixabay.com/api/?key=39437826-5e0eb427c9489006afd2ac12d&q=${term}&image_type=photo`
    )
      .then((response) => response.json())
      .then((response) => {
        setImages(response["hits"]);
        setLoading(true);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return { images, loading, setTerm };
};

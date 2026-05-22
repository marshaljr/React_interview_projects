import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";
import "./styles.css";

export default function ImageSlider({ url, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(
    async (getUrl) => {
      try {
        setLoading(true);
        setError(null);

        // Picsum accepts native query parameters for pagination and limits
        const response = await fetch(`${getUrl}?limit=${limit}`);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            errorText || `Request failed with status ${response.status}`,
          );
        }
        const data = await response.json();

        if (data && Array.isArray(data)) {
          // Picsum objects contain a 'download_url' properties which point directly to the image file
          setImages(data);
        }
      } catch (r) {
        setError(r instanceof Error ? r.message : "Failed to load images");
      } finally {
        setLoading(false);
      }
    },
    [limit],
  );

  function handlePrev() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }
  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  useEffect(() => {
    if (url !== "") {
      const timeoutId = window.setTimeout(() => {
        void fetchImages(url);
      }, 0);

      return () => window.clearTimeout(timeoutId);
    }
  }, [url, fetchImages]);

  console.log("images", images);

  if (loading) {
    return <div>Loading data... Please wait.</div>;
  }
  if (error !== null) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="slider-wrapper">
      <BsArrowLeftCircleFill
        onClick={() => handlePrev()}
        className="arrow arrow-left"
      />
      {images.map((img, index) => (
        <img
          key={img.id} // Picsum objects come with an inherent unique ID string
          src={img.download_url} // Direct link to file asset
          alt={img.author ? `Photo by ${img.author}` : "Slider content"}
          className={currentImage === index ? "active" : "inactive"}
        />
      ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => handleNext()}
      />
      <span className="image-count">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentImage === index ? "active" : "inactive-indicators"
                }
                onClick={() => setCurrentImage(index)}></button>
            ))
          : null}
      </span>
    </div>
  );
}

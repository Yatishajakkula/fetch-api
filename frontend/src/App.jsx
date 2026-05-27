import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/api/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not fetch photos. Make sure the server is running.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading photos...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="container">
      <h1>Photo Gallery</h1>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img
              src={`https://picsum.photos/id/${photo.id}/200/150`}
              alt={photo.author}
            />
            <p>By: {photo.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

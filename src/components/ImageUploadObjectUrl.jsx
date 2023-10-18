import { useState } from "react";

function ImageUploadObjectUrl() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <div>
      <h4>Upload using Object URL</h4>
      <input type="file" onChange={handleImageUpload} />
      <div>{image && <img src={image} alt="uploaded image" width={400} />}</div>
    </div>
  );
}

export default ImageUploadObjectUrl;

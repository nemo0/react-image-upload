import { useState } from "react";

function FileReaderUpload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h4>Upload using FileReader</h4>
      <input type="file" onChange={handleImageUpload} />
      <div>{image && <img src={image} alt="Uploaded Image" width={400} />}</div>
    </div>
  );
}

export default FileReaderUpload;

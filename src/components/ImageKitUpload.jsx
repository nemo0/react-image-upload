import { useState } from "react";
import { IKImage, IKUpload } from "imagekitio-react";

const ImageKitUpload = () => {
  const urlEndpoint = import.meta.env.VITE_IK_URLENDPOINT;
  let publicKey = import.meta.env.VITE_IK_PUBLIC_KEY;

  const [imagePath, setImagePath] = useState("");

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setImagePath(res.filePath);
  };

  const authenticator = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_AUTH_URL);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h4>Upload using ImageKit React SDK</h4>
      <IKUpload
        fileName={`image-${Date.now()}`}
        onError={onError}
        onSuccess={onSuccess}
        authenticator={authenticator}
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
      />

      <div>
        {imagePath && (
          <IKImage
            urlEndpoint={urlEndpoint}
            path={imagePath}
            transformation={[
              {
                width: "400",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default ImageKitUpload;

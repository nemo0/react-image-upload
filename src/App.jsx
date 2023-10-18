import "./App.css";
import FileReaderUpload from "./components/FileReaderUpload";
import ImageKitUpload from "./components/ImageKitUpload";
import ImageUploadObjectUrl from "./components/ImageUploadObjectUrl";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <FileReaderUpload />
        <ImageUploadObjectUrl />
        <ImageKitUpload />
      </div>
    </>
  );
}

export default App;

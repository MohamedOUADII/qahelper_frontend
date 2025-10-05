import React, { useState } from "react";

export default function FileUpload({ onFileData }) {
  const [fileContent, setFileContent] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target.result;
      setFileContent(text);
      onFileData && onFileData(text);
    };

    reader.onerror = () => setError("Error reading file");

    // Accept only .txt or .csv
    if (file.name.endsWith(".txt") || file.name.endsWith(".csv")) {
      reader.readAsText(file);
    } else {
      setError("Please upload a .txt or .csv file");
    }
  };

  return (
    <div className="file-upload-container">
      <input type="file" accept=".txt,.csv" onChange={handleFileChange} />
      {error && <p className="error">{error}</p>}
      {fileContent && (
        <div className="file-preview">
          <h3>File Preview:</h3>
          <pre>{fileContent.slice(0, 1000)}</pre>
        </div>
      )}
    </div>
  );
}

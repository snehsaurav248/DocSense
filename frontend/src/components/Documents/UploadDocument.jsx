import React, { useState, useContext } from "react";
import { uploadDocument } from "../../api";
import { AuthContext } from "../../context/AuthContext";

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);

  const handleUpload = async () => {
    if (file) {
      const data = await uploadDocument(file, user.token);
      if (data._id) {
        alert("Document uploaded successfully!");
      } else {
        alert("Upload failed.");
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadDocument;

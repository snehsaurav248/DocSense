import React from "react";

const DocumentList = () => {
  const documents = [
    { id: 1, name: "Project Proposal.pdf" },
    { id: 2, name: "Meeting Notes.docx" },
    { id: 3, name: "Budget.xlsx" },
  ];

  return (
    <div>
      <h2>Document List</h2>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>{doc.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;

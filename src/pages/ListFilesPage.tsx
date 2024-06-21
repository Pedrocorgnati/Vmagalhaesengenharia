//'''
// src/pages/ListFilesPage.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const ListFilesPage: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files/files');
        setFiles(response.data);
      } catch (error) {
        alert('Error fetching files');
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="list-files-page">
      <h2>Uploaded Files</h2>
      <ul>
        {files.map(file => (
          <li key={file}>
            <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListFilesPage;
//'''
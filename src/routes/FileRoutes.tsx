//src/routes/FileRoutes.tsx
//'''
import { Route, Routes } from 'react-router-dom';
import UploadFilePage from '../pages/UploadFilesPage';
import ListFilesPage from '../pages/ListFilesPage';

const FileRoutes = () => {
  return (
    <Routes>
      <Route path="/upload-file" element={<UploadFilePage />} />
      <Route path="/list-files" element={<ListFilesPage />} />
    </Routes>
  );
};

export default FileRoutes;
//'''
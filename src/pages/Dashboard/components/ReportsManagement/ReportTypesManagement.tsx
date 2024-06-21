//src/pages/Dashboard/components/ReportsManagement/ReportTypesManagement.tsx
//'''
import { useState, useEffect } from 'react';
import { reportsService } from '../../../../services/ReportsService';

export const ReportTypesManagement: React.FC = () => {
  const [types, setTypes] = useState<string[]>([]);
  const [newType, setNewType] = useState<string>('');

  useEffect(() => {
    const loadTypes = async () => {
      const typesData = await reportsService.getReportTypes();
      setTypes(typesData);
    };
    loadTypes();
  }, []);

  const handleAddType = async () => {
    await reportsService.addReportType(newType);
    setNewType('');
    const typesData = await reportsService.getReportTypes();
    setTypes(typesData);
  };

  const handleDeleteType = async (typeId: string) => {
    await reportsService.deleteReportType(typeId);
    const typesData = await reportsService.getReportTypes();
    setTypes(typesData);
  };

  return (
    <div>
      <h2>Gerenciar Tipos de Relatório</h2>
      <input type="text" value={newType} onChange={(e) => setNewType(e.target.value)} />
      <button onClick={handleAddType}>Adicionar Tipo</button>
      <ul>
        {types.map((type, index) => (
          <li key={index}>
            {type}
            <button onClick={() => handleDeleteType(type)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
//'''
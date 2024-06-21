//'''
//src/pages/Dashboard/components/ReportsManagement/ClientReportsFilter.tsx
import { ClientReportsFilterProps } from 'types/types';

const ClientReportsFilter: React.FC<ClientReportsFilterProps> = ({ filterType, onFilterChange, onClearFilter }) => {
  return (
    <div>
      <h2>Filtrar Relatórios</h2>
      <select value={filterType} onChange={onFilterChange}>
        <option value="">Todos os tipos</option>
        <option value="Concreto/Graute">Concreto/Graute</option>
        <option value="Argamassa">Argamassa</option>
        <option value="Bloco de concreto">Bloco de concreto</option>
        <option value="Prisma oco">Prisma oco</option>
        <option value="Prisma cheio">Prisma cheio</option>
        <option value="Prismático">Prismático</option>
      </select>
      <button type="button" onClick={onClearFilter}>Limpar filtros</button>
    </div>
  );
};

export default ClientReportsFilter;
//’’’

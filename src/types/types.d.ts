//'''
// src/types/types.d.ts
export interface Report {
  id: string;
  client: string;
  email: string;
  date: string;
  title: string;
  type: string;
  link: string;
  file?: File | null;
}

export interface Client {
  _id: string;
  name: string;
  email: string;
  city: string;
  role: string;
}

export interface ClientReportsRenderListProps {
  reports: Report[];
  sortConfig: { key: keyof Report; direction: 'ascending' | 'descending' };
  onSort: (key: keyof Report) => void;
}

export interface ClientsRenderListProps {
  filters: { city?: string; email?: string };
}

export interface ReportsRenderListProps {
  refresh: boolean;
}

export interface ClientDashboardProps {
  userLogout: () => void;
}

export interface ReportListProps {
  userEmail: string;
}

export interface TableProps<T> {
  headers: { key: keyof T; label: string }[];
  data: T[];
  onSort: (key: keyof T) => void;
  sortConfig: { key: keyof T; direction: 'ascending' | 'descending' };
  renderRow: (item: T) => JSX.Element;
}

export interface AddClient {
  client: string;
  name: string;
  city: string;
  initialPassword: string;
  role: string;
}

export interface AddClientsFormProps {
  onClientAdded: () => void;
}

export interface AddReportsFormProps {
  onReportAdded: () => void;
}

export interface AdminDashboardProps {
  userLogout: () => void;
}

export interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export interface ButtonLogoutProps {
  userLogout: () => void;
}

export interface DefaultTemplateProps {
  children: React.ReactNode;
}

export interface DeleteClientProps {
  clientId: string;
  icon?: string;
}

export interface DeleteReportProps {
  reportId: string;
}

export interface EditClientModalProps {
  clientId: string;
  onClose: () => void;
  onClientUpdated: () => void;
}

export interface EditClientProps {
  clientId: string;
  onClientUpdated: () => void;
  onClose: () => void;
}

export interface EditClientType {
  client: string;
  name: string;
  city: string;
  initialPassword: string;
}

export interface EditReportModalProps {
  reportId: string;
  onClose: () => void;
  onReportUpdated: () => void;
}

export interface EditReportProps {
  reportId: string;
  onReportUpdated: () => void;
  onClose: () => void;
}

export interface InputPasswordProps {
  label: string;
  error?: {
    message: string;
  };
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: {
    message: string;
  };
}

export interface LoginPageProps {
  setUser: (user: any) => void;
}

export interface Partner {
  id: string;
  name: string;
  link: string;
  image: string;
}

export interface PartnerCard {
  image: string;
  link: string;
}

export interface UserState {
  email: string;
  token: string;
  role: string;
}

export interface WhatWeDoCard {
  _id?: string; 
  title: string;
  description: string;
  image: string;
  id: string;
}

export interface HomePageData {
  title: string;
  description: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface UserUpdatePasswordPageProps {}

export interface ReportsAdmPageProps {}

export interface ConfigAdmPageProps {}

export interface EditHomePageProps {}

export interface HomePageProps {}
//'''

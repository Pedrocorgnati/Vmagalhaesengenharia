//'''
// src/components/DefaultTemplate/DefaultTemplate.tsx
import React from 'react';
import { HeaderLogin } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface DefaultTemplateProps {
  children: React.ReactNode;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
  return (
    <>
      <HeaderLogin />
      <div className="content">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
//'''
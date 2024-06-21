//src/pages/HomePage/ContactPage.tsx
//'''
import './HomePage.scss';
import { ButtonReturn, HeaderLogin, Footer, Nav } from "../../components";

export const ContactUs: React.FC = () => {
  return (
    <>
      <HeaderLogin />
      <Nav />
      <div className="contact-container">
        <h2>Entre em Contato Conosco</h2>
        <p><strong>Endereço:</strong> Rua Caçapava, 375 – Jardim das Indústrias, Jacareí/SP</p>
        <p><strong>Contato:</strong> (12) 98133-9898 / 99138-4032</p>
      </div>
      <ButtonReturn />
      <Footer />
    </>
  );
};

//'''
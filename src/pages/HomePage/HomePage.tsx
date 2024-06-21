//'''
// src/pages/HomePage/HomePage.tsx
import { HeaderLogin } from 'components';
import { WhatWeDoCard } from '../../components/Cards/WhatWeDoCard';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderLogin />
      <Nav />
      <div className="homePageContainer">
        <h1>Bem-vindo à Vmagalhães Engenharia</h1>
        <WhatWeDoCard />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
//’’’

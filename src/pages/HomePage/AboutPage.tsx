//src/pages/HomePage/AboutPage.tsx
//'''
import { ButtonReturn, HeaderLogin, Footer } from "../../components";
import './HomePage.scss';
import { Nav } from "../../components/Nav/Nav";

export const AboutUs: React.FC = () => {
  return (
    <>
      <HeaderLogin />
      <Nav />
      <h1>Nossa Missão</h1>
      <p>Garantir a segurança e durabilidade das construções de nossos por meio de ensaios dos materiais, assegurando que atenda aos mais altos padrões da qualidade, as normas técnicas vigentes, sempre proporcionando tranquilidade, confiança e transparência aos nossos clientes. Buscamos atuar de forma sustentável ao meio ambiente, alinhados ainda a políticas sociais e com normas rígidas de governança corporativa.</p>
      <h1>Nossa Visão</h1>
      <p>Ser a principal referência no país em controle tecnológico dos materiais, inovando constantemente para antecipar as necessidades do setor de engenharia civil, contribuindo assim para um ambiente seguro, sustentável e integro.</p>
      <ButtonReturn />
      <Footer />
    </>
  );
};

//'''
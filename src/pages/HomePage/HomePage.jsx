import { HeaderLogin } from "../../components";
import "./HomePage.scss";
import { WhatWeDoCard } from "../../components/Cards/WhatWeDoCard";
import { Footer } from "../../components/Footer/Footer";
import { Nav } from "../../components/Nav/Nav";
import ImageHomePage from "../../Assets/Construtora1.jpg";
import { ButtonAdminDash } from "../../components/Buttons/Buttons.jsx";
import { Link } from "react-router-dom";
export const HomePage = () => {
    return (
        <>
            <HeaderLogin />
            <Nav />
            <Link to="https://api.whatsapp.com/send?phone=5512981339898&text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o%20de%20engenharia.">
                <img src="src/Assets/Images/whatsapp.png" alt="WhatsApp" className="whatsapp-icon" />
            </Link>
            <div className="aboutUs">
                <h1 className="aboutUsTitle">
                    Quem somos nós
                </h1>
                <p className="aboutUsText">
                    Com mais 15 anos de serviços prestados na área da tecnologia dos materiais, Vinícius Magalhães resolveu fundar em 2023 a VMagalhães Engenharia.
                </p>
                <p className="aboutUsText">
                    A empresa surgiu com o intuito de contribuir com o crescimento do país, atuando na área do controle tecnológico dos materiais, executando ensaios em concreto, alvenaria, solos e pavimento, assegurando que todos os componentes estejam de acordo com o projeto e atendendo todas as normas e especificações técnicas.
                </p>
                <img src={ImageHomePage} alt="Imagem da construtora" />
            </div>
            <div className="whatWeDo">
                <h1 className="whatWeDoTitle">
                    O que nós fazemos
                </h1>
                <p className="whatWeDoText">
                    Temos profissionais experientes e equipamentos modernos para realização de diversos ensaios em concreto, alvenaria, solos e pavimento.
                </p>
                <p className="whatWeDoText">
                    Nosso laboratório foi auditado está em conformidade com os requisitos do PBQP-H (SiAC).
                </p>
                <WhatWeDoCard />
                <ButtonAdminDash />

            </div>

            <Footer />
        </>
    );
};
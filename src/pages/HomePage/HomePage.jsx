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
            <ButtonAdminDash />
            <div className="aboutUs">
                <h1 className="aboutUsTitle">
                    Quem somos nós
                </h1>
                <p className="aboutUsText">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex nesciunt in ipsum sint voluptatum odio itaque, recusandae dolorem nisi quod nulla, maxime minima dolores laborum eligendi ipsam expedita est!
                </p>
                <img src={ImageHomePage} alt="Imagem da construtora" />
            </div>
            <div className="whatWeDo">
                <h1 className="whatWeDoTitle">
                    O que nós fazemos
                </h1>
                <p className="whatWeDoText">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex nesciunt in ipsum sint voluptatum odio itaque, recusandae dolorem nisi quod nulla, maxime minima dolores laborum eligendi ipsam expedita est!
                </p>
                <WhatWeDoCard />

            </div>
            <Link to="https://api.whatsapp.com/send?phone=5512981339898&text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o%20de%20engenharia.">
                <img src="src/Assets/Images/whatsapp.png" alt="WhatsApp" class="whatsapp-icon" />
            </Link>
            <Footer />
        </>
    );
};
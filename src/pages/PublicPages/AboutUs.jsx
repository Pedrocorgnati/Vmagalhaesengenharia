import { ButtonReturn, HeaderLogin, Footer } from "../../components";
import "../HomePage/HomePage.scss";
import { Nav } from "../../components/Nav/Nav";

export const AboutUs = () => {
    return (
        <>
            <HeaderLogin />
            <Nav />
            <h1>Aqui estarão informações importantes sobre a empresa</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis praesentium molestias. Rerum quos tenetur amet voluptatem nemo, dignissimos quas delectus explicabo maxime ad ipsam dolore quidem consequatur incidunt natus!</p>
            <ButtonReturn />
            <Footer />
        </>
    )
}
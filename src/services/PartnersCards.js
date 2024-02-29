// Importando as imagens
import MondecImage from "../Assets/Partners/Mondec.png";
import CoevoImage from "../Assets/Partners/Coevo.png";
import ConcretoSecoImage from "../Assets/Partners/Concreto seco.png"; // Certifique-se de que o nome do arquivo não tenha espaços ou renomeie para evitar problemas.
import FausiImage from "../Assets/Partners/fausi.png";
import HemaImage from "../Assets/Partners/Hema.png";
import InterImage from "../Assets/Partners/Inter.png";

class PartnersCards {
    getCardsList() {
        const MockCards = [
            {
                image: MondecImage,
                link: "https://www.mondecconstrutora.com.br/",
            },
            {
                image: CoevoImage,
                link: "https://coevoconstrutora.com.br/",
            },
            {
                image: ConcretoSecoImage,
                link: "https://concretoseco.com.br/",
            },
            {
                image: FausiImage,
                link: "https://fausicezario.com.br/",
            },
            {
                image: HemaImage,
                link: "http://hemaconstrucao.com.br/",
            },
            {
                image: InterImage,
                link: "https://www.interconstrutora.com/",
            },
        ];
        return Promise.resolve(MockCards);
    }
}

export const partnersCards = new PartnersCards();

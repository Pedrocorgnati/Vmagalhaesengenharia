import MondecImage from "../assets/Partners/Mondec.png";
import CoevoImage from "../assets/Partners/Coevo.png";
import ConcretoSecoImage from "../assets/Partners/Concreto seco.png";
import FausiImage from "../assets/Partners/fausi.png";
import HemaImage from "../assets/Partners/Hema.png";
import InterImage from "../assets/Partners/Inter.png";
import { PartnerCard } from "types/types";



class PartnersCards {
  getCardsList(): Promise<PartnerCard[]> {
    const MockCards: PartnerCard[] = [
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

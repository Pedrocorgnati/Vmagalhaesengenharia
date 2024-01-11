class WhatWeDoCards {
    getCardsList() {
        const MockCards = [
            {
                title: "Controle tecnológico de concreto",
                Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex nesciunt in ipsum sint voluptatum odio itaque, recusandae dolorem nisi quod nulla, maxime minima dolores laborum eligendi ipsam expedita est!",
                image: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                title: "Controle tecnológico de solos",
                Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex nesciunt in ipsum sint voluptatum odio itaque, recusandae dolorem nisi quod nulla, maxime minima dolores laborum eligendi ipsam expedita est!",
                image: "https://imagens-revista-pro.vivadecora.com.br/uploads/2019/02/tipos-de-solo-solo-siltoso.jpg",
            },
            {
                title: "Controle tecnológico de pavimentos",
                Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex nesciunt in ipsum sint voluptatum odio itaque, recusandae dolorem nisi quod nulla, maxime minima dolores laborum eligendi ipsam expedita est!",
                image: "https://celere-ce.com.br/wp-content/uploads/2022/01/Vigas-de-Concreto.jpeg",
            },
            {
                title: "Controle tecnológico de outra coisa",
                Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex nesciunt in ipsum sint voluptatum odio itaque, recusandae dolorem nisi quod nulla, maxime minima dolores laborum eligendi ipsam expedita est!",
                image: "https://www.fa-aco.com.br/wp-content/uploads/2017/06/Viga-de-ferro-4.jpg",
            },
            {
                title: "Controle tecnológico de outra coisa mais aleatória ainda",
                Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex nesciunt in ipsum sint voluptatum odio itaque, recusandae dolorem nisi quod nulla, maxime minima dolores laborum eligendi ipsam expedita est!",
                image: "https://conteudo.imguol.com.br/blogs/137/files/2016/11/PARAISOPOLIS_44793095.jpg",
            },

        ];
        return Promise.resolve(MockCards);
    }
}

export const whatWeDoCards = new WhatWeDoCards();
class WhatWeDoCards {
    getCardsList() {
        const MockCards = [
            {
                title: "Controle tecnológico de concreto",
                Description: '"Slump test", Resistência à compressão axial, Tração na flexão, Modulo de elasticidade e deformação, Extração de testemunhos de concreto',
                image: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                title: "Controle tecnológico de pavimento e solos",
                Description: "Ensaios de caracterização de solos (CBR, granulometria, LL, LP), Grau de compactação “in situ” pelo método do frasco de areia, Grau de compactação “in situ” com emprego do cilindro de cravação, Ensaios Marshall (Estabilidade e fluência),Teor de betume.",
                image: "https://imagens-revista-pro.vivadecora.com.br/uploads/2019/02/tipos-de-solo-solo-siltoso.jpg",
            },
            {
                title: "Controle tecnológico de alvenaria",
                Description: "Blocos de concreto e cerâmico (resistência à compressão, análise dimensional e absorção de água),Argamassa de assentamento,Prisma oco e cheio, Graute, Resistência de aderência à tração (arrancamento).",
                image: "https://site.ibracon.org.br/Site_revista/Concreto_Construcoes/Concreto_blog/wp-content/uploads/2021/01/Fig_6-768x612.jpg",
            },
        ];
        return Promise.resolve(MockCards);
    }
}

export const whatWeDoCards = new WhatWeDoCards();
class ReportsService {
    getReportsList() {
        const MockReports = [
            {
                date: "2023-12-20",
                title: "Relatório de concreto da obra 4",
                type: "Concreto/Graute",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-21",
                title: "Relatório de argamassa da obra 1",
                type: "Argamassa",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-22",
                title: "Relatório de bloco de concreto da obra 5",
                type: "Bloco de concreto",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-23",
                title: "Relatório de prisma oco da obra 2",
                type: "Prisma oco",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-24",
                title: "Relatório de prisma cheio da obra 3",
                type: "Prisma cheio",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-25",
                title: "Relatório prismático da obra 1",
                type: "Prismático",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-19",
                title: "Relatório de concreto da obra 3",
                type: "Concreto/Graute",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-20",
                title: "Relatório de argamassa da obra 5",
                type: "Argamassa",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-21",
                title: "Relatório de bloco de concreto da obra 4",
                type: "Bloco de concreto",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-22",
                title: "Relatório de prisma oco da obra 1",
                type: "Prisma oco",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-23",
                title: "Relatório de prisma cheio da obra 2",
                type: "Prisma cheio",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                date: "2023-12-24",
                title: "Relatório prismático da obra 5",
                type: "Prismático",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
        ];
        return Promise.resolve(MockReports);
    }
}

export const reportsService = new ReportsService();
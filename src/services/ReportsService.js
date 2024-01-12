class ReportsService {
    constructor() {
        this.MockReports = [
            {
                id: "65168d",
                client: "corgnati.pedro@gmail.com",
                date: "2023-12-20",
                title: "Relatório de concreto da obra 4",
                type: "Concreto/Graute",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "681fas",
                client: "corgnati.pedro@gmail.com",
                date: "2023-12-21",
                title: "Relatório de argamassa da obra 1",
                type: "Argamassa",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "safn21",
                client: "contato@bola.com",
                date: "2023-12-22",
                title: "Relatório de bloco de concreto da obra 5",
                type: "Bloco de concreto",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "fART58",
                client: "contato@bola.com",
                date: "2023-12-23",
                title: "Relatório de prisma oco da obra 2",
                type: "Prisma oco",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "akuk36",
                client: "contato@bola.com",
                date: "2023-12-24",
                title: "Relatório de prisma cheio da obra 3",
                type: "Prisma cheio",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "gidy98",
                client: "contato@bola.com",
                date: "2023-12-25",
                title: "Relatório prismático da obra 1",
                type: "Prismático",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "cnb435",
                client: "contato@bola.com",
                date: "2023-12-19",
                title: "Relatório de concreto da obra 3",
                type: "Concreto/Graute",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "fsdt42",
                client: "contato@bola.com",
                date: "2023-12-20",
                title: "Relatório de argamassa da obra 5",
                type: "Argamassa",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "jfh58h",
                client: "contato@bola.com",
                date: "2023-12-21",
                title: "Relatório de bloco de concreto da obra 4",
                type: "Bloco de concreto",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "g4684d",
                client: "contato@bola.com",
                date: "2023-12-22",
                title: "Relatório de prisma oco da obra 1",
                type: "Prisma oco",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "fas558",
                client: "contato@bola.com",
                date: "2023-12-23",
                title: "Relatório de prisma cheio da obra 2",
                type: "Prisma cheio",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
            {
                id: "1f6815",
                client: "contato@bola.com",
                date: "2023-12-24",
                title: "Relatório prismático da obra 5",
                type: "Prismático",
                Link: "https://www.tecnosilbr.com.br/conteudo/wp-content/uploads/2017/11/image1-2-2.jpg",
            },
        ];

    }

    getReportsList() {
        return Promise.resolve(this.MockReports);
    }

    findReportById(reportId) {
        return this.MockReports.find(report => report.id === reportId);
    }

    addReport(newReport) {
        this.MockReports.push(newReport);
    }

    updateReport(reportId, updatedReport) {
        const reportIndex = this.MockReports.findIndex(report => report.id === reportId);
        if (reportIndex !== -1) {
            this.MockReports[reportIndex] = { ...updatedReport, id: reportId };
        }
    }
    deleteReport(reportId) {
        this.MockReports = this.MockReports.filter(report => report.id !== reportId);
    }
}

export const reportsService = new ReportsService();
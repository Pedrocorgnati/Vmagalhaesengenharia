class ReportsService {
    constructor() {
        this.MockReports = [
            {
                id: "65168d",
                client: "corgnati.pedro@gmail.com",
                date: "2023-12-20",
                title: "Relatório de concreto da obra 4",
                type: "Concreto/Graute",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "681fas",
                client: "corgnati.pedro@gmail.com",
                date: "2023-12-21",
                title: "Relatório de argamassa da obra 1",
                type: "Argamassa",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "safn21",
                client: "contato@bola.com",
                date: "2023-12-22",
                title: "Relatório de bloco de concreto da obra 5",
                type: "Bloco de concreto",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "fART58",
                client: "contato@bola.com",
                date: "2023-12-23",
                title: "Relatório de prisma oco da obra 2",
                type: "Prisma oco",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "akuk36",
                client: "contato@bola.com",
                date: "2023-12-24",
                title: "Relatório de prisma cheio da obra 3",
                type: "Prisma cheio",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "gidy98",
                client: "contato@bola.com",
                date: "2023-12-25",
                title: "Relatório prismático da obra 1",
                type: "Prismático",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "cnb435",
                client: "contato@bola.com",
                date: "2023-12-19",
                title: "Relatório de concreto da obra 3",
                type: "Concreto/Graute",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "fsdt42",
                client: "contato@bola.com",
                date: "2023-12-20",
                title: "Relatório de argamassa da obra 5",
                type: "Argamassa",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "jfh58h",
                client: "contato@bola.com",
                date: "2023-12-21",
                title: "Relatório de bloco de concreto da obra 4",
                type: "Bloco de concreto",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "g4684d",
                client: "contato@bola.com",
                date: "2023-12-22",
                title: "Relatório de prisma oco da obra 1",
                type: "Prisma oco",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "fas558",
                client: "contato@bola.com",
                date: "2023-12-23",
                title: "Relatório de prisma cheio da obra 2",
                type: "Prisma cheio",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
            },
            {
                id: "1f6815",
                client: "contato@bola.com",
                date: "2023-12-24",
                title: "Relatório prismático da obra 5",
                type: "Prismático",
                Link: "https://drive.google.com/file/d/16Ft5XnTbDiuXR5h67biHiV0dfjs5Ozs9/view?usp=drive_link",
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
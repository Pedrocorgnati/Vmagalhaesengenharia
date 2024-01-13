class ClientsService {
    constructor() {
        this.MockClients = [
            {
                id: "66968d",
                client: "corgnati.pedro@gmail.com",
                name: "Pedro",
                birthday: "1989-01-25",
                city: "Cachoeira Paulista",
            },
            {
                id: "hj9udy",
                client: "contato@bola.com",
                name: "Bola",
                birthday: "1985-03-08",
                city: "Lorena",
            },
            {
                id: "am5g27",
                client: "manoel@gmail.com",
                name: "Manoel",
                birthday: "1976-02-10",
                city: "Guaratinguetá",
            },

        ];

    }

    getClientsList() {
        return Promise.resolve(this.MockClients);
    }

    findClientById(clientId) {
        return this.MockClients.find(client => client.id === clientId);
    }

    addClient(newClient) {
        this.MockClients.push(newClient);
    }

    updateClient(clientId, updatedClient) {
        const clientIndex = this.MockClients.findIndex(client => client.id === clientId);
        if (clientIndex !== -1) {
            this.MockClients[clientIndex] = { ...updatedClient, id: clientId };
        }
    }
    deleteClient(clientId) {
        this.MockClients = this.MockClients.filter(client => client.id !== clientId);
    }
}

export const clientsService = new ClientsService();
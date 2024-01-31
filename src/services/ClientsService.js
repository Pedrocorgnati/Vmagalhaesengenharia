class ClientsService {
    constructor() {
        this.MockClients = [
            {
                id: "66968d",
                client: "corgnati.pedro@gmail.com",
                name: "Pedro",
                birthday: "1989-01-25",
                city: "Cachoeira Paulista",
                initialPassword: "senha123"
            },
            {
                id: "hj9udy",
                client: "contato@bola.com",
                name: "Bola",
                birthday: "1985-03-08",
                city: "Lorena",
                initialPassword: "senha456"
            },
            {
                id: "am5g27",
                client: "manoel@gmail.com",
                name: "Manoel",
                birthday: "1976-02-10",
                city: "Guaratinguetá",
                initialPassword: "senha789"
            },
        ];
    }

    getClientsList() {
        // Retorna uma promessa com os clientes
        return Promise.resolve(this.MockClients);
    }

    findClientById(clientId) {
        // Encontra um cliente pelo ID
        return this.MockClients.find(client => client.id === clientId);
    }

    addClient(newClient) {
        // Adiciona um novo cliente
        this.MockClients.push(newClient);
    }

    updateClient(clientId, updatedClient) {
        // Atualiza um cliente existente
        const clientIndex = this.MockClients.findIndex(client => client.id === clientId);
        if (clientIndex !== -1) {
            this.MockClients[clientIndex] = { ...updatedClient, id: clientId };
        }
    }

    deleteClient(clientId) {
        // Remove um cliente
        this.MockClients = this.MockClients.filter(client => client.id !== clientId);
    }
}

export const clientsService = new ClientsService();

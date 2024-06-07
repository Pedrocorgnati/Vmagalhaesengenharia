import { getFirestore, collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './firebaseConfig';

class ClientsService {
  constructor() {
    this.clientsCollection = collection(db, "clients");
  }

  async getClientsList() {
    const clientsSnapshot = await getDocs(this.clientsCollection);
    return clientsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async findClientById(clientId) {
    const clientDoc = await getDoc(doc(this.clientsCollection, clientId));
    return clientDoc.exists() ? { id: clientDoc.id, ...clientDoc.data() } : null;
  }

  async addClient(newClient) {
    await setDoc(doc(this.clientsCollection, newClient.id), newClient);
  }

  async updateClient(clientId, updatedClient) {
    await updateDoc(doc(this.clientsCollection, clientId), updatedClient);
  }

  async deleteClient(clientId) {
    await deleteDoc(doc(this.clientsCollection, clientId));
  }
}

export const clientsService = new ClientsService();

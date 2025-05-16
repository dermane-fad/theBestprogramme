import Client from '../models/client.js';

const clientController = {
  createClient: (req, res) => {
    Client.create(req.body, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la création du client.' });
      }
      res.status(201).json({ message: 'Client créé avec succès.' });
    });
  },

  getAllClients: (req, res) => {
    Client.getAll((err, clients) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la récupération des clients.' });
      }
      res.json(clients);
    });
  },

  getClientById: (req, res) => {
    const id = req.params.id;
    Client.getById(id, (err, client) => {
      if (err || !client) {
        return res.status(404).json({ error: 'Client non trouvé.' });
      }
      res.json(client);
    });
  },

  updateClient: (req, res) => {
    const id = req.params.id;
    Client.update(id, req.body, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la mise à jour du client.' });
      }
      res.json({ message: 'Client mis à jour avec succès.' });
    });
  },

  deleteClient: (req, res) => {
    const id = req.params.id;
    Client.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la suppression du client.' });
      }
      res.json({ message: 'Client supprimé avec succès.' });
    });
  }
};

export default clientController;
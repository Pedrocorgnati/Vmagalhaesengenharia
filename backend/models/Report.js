const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  clienteEmail: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    enum: ['Concreto/graute', 'Argamassa', 'Bloco de concreto', 'Prisma oco', 'Prisma cheio', 'Prismático'],
    required: true,
  },
  dataRelatorio: {
    type: Date,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Report', ReportSchema);

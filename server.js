require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const notesRoutes = require('./routes/notesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const permissionsRoutes = require('./routes/permissionsRoutes');
const pagesRoutes = require('./routes/pagesRoutes');
const todosRoutes = require('./routes/todosRoutes');
const meetingsRoutes = require('./routes/meetingsRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const ticketsRoutes = require('./routes/ticketsRoutes');
const expensesRoutes = require('./routes/expensesRoutes');
const paymentmethodsRoutes = require('./routes/paymentmethodsRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const tasksRoutes = require('./routes/tasksRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const invoicesRoutes = require('./routes/invoicesRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');
const pagescategoryRoutes = require('./routes/pagescategoryRoutes');

// abcd
const app = express();
const PORT = process.env.PORT || 3000;

// CORS options
const corsOptions = {
  origin: '*', // If you want any URL then use '*'
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

// Use CORS middleware with options
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/notes', notesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/permissions', permissionsRoutes);
app.use('/api/pages', pagesRoutes);
app.use('/api/todos', todosRoutes);
app.use('/api/meetings', meetingsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/paymentmethods', paymentmethodsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/invoices', invoicesRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/pagescategory', pagescategoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
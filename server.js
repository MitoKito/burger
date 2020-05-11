const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./controllers/burgers_controller');

const PUBLIC_FOLDER_PATH = path.join(process.cwd(), 'public')

// Setup express server
const app = express();

// Setup PORT for listener
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayou: 'main' }));
app.set('view engine', 'handlebars');

// Route
app.use(router);

// Start server
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));

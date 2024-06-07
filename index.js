const express = require('express');
const bodyParser = require('body-parser');
const TelegramController = require('./controllers/telegramController');

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Route for handling Telegram webhook updates
app.post('/webhook', TelegramController.handleTelegramUpdate);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

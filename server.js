const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('build'));


app.get('/info', (request, response) => {
  const currentDate = new Date().toLocaleString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    response.send(
      `
            <div>
                <p>${currentDate} (${timeZone})</p>
            </div>`
    
  );
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
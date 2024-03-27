const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const LocationRoute = require('./routes/location');
const TripDetailRoute = require('./routes/tripDetail');
const UsersRoute = require('./routes/users');
const TripPlanRoute = require('./routes/tripPlan');
// const registerRoute = require('./routes/register');
// const userRoute = require('./routes/users');
// const examRoute = require('./routes/exam');
// const resultRoute = require('./routes/result');
// const aiRoute = require('./routes/ai');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
    },
  },
  apis: ['routes/*.js'], // Укажите путь к вашим файлам маршрутов
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const port = 8000;

app.use(express.json());
app.use(morgan('common'));
app.use(cookieParser());
app.use(cors());
app.use('/location', LocationRoute);
app.use('/users', UsersRoute);
app.use('/tripPlan', TripPlanRoute);
app.use('/tripDetail', TripDetailRoute);
// app.use('/ai', aiRoute);

const DB_URL =
  'mongodb+srv://nurrsserkul:7E4c0JJSGW8nq9aQ@cluster0.muqgs1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(DB_URL)
  .then(() => console.log('Database connected!'))
  .catch(err => console.log(err));

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log('Backend server is running at: ', port);
  });
});

mongoose.connection.on('error', err => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log',
  );
});

// it should be in the end
app.use(function (req, res) {
  return res.status(404).json({ message: 'Endpoint not found' });
});

const app = require('./app');
const mongoose = require('mongoose');

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the backend server of the app." });
});
  
require('./routes/user.routes')(app);

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

  mongoose.connect('mongodb+srv://test:1234@cluster0.9gv5j.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion to MongoDB OK !'))
  .catch(() => console.log('Connexion to MongoDB FAILED !'));
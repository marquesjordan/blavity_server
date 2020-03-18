// apiKEY = c8840f169ec844549128b2271e4674d3

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/News');

mongoose.connect('mongodb://mblavity:blav1234@ds161049.mlab.com:61049/practice-app-mj');

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] == 'http') {
      res.redirect('https://blavity-server.herokuapp.com' + req.url);
    } else {
      return next();
    }
});

require('./routes/newsRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
  
const PORT = process.env.PORT || 5000;
app.listen(PORT);
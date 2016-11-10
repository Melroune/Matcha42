let express = require('express');// je definie la variable app et j'inporte la dependance et j'exute la fonction ()
let app = express();

app.get('/', (request, response) => {
    response.send('salut tu est a la racine');
 });

 app.get('/demo', (request, response) => {
     response.send('salut tu est sur la demo');
  });

app.listen(8080);

// const express = require('express');
// const { engine } = require('express-handlebars')
// const path = require('path')
// const app = express();

// const hbs = require('hbs')

// const port = process.env.PORT || 5000;
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // app.use(express.static('public'));
// // app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main" }));
// // app.set('view engine', 'handlebars');
// // app.set("views", path.join(__dirname + "/views"));


// app.engine('hbs', hbs.express4({
//     partialsDir: __dirname + '/views/partials'
// }));
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');

// app.get('/', (req, res) => {
//     res.render('home');
// });



// app.listen(port, () => {
//     console.log(`The server is listening on port ${port}`)
// });

const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars')
const port = process.env.PORT || 5000;
const app = express();
const router = require('./src/routes/index')
const models = require('./src/models/index')
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user', router.usersRouter);
// app.use('/departement', router.departementsRouter);





app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
});
// this is for views/layouts main
// import express from 'express';
// import { engine } from 'express-handlebars';

// const app = express();

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.listen(3000);

// ? Create an instance
// import express from 'express';
// import { create } from 'express-handlebars';

// const app = express();
// const hbs = create({ /* config */ });

// Register `hbs.engine` with the Express app.
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// ...still have a reference to `hbs`, on which methods like `getPartials()`
// can be called.

// Template Cache
// app.enable('view cache');


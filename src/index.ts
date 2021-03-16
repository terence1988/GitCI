const app = require('./app');

app.listen(3001, () => {
	console.log('Server is on : 3001');
});

//The middleware is usually not too large but the controller must be large
//index.ts is generally used to setup the project

//controller might be large and the number of routs can be large

//We normally put index in src not in /root

var  Chequesession = require('./chequesession')
  
  , ErrorHandler = require('./error').errorHandler;

module.exports = exports = function(app, db) {

    var chequesession = new Chequesession(db);
	
  

    // Middleware to see if a user is logged in
    app.use(chequesession.isLoggedInMiddleware);

    // The main page of the blog
    // Login form
  
	//------------------------chequediscount top ----------------------------------//

	app.post('/cheque/adminregister', chequesession.adminregister);
	app.post('/cheque/handleLoginRequest', chequesession.handleLoginRequest);
	app.post('/cheque/adminLogout', chequesession.adminLogout);
	
	app.post('/cheque/isLoggedIn', chequesession.isLoggedIn);
	app.post('/cheque/getissuers', chequesession.getissuers);
	app.post('/cheque/getreceivers', chequesession.getreceivers);
	app.post('/cheque/getdiscounters', chequesession.getdiscounters);
	app.post('/cheque/getusertransactions', chequesession.getusertransactions);
	app.post('/cheque/gettransactions', chequesession.gettransactions);
	app.post('/cheque/getactivetransactions', chequesession.getactivetransactions);
	
	app.get('/cheque/isLoggedIn', chequesession.isLoggedIn);
	app.get('/cheque/getissuers', chequesession.getissuers);
	app.get('/cheque/getdiscounters', chequesession.getdiscounters);
	app.get('/cheque/getreceivers', chequesession.getreceivers);
	app.get('/cheque/getusertransactions', chequesession.getusertransactions);
	app.get('/cheque/gettransactions', chequesession.gettransactions);
	app.get('/cheque/getactivetransactions', chequesession.getactivetransactions);

	app.post('/cheque/createissuer', chequesession.createissuer);
	app.post('/cheque/creatediscounter', chequesession.creatediscounter);
	app.post('/cheque/createreceiver', chequesession.createreceiver);
	
	app.post('/cheque/getratingofuser', chequesession.getratingofuser);
	app.post('/cheque/chequedeposit', chequesession.chequedeposit);
	app.post('/cheque/setmaxdiscount', chequesession.setmaxdiscount);
	app.post('/cheque/setdiscount', chequesession.setdiscount);
	app.post('/cheque/setissuerrating', chequesession.setissuerrating);
	
	app.post('/cheque/etherenterrecord', chequesession.etherenterrecord);
	app.post('/cheque/ethergetrating', chequesession.ethergetrating);
	app.post('/cheque/ethersetrating', chequesession.ethersetrating);
	



	
	
	
	
	
	//------------------------chequediscount bottom ----------------------------------//
	
	
	
    // Error handling middleware
    app.use(ErrorHandler);
}

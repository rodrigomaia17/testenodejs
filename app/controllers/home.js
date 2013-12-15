var mongoose = require('mongoose'),
Article = mongoose.model('Article');

exports.index = function(req, res){
	Article.find(function(err, articles){
		if(err) throw new Error(err);
		res.render('home/index', {
			title: 'Generator-Express MVC',
			articles: articles
		});
	});
};

exports.login =  function(req, res) {
	var email = req.body.email;
	var nome = req.body.nome;
	if(email && nome) {
		var usuario = new Usuario(nome, email);
		req.session.usuario = usuario;
		res.redirect('/contatos');
	} else {
		res.redirect('/');
	}
};

exports.logout = function(req, res) {
 			req.session.destroy();
 			res.redirect('/');
 		};

// module.exports = function(app) {
// 	var Usuario = app.models.usuario;
// 	var HomeController = {
// 		index: function(req, res) {

// 			res.render('home/index');
// 		},
// 		login: function(req, res) {
// 			var email = req.body.email;
// 			var nome = req.body.nome;
// 			if(email && nome) {
// 				var usuario = new Usuario(nome, email);
// 				req.session.usuario = usuario;
// 				res.redirect('/contatos');
// 			} else {
// 				res.redirect('/');
// 			}
// 		},
// 		logout: function(req, res) {
// 			req.session.destroy();
// 			res.redirect('/');
// 		}
// 	};
// 	return HomeController;
// };

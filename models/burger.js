var orm = require('../config/orm.js');

var burgers = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res)
		});
	},
	create: function(cols, vals, cb){
		orm.create('burgers', vals, cols, function(res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.updateOne('burgers', objColVals, condition, function (res) {		
			cb(res);
		});
	}
};

module.exports = burgers;
 
var Sequelize = require('sequelize');
var sequelize = new Sequelize('webApplicationDB', 'adminWebApp', 'admin', {
  host: 'localhost',
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

   
});
 
var Graphyc  = sequelize.define('Graphyc', {
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  url: Sequelize.STRING,
  titre: Sequelize.STRING,
  pos: Sequelize.INTEGER
});

 

var Gouvernorat = sequelize.define('Gouvernorat', {

  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  liblle: Sequelize.STRING
});

var Commune = sequelize.define('Commune', {

 id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  liblle: Sequelize.STRING
});




var Authentification = sequelize.define('Authentification', {

  pseudo :{type: Sequelize.STRING, primaryKey: true },
  mdp: Sequelize.STRING
});
var User= sequelize.define('User', {

  nom :Sequelize.STRING,
  prenom :Sequelize.STRING,
  email :Sequelize.STRING,
  tel :Sequelize.STRING,
  cin :{type: Sequelize.STRING, primaryKey: true },
  image:Sequelize.STRING
}); 

User.hasMany(Authentification);


 Gouvernorat.hasMany(Commune);
 Commune.hasMany(Graphyc);
 Gouvernorat.hasMany(Graphyc);
 Commune.hasMany(Authentification);
Gouvernorat.hasMany(Authentification);
 

 sequelize.sync().then(function() {
  return Graphyc.create({

    url: 'janedoe',
    pos: 5,
   
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
}); 
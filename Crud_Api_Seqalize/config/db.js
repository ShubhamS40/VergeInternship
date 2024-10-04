const { Sequelize } = require('sequelize');



    const sequelize = new Sequelize('VergeInternship', 'postgres', 'ADMIN', {
        host: 'localhost',
        port:5432,
        dialect: 'postgres',
        logging:false
      });



module.exports={sequelize}
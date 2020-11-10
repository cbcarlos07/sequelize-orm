'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('tipo_usuario', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          comment: 'Id da tabela',
          autoIncrement: true,
         },
         nome: {
          type: Sequelize.STRING,          
          allowNull: false,
          comment: 'Nome tabela'
         }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('tipo_usuario');
    
  }
};

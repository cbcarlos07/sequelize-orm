'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('usuario', { 
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
         },
         tipo_usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: 'Codigo do tipo de usuario',
          references: { model: 'tipo_usuario', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('tipo_usuario');
    
  }
};

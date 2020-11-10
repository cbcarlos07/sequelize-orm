'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('usuario', [
        {
          nome: 'John Doe',
          tipo_usuario_id: 1
        },
        {
          nome: 'Mário',
          tipo_usuario_id: 2
        },
        {
          nome: 'Shirley',
          tipo_usuario_id: 2
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('usuario', null, {});
   
  }
};

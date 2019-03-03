'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('human', [{
      human_name: 'Floyd Council',
      human_phone: '(202) 224-5444',
      human_email: 'theFloydinPink@peidmontBlues.com',
      }, {
      human_name: 'Syd Barret',
      human_phone: '8015381029',
      human_email: 'theMadCapLaughs@wetherby.com',
    }]);
  
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
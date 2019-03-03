'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dog', [{
    client_name: 'Sammie Wilkonson',
    client_phone: '6144662166',
    client_email: 'sammieAteAFingerOnce@whatsmyemailagain.com',
    home_address: '555 Main St, Salt Lake City, UT 84111',
    dog_name: 'Roxy',
    dog_weight: '130',
    dog_breed: 'Mastiff',
    dog_age: '8',
    vet_name: 'Red Butte Veterinary Care',
    vet_phoneNumber: '(801) 583-1340'
    }, {
      client_name: 'Dawn Beginingotime',
      client_phone: '3123534952',
      client_email: 'iSat15alarmsAndStillWokeUpLate@comfortRestInn.com',
      home_address: '2393 S 800 W, Woods Cross, UT 84087',
      dog_name: 'Yishenah',
      dog_weight: '30',
      dog_breed: 'Bulldog',
      dog_age: '6',
      vet_name: 'Animal Crackers Veterinary Hospital',
      vet_phoneNumber: '8018100360'
    }, {
      client_name: 'Earl Grey',   
      client_phone: '+442074999000',
      client_email: 'iLikeMySugarWithTeaAndCram@whodrinksLipton.com',
      home_address: '161 W 600 S, Salt Lake City, UT 84101',
      dog_name: 'Chipped Cup',
      dog_weight: '50',
      dog_breed: 'English Terrier',
      dog_age: '2',
      vet_name: 'Red Butte Veterinary Care',
      vet_phoneNumber: '8015831340'


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


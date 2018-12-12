'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Flats', [{
        title: 'Lakás1',
        price: 15000000,
        floorArea: 77,
        country: 'Hungary',
        zip: 7777,
        city: 'Szeged',
        street: 'Elso'
      },
      {
        title: 'Lakás2',
        price: 16000000,
        floorArea: 87,
        country: 'Hungary',
        zip: 7777,
        city: 'Szeged',
        street: 'Masodik'
      }, {
        title: 'Lakás3',
        price: 17000000,
        floorArea: 97,
        country: 'Hungary',
        zip: 7777,
        city: 'Szeged',
        street: 'Harmadik'
      }], {});
    
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

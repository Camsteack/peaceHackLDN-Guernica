/**
* Visitor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'guernicaMongodbServer',
  tableName: 'visitors',

  attributes: {
  	firstName : 'string',
  	lastName : 'string',
  	email : 'string',
  	country : 'string'
  }
};


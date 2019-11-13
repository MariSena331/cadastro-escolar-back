'use strict'

const Model = use('Model')

class Aluno extends Model {
  disciplina () {
    return this.belongsTo('App/Models/Disciplina')
  }
}

module.exports = Aluno

'use strict'

const Model = use('Model')

class Disciplina extends Model {
  professor () {
    return this.belongsTo('App/Models/Professor')
  }

  aluno () {
    return this.hasMany('App/Models/Aluno')
  }
}

module.exports = Disciplina

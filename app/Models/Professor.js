'use strict'

const Model = use('Model')

class Professor extends Model {
  disciplina () {
    return this.hasMany('App/Models/Disciplina')
  }
}

module.exports = Professor

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.integer('disciplina_id').unsigned().references('id').inTable('disciplinas')
      table.string('nome', 30)
      table.string('rgm', 8).unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema

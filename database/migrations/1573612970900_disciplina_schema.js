'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DisciplinaSchema extends Schema {
  up () {
    this.create('disciplinas', (table) => {
      table.increments()
      table.integer('professor_id').unsigned().references('id').inTable('professors')
      table.string('semestre')
      table.string('nome_disciplina')
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('disciplinas')
  }
}

module.exports = DisciplinaSchema

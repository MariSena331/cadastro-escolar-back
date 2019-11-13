'use strict'

const Professor = use ('App/Models/Professor')

class ProfessorController {
  async store ({ request }) {
    const data = request.only(['nome', 'rgm'])

    const professor = await Professor.create(data)

    return professor
  }

  async index ({ request, response, view }) {
    const professores = await Professor.query()
    .with('disciplina')
    .fetch()

    return professores
  }
}

module.exports = ProfessorController

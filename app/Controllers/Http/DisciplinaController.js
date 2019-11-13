'use strict'

const Disciplina = use ('App/Models/Disciplina')

class DisciplinaController {
  async index ({ request, response, view }) {
    const disciplinas = await Disciplina
    .query()
    .with('professor')
    .fetch()

    return disciplinas
  }

  async store ({ request }) {
    const data = request.only(['professor_id', 'semestre', 'nome_disciplina', 'descricao'])

    const disciplina = await Disciplina.create(data)

    return disciplina
  }
}

module.exports = DisciplinaController

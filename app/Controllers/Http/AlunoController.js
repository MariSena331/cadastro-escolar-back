'use strict'

const Aluno = use ('App/Models/Aluno')

class AlunoController {
  async index ({ request, response, view }) {
    const alunos = await Aluno
    .query()
    .with('disciplina')
    .fetch()

    return alunos
  }

  async store ({ request }) {
    const data = request.only(['disciplina_id', 'nome', 'rgm'])

    const aluno = await Aluno.create(data)

    return aluno
  }
}

module.exports = AlunoController

'use strict'

const Route = use('Route')

Route.post('disciplinas', 'DisciplinaController.store')
Route.get('disciplinas', 'DisciplinaController.index')

Route.post('professores', 'ProfessorController.store')
Route.get('professores', 'ProfessorController.index')

Route.post('alunos', 'AlunoController.store')
Route.get('alunos', 'AlunoController.index')
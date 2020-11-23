import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {NotasEstudiante} from '../models';
import {NotasEstudianteRepository} from '../repositories';

export class NotasEstudianteController {
  constructor(
    @repository(NotasEstudianteRepository)
    public notasEstudianteRepository : NotasEstudianteRepository,
  ) {}

  @post('/notas-estudiantes', {
    responses: {
      '200': {
        description: 'NotasEstudiante model instance',
        content: {'application/json': {schema: getModelSchemaRef(NotasEstudiante)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotasEstudiante, {
            title: 'NewNotasEstudiante',
            
          }),
        },
      },
    })
    notasEstudiante: NotasEstudiante,
  ): Promise<NotasEstudiante> {
    return this.notasEstudianteRepository.create(notasEstudiante);
  }

  @get('/notas-estudiantes/count', {
    responses: {
      '200': {
        description: 'NotasEstudiante model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(NotasEstudiante) where?: Where<NotasEstudiante>,
  ): Promise<Count> {
    return this.notasEstudianteRepository.count(where);
  }

  @get('/notas-estudiantes', {
    responses: {
      '200': {
        description: 'Array of NotasEstudiante model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(NotasEstudiante, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(NotasEstudiante) filter?: Filter<NotasEstudiante>,
  ): Promise<NotasEstudiante[]> {
    return this.notasEstudianteRepository.find(filter);
  }

  @patch('/notas-estudiantes', {
    responses: {
      '200': {
        description: 'NotasEstudiante PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotasEstudiante, {partial: true}),
        },
      },
    })
    notasEstudiante: NotasEstudiante,
    @param.where(NotasEstudiante) where?: Where<NotasEstudiante>,
  ): Promise<Count> {
    return this.notasEstudianteRepository.updateAll(notasEstudiante, where);
  }

  @get('/notas-estudiantes/{id}', {
    responses: {
      '200': {
        description: 'NotasEstudiante model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(NotasEstudiante, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(NotasEstudiante, {exclude: 'where'}) filter?: FilterExcludingWhere<NotasEstudiante>
  ): Promise<NotasEstudiante> {
    return this.notasEstudianteRepository.findById(id, filter);
  }

  @patch('/notas-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'NotasEstudiante PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotasEstudiante, {partial: true}),
        },
      },
    })
    notasEstudiante: NotasEstudiante,
  ): Promise<void> {
    await this.notasEstudianteRepository.updateById(id, notasEstudiante);
  }

  @put('/notas-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'NotasEstudiante PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() notasEstudiante: NotasEstudiante,
  ): Promise<void> {
    await this.notasEstudianteRepository.replaceById(id, notasEstudiante);
  }

  @del('/notas-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'NotasEstudiante DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.notasEstudianteRepository.deleteById(id);
  }
}

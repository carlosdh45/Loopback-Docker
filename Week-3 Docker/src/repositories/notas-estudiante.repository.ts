import {DefaultCrudRepository} from '@loopback/repository';
import {NotasEstudiante, NotasEstudianteRelations} from '../models';
import {ConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NotasEstudianteRepository extends DefaultCrudRepository<
  NotasEstudiante,
  typeof NotasEstudiante.prototype.id,
  NotasEstudianteRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(NotasEstudiante, dataSource);
  }
}

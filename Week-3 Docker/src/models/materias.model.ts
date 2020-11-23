import {Entity, model, property} from '@loopback/repository';

@model()
export class Materias extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;


  constructor(data?: Partial<Materias>) {
    super(data);
  }
}

export interface MateriasRelations {
  // describe navigational properties here
}

export type MateriasWithRelations = Materias & MateriasRelations;

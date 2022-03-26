export default class Task {
  id: number
  description: string
  urgency: number
  importance: number

  constructor(
    id: number,
    description: string,
    urgency: number,
    importance: number
  ) {
    this.id = id
    this.description = description
    this.urgency = urgency
    this.importance = importance
  }
}

export enum TaskPropsEnum {
  ID = 'id',
  DESCRIPTION = 'description',
  URGENCY = 'urgency',
  IMPORTANCE = 'importance',
}

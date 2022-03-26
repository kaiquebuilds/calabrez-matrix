export default class Task {
  id: number
  description: string
  urgency: number
  importance: number
}

export enum TaskPropsEnum {
  ID = 'id',
  DESCRIPTION = 'description',
  URGENCY = 'urgency',
  IMPORTANCE = 'importance',
}

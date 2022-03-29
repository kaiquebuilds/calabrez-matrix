export default class Task {
  id: number
  description: string
  urgency: number
  importance: number
  priority?: number

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

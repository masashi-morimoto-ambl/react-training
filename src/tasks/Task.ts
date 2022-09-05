export class Task {
  id: number | undefined
  name = ''
  deadLine: Date = new Date()
  isDone = false

  // eslint-disable-next-line
  constructor(initializer?: any) {
    if (!initializer) return
    if (initializer.id) this.id = initializer.id
    if (initializer.name) this.name = initializer.name
    if (initializer.deadLine) this.deadLine = initializer.deadLine
    if (initializer.isDone) this.isDone = initializer.isDone
  }
}

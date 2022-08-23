export const start = () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line
    const { worker } = require('./browser')
    worker.start()
  }
}

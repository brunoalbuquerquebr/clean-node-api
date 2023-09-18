module.exports = class UnauthorizedError extends Error {
  constructor (paramName) {
    super('Internal Server Error')
    this.name = 'ServerError'
  }
}

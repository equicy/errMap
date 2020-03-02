// import { Message } from 'element-ui'

class ErrorMap {
  constructor(status = 'default', context = 'default') {
    this.status = status
    this.context = context
    this.data = require('./index.json')
  }

  getError() {
    const status = this.data && this.data[this.status]
    const context = status && status[this.context]
    return context
  }
}

const getErrorMessage = function(status = 'default', context = 'default') {
  const error = new ErrorMap(status, context)
  const message = error.getError()
  return message
}

export default getErrorMessage

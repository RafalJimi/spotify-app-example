exports.registerSchema = {
    schema: {
    body: {
      email: { type: 'string' },
      password: { type: 'string' },
      nickname: { type: 'string' },
      birth_date: { type: 'string' },
      gender: { type: 'string' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
        }
      }
    }
  }
}
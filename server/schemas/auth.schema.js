exports.registerSchema = {
  schema: {
    body: {
      email: { type: 'string' },
      password: { type: 'string' },
      nickname: { type: 'string' },
      birth_date: { type: 'string' },
      gender: { type: 'string' }
    },
  }
}

exports.loginSchema = {
  schema: {
    body: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
  }
}
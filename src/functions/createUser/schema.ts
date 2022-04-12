export default {
  type: "object",
  properties: {
    name: { type: 'string' },
    cpf: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['name', 'cpf', 'email', 'password']
} as const;
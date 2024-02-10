import antfu from '@antfu/eslint-config'

export default antfu({

  stylistic: {
    indent: 2,
  }, 
  typescript: true,
  vue: true,
  json: true,
  jsonc: true,
  yml: false,

  rules: {

    'node/prefer-global/process': ['error', 'always'],
  },

})

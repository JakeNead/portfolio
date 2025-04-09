import globals from 'globals'
import pluginJs from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    name: 'prettier',
    rules: prettier.rules,
  },
]

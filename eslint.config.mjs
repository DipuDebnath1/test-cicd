
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Node.js globals
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        NodeJS: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        // Express/Common types
        Express: 'readonly',
        io: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Disable conflicting rules
      'no-unused-vars': 'warn', // Handled by TypeScript
      'no-undef': 'error', // TypeScript handles this
      
      // TypeScript rules
      // '@typescript-eslint/no-unused-vars': [
      //   'warn',
      //   {
      //     argsIgnorePattern: '^_|^next|^req|^res|^err|^error',
      //     varsIgnorePattern: '^_',
      //     caughtErrorsIgnorePattern: '^_',
      //   },
      // ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn', // Allow console in backend
      'prefer-const': 'warn',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '**/*.js',
      '**/*.mjs',
    ],
  },
];
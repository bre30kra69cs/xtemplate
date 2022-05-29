import {Template} from './types';

export const templatePrettier = (): Template => {
  return {
    fileName: '.prettierrc',
    content: `
    {
      "arrowParens": "always",
      "useTabs": false,
      "tabWidth": 2,
      "trailingComma": "all",
      "singleQuote": true,
      "semi": true,
      "printWidth": 100,
      "bracketSpacing": false,
      "endOfLine": "lf"
    }
    `,
  };
};

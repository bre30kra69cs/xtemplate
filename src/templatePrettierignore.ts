import {Template} from './types';

export const templatePrettierignore = (): Template => {
  return {
    fileName: '.prettierignore',
    content: `
      .DB_store
      node_modules
      build
      types
    `,
  };
};

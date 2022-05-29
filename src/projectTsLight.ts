import {templatePrettier} from './templatePrettier';
import {templatePrettierignore} from './templatePrettierignore';
import {templateTsconfig} from './templateTsconfig';
import {Project} from './types';

export const projectTsLight = (): Project => {
  return {
    name: 'ts-light',
    templates: [templatePrettier(), templatePrettierignore(), templateTsconfig()],
  };
};

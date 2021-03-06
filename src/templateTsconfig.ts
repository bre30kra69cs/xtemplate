import {Template} from './types';

export const templateTsconfig = (): Template => {
  return {
    fileName: 'tsconfig.json',
    content: `
    {
      "compilerOptions": {
        "target": "ES6",
        "lib": ["ESNext"],
        "outDir": "build",
        "module": "CommonJS",
        "moduleResolution": "Node",
        "esModuleInterop": true,
        "incremental": true,
        "isolatedModules": true,
        "strict": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "declaration": true,
        "declarationDir": "types",
        "allowJs": false
      },
      "exclude": ["node_modules"],
      "include": ["src"]
    }
    `,
  };
};

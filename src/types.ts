export type Template = {
  fileName: string;
  content: string;
};

export type Project = {
  name: 'string';
  templates: Template[];
};

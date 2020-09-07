interface ITemplateVariables {
  [key: string]: string | number; // Não preciso definir o nome da chave, pode ser qalquer nome
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}

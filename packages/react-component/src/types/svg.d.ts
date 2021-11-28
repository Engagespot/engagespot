declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

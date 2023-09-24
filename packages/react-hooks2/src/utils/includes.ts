type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

export type Includes<T extends readonly any[], U> = keyof {
  [P in keyof T as P extends keyof typeof Array.prototype
    ? never
    : Equal<T[P], U> extends true
    ? P
    : never]: 1;
} extends never
  ? false
  : true;

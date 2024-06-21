declare module 'lodash' {
  export function orderBy<T>(
    collection: T[],
    iteratees: Array<keyof T | ((item: T) => any)>,
    orders: Array<"asc" | "desc">
  ): T[];
}

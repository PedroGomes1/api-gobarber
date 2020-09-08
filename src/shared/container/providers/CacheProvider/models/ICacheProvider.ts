export default interface ICacheProvider {
  save(key: string, value: any): Promise<void>;
  recover<T>(key: string): Promise<T | null>; // <T> seria o retorno, e os parênteses são o que a função recebe
  invalidate(key: string): Promise<void>;
  invalidatePrefix(key: string): Promise<void>;
}

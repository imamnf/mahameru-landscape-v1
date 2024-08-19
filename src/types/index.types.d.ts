export interface DState<T = Array<Record<string, unknown>>> {
  error: boolean;
  loading: boolean;
  show: boolean;
  success: boolean;
  data: T;
}

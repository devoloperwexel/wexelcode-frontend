export interface Response<T> {
  data: T;
  statusCode: number;
  message: string;
}

export interface PaginatedResult<T> {
  results: Array<T>;
  page: number;
  limit: number;
  totalPage: number;
  totalResult: number;
}

export type PaginatedResponse<T> = Response<PaginatedResult<T>>;

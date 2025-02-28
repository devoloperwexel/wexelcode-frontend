export interface Response<T> {
  data: T;
  statusCode: number;
  message: string;
}

export interface PaginatedResult<T> {
  results: Array<T>;
  page: number;
  limit: number;
  totalPages: number;
  totalResult: number;
}

export type BaseResponse<T> = Response<PaginatedResult<T>>;

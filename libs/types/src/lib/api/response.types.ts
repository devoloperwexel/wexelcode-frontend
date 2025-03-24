export interface BaseResponse<T> {
  data: T;
  statusCode: number;
  message: string;
}

export interface PaginatedResult<T> {
  results: Array<T>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface Timestamps {
  createdAt: string;
  updatedAt: string;
}

export type PaginatedResponse<T> = BaseResponse<PaginatedResult<T>>;

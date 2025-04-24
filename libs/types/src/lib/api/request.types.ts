export interface BaseRequest {
  page?: number;
  limit?: number;
  sortBy?: string;
  includes?: string[];
}

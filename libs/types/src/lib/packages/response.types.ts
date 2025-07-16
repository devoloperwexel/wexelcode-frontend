import { BaseResponse, PaginatedResponse } from '../..';
import { Package } from '.';

export type GetPackageResponse = BaseResponse<Package>;

export type GetPackagesResponse = PaginatedResponse<Package>;

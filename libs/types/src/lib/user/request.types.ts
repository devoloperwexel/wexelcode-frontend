import { User } from '.';

export interface UpdateUserRequest extends Partial<User> {
  userId: string;
}

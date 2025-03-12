export interface User {
  id: string;
  firstName: string;
  lastName: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  email: string;
  profilePictureUrl: string;
  birthDay: string;
  address: string;
  city: string;
  country: string;
  mobile: string;
  zipCode: number;
  languages: string[];
  gender: 'MALE' | 'FEMALE';
  createdAt: string;
  updatedAt: string;
}

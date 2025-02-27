export interface User {
  id: string;
  name: string;
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
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  createdAt: string;
  updatedAt: string;
}

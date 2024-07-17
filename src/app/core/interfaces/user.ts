export interface User {
  name: string;
  birthdayDate: Date;
  description: string;
}

export type UserCollection = Array<User>;

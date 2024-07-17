import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserCollection } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private data = [
    {
      id: 1,
      name: 'John Doe',
      birthdayDate: new Date('1990-01-01'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      name: 'Jane Doe',
      birthdayDate: new Date('1995-01-01'),
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      name: 'John Smith',
      birthdayDate: new Date('1992-01-01'),
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 4,
      name: 'Jane Smith',
      birthdayDate: new Date('1997-01-01'),
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 5,
      name: 'John Johnson',
      birthdayDate: new Date('1994-01-01'),
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 6,
      name: 'Jane Johnson',
      birthdayDate: new Date('1999-01-01'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 7,
      name: 'John Brown',
      birthdayDate: new Date('1991-01-01'),
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 8,
      name: 'Jane Brown',
      birthdayDate: new Date('1996-01-01'),
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 9,
      name: 'John White',
      birthdayDate: new Date('1993-01-01'),
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 10,
      name: 'Jane White',
      birthdayDate: new Date('1998-01-01'),
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  constructor() { }

  findAll(): Observable<UserCollection> {
    return of(this.data.slice(0, 5));
  }

  findById(id: number): Observable<User|undefined> {
    return of(this.data.find(user => user.id === id));
  }
}

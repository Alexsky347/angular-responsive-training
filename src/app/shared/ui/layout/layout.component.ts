import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserCollection } from 'src/app/core/interfaces/user';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  users$!: Observable<UserCollection>;

  constructor(
    private apiService: ApiService
  ) {
    this.users$ = this.findAll();
  }

  findAll(): Observable<UserCollection> {
    return this.apiService.findAll();
  }
}

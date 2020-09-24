import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  testing: number;
  db: any;

  constructor(private databaseService: DatabaseService) {
    this.db = this.databaseService.db;
  }

  onLoginButtonClick() {
    console.log('hellow');
  }
}

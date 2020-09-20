import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb/dist/pouchdb';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  db: any;
  remote: string = 'http://127.0.0.1:5984/inventory';

  constructor() {
    this.db = new PouchDB('inventory');

    let options = {
      live: true,
      retry: true,
    };

    this.db.sync(this.remote, options);
  }
}

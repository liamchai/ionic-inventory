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

  userSeeder() {
    this.db
      .bulkDocs([
        { _id: '1337', username: 'h4ck3r' },
        { _id: '1234', username: 'Guest' },
        { _id: '3306', username: 'Owner' },
      ])
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
<<<<<<< Updated upstream
  private _storage: Storage | null = null;
=======
  private storage: Storage | null = null;
>>>>>>> Stashed changes

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    this._storage.get(key);
  }

  public remove(key: string) {
    this._storage.remove(key);
  }

  public clear() {
    this._storage.clear();
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storage: Storage = new Storage();

  constructor(private store: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.store.create();
    this.storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: string | number) {
    this.store?.set(key, value);
  }

  public get(key: string) {
    this.store.get(key);
  }

  public remove(key: string) {
    this.store.remove(key);
  }

  public clear() {
    this.store.clear();
  }
}

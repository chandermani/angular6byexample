import { CoreModule } from './core.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {
  getItem<T>(key: string): T {
    if (localStorage[key]) {
      return <T>JSON.parse(localStorage[key]);
    }
    return null;
  }

  setItem(key: string, item: any) {
    localStorage[key] = JSON.stringify(item);
  }
}

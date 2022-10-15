import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValuesService {
  value: any = '';
  constructor() {}

  getValues() {
    const Val = new Observable((observer) => {
      observer.next(this.value);
    });
    return Val;
  }
  setValues(Value: string) {
    this.value = Value;
  }
}

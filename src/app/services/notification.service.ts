import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public commentFetchSubject = new Subject<number>();
  public commentLoadedSubject = new Subject();

}

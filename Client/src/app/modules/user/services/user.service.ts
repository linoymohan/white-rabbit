import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private subject = new BehaviorSubject<any>(null);

  public url='http://localhost:3000/user/'

  postUser(data:any){
    return this.http.post<any>(this.url, data).toPromise();
  }

  getUserList(){
    return this.http.get<any>(this.url).toPromise();
  }

  getUserDetails(email:any){
    return this.http.get<any>(this.url+'/'+email).toPromise();
  }

sendMessage(message: any){
    this.subject.next({ text: message });
}

getMessage(): Observable<any> {
    return this.subject.asObservable();
}
}

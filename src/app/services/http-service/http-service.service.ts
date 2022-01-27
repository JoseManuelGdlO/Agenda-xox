import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(public http: HttpClient) {
  }

  getMethod(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  deleteMethod(url: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  postMethod(url: string, body = {}) {
    return new Promise((resolve, reject) => {
      this.http.post(url, body).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }
}

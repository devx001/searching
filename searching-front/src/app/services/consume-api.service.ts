import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  url = "http://localhost:8080/api/";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'

  });

  constructor(private http: HttpClient) { }

  addName(name: string) {
    const obj = {
      "text": name
    }
    console.log(JSON.stringify(obj));

    return this.http.post(this.url + "add", JSON.stringify(obj), { headers: this.headers }).subscribe(
      data => {
        console.log("Created data");
      });
  }

  findNames(text: string) {
    return this.http.get(this.url + `find/${text}`, { headers: this.headers });
  }

  getHistory() {
    return this.http.get(this.url + "history", { headers: this.headers });
  }



}

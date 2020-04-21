import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private data: any = [];



  url = `https://www.fruityvice.com/api/fruit/all`;

  constructor(private http: HttpClient) {  }

  getFruitData(): Observable<any>{

    this.http.get(this.url).subscribe((res) => {

      this.data = res;
    });
    return this.data;
  }
}

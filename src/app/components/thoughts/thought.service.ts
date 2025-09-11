import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Thougth } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts'

  constructor(private http: HttpClient) { }

  // CRUD goes here


  getAll(page: number): Observable<Thougth[]> {
    const limit = 6;
    const start = (page - 1) * limit;
    const end = start + limit;

    let params = new HttpParams()
      .set("_start", start.toString())
      .set("_end", end.toString());

    return this.http.get<Thougth[]>(this.API, { params });
  }


  create(thought: Thougth): Observable<Thougth> {
    return this.http.post<Thougth>(this.API, thought);
  }


  editThought(thought: Thougth): Observable<Thougth> {
    const url = `${this.API}/${thought.id}/`;
    return this.http.put<Thougth>(url, thought);
  }


  deleteThought(id: number): Observable<Thougth> {
    const url = `${this.API}/${id}/`;
    return this.http.delete<Thougth>(url);
  }


  getThoughtById(id: number): Observable<Thougth> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thougth>(url);
  }


}

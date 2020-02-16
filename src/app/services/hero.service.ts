import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class HeroService {
  private token = "185566636027468";
  private url = `/api/${this.token}`;
  constructor(private http: HttpClient) {}

  getHeroes(name) {
    return this.http.get(`${this.url}/search/${name}`);
  }

  getDetailInfoHero(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PaisesService {
  constructor(private http: HttpClient) {}

  url = "https://restcountries.eu/rest/v2/lang/es";

  getPaises() {
    return this.http.get(this.url);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

interface Envronment {
  apiURL: string;
  mode: string;
}

@Injectable({
  providedIn: 'root'
})
export class Env2Service {

  private readonly ENV_URL = 'assets/envronments.json';
  public Envronment$: Observable<Envronment>;

  constructor(private http: HttpClient) {
  }

  public loadEnvronments(): any {
    if (!this.Envronment$) {
      this.Envronment$ = this.http.get<Envronment>(this.ENV_URL).pipe(
        shareReplay(1)
      );
    }
    return this.Envronment$;
  }

}

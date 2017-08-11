import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HelloWorldService {
  private url = 'api/helloworld/';

  constructor(private http: Http) { }

  getMessage(): Promise<string> {
    return this.http
      .get(this.url)
      .toPromise()
      .then((response) => {
        return response.json().message as string;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
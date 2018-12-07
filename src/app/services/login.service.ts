import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Headers } from '@angular/http'

@Injectable()
export class LoginService {
    private url: string = `http://localhost:8000/api-token-auth/`;
    constructor(private http: Http) {
    }

    errorHandler(error: any): void {
        console.log(error)
    }

    login(usuario: any): Observable<any> {
        console.log(JSON.stringify(usuario))
        var cabecalho = new Headers();
        cabecalho.append('Content-Type', 'application/json');
        return this.http
            .post(this.url, JSON.stringify(usuario), { headers: cabecalho })
            .map(response => response.json())
            .catch((error: any) => Observable.throw(this.errorHandler(error)))
    }


}
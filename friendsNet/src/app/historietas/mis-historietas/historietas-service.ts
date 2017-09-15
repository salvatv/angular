import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Historieta } from '../historieta/historieta-model';
import { Person } from '../historieta/person-model';

@Injectable()
export class HistorietasService {
    static updateHistorieta(arg0: any): any {
        throw new Error('Method not implemented.');
    }

    constructor(private http: Http) { }

    getHistorietas(): Observable<Historieta[]> {
        return this.http.get('http://localhost:3000/posts?person.id=1')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    getPerson(): Observable<Person> {
        return this.http.get('http://localhost:3000/persons/1')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    addHistorieta(historieta: Historieta): Observable<Historieta> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`http://localhost:3000/posts`, historieta, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    // updateHistorieta(historieta: Historieta): Observable<Historieta[]> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });

    //     return this.http.put(`http://localhost:3000/posts/${item['id']}`, item, options)
    //         .map((res: Response) => res.json())
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }

}


import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Historieta } from '../historieta/historieta-model';
import { Person } from '../historieta/person-model';
import { Relation } from './relation-model';

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

    getFriends(): Observable<Person[]> {
        return this.http.get('http://localhost:3000/relations?requester.id=0')
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

    getRelation(coleguillaId: number, myId: number): Observable<Relation> {
        return this.http.get(`http://localhost:3000/relations?requester.id=${myId}&requested.id=${coleguillaId}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    deleteRelation(id: number) {
        console.log('oi');
        console.log(id);
        console.log(`http://localhost:3000/relations/${id}`);
        return this.http.delete(`http://localhost:3000/relations/${id}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));

    }

    // updateHistorieta(historieta: Historieta): Observable<Historieta[]> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });

    //     return this.http.put(`http://localhost:3000/posts/${item['id']}`, item, options)
    //         .map((res: Response) => res.json())
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }

}


//import { Items } from "./mocks";
import { Item } from "./item.model";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ItemListService {
    static updateItem(arg0: any): any {
        throw new Error("Method not implemented.");
    }

    constructor(private http: Http){ }

    getItemList(): Observable<Item[]>{
        return this.http.get('http://localhost:3000/item-list')
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'Server Error') );
    }

updateItem(item:Item): Observable<Item[]>{
    let headers = new Headers({ 'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.put(`http://localhost:3000/item-list/${item['id']}`, item, options)
    .map( (res: Response) => res.json() )
    .catch( (error:any) => Observable.throw(error.json().error || 'Server error') );
}

}




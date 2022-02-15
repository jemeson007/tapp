import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hf }  from './h-f'; 
// import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HFiService{
    hhk : Hf [] = [] ;
    // private hfUrl = 'api/hf';

    constructor(
        // private http: HttpClient
        ){ }
    // httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //   };

      
    addToHfi( hh : Hf){
        this.hhk.push(hh);
    }

    // addToHffi( hh : Hf): Observable<Hf>{
    //     this.hi.push(hh);
    //     return this.http.post<Hf >(this.hfUrl, hh, this.httpOptions);
    // }

    // getHf(): Observable<Hf []>{
    //     return this.http.get<Hf []>(this.hfUrl);
    // }

    getHfis(){
        return this.hhk;
    } 

    clear(){
        this.hhk = null;
        return this.hhk;
    }


}
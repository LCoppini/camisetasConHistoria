import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Camiseta } from './camisetas-list/Camiseta';

const URL = 'https://6a5b5f9664f700df5bd6d9ba.mockapi.io/camisetas/camiseta';


export class CamisetasDataService {

    constructor(private http: HttpClient) {

   }
    public getAll():Observable<Camiseta[]>{
        return this.http.get<Camiseta[]>(URL)
            .pipe(
                tap( (camisetas: Camiseta[]) => camisetas.forEach(camiseta => camiseta.quantity=0))
            );
    }
}

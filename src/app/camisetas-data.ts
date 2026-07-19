import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Camiseta } from './camisetas-list/Camiseta';
import { Injectable} from '@angular/core';

const URL = 'https://6a5b5f9664f700df5bd6d9ba.mockapi.io/camisetas/camiseta';

@Injectable({
    providedIn: 'root'
})

export class CamisetasDataService {

    constructor(private http: HttpClient) {

   }
    public getAll():Observable<Camiseta[]>{
        console.log('🚀 Iniciando petición HTTP a MockAPI...');
        return this.http.get<Camiseta[]>(URL)
            .pipe(
                tap( (camisetas: Camiseta[]) => camisetas.forEach(camiseta => camiseta.quantity=0))
            );
    }
}

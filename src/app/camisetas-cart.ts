import { Injectable} from '@angular/core';
import { Camiseta } from './camisetas-list/Camiseta';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root',
})

export class CamisetasCartService{
    //logica agregar al carrito
    private _cartList: Camiseta[] = [];
    
    cartList: BehaviorSubject<Camiseta[]> = new BehaviorSubject(this._cartList);

    constructor(){}

    addToCart(camiseta: Camiseta){
        
        let item: Camiseta | undefined = this._cartList.find((v1) => v1.team == camiseta.team);
            if(!item){
            this._cartList.push({... camiseta});
            }else{
                item.quantity += camiseta.quantity;
            }
            this.cartList.next(this._cartList);
    }

    clearCart(): void {
        this._cartList = [];
        this.cartList.next(this._cartList);
    }

    

}


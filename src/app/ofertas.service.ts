import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

    constructor(private http: Http){}

    

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição Http
        //retornar uma promise Oferta[] cujo destaque seja true
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json())
        
    }

    public getofertasPorCategoria(categoria: string) : Promise<Oferta[]>{
         //retornar uma promise Oferta[] cujo conforme categoria vinda por parametro
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    
}
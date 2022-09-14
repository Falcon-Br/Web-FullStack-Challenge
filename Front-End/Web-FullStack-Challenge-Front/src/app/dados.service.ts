import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IDados } from './IDados';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<IDados[]>(`${API_PATH}dispositivos`).toPromise()
  }

  obterPorId(id: number){
    return this.httpClient.get<IDados>(`${API_PATH}dispositivos/${id}`).toPromise()
  }

  adicionar(dados: IDados){
    console.log(dados)
    return this.httpClient.post<IDados>(`${API_PATH}dispositivo`, dados).toPromise()
  }

  atualizar(dado: IDados){
    console.log(dado)
    return this.httpClient.put<IDados>(`${API_PATH}dispositivo/${dado.id}`, dado).toPromise()
  }

  delete(dadoId: number){
    return this.httpClient.delete(`${API_PATH}dispositivo/${dadoId}`).toPromise()
  }

}

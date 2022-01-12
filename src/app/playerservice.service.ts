import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { retry, catchError } from 'rxjs/operators';
import { Avulsodto, Playerdto } from './playerdto';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  url = 'http://localhost:3000'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os Jogadores
  getMensalistas(): Observable<Playerdto[]> {
    return this.httpClient.get<Playerdto[]>(this.url + "/mensalistas")      
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getAvulsos(): Observable<Avulsodto[]> {
    return this.httpClient.get<Avulsodto[]>(this.url + "/avulsos")      
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}

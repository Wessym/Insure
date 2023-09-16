import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RejectsService {
  rejectsUrl: string = "http://localhost:3000/rejects"
  constructor(private http: HttpClient) { }



  addRejection(obj) {
    let formData = new FormData();
    formData.append('cause', obj.cause);
    formData.append('idDemande', obj.idDemande);
    return this.http.post<{ message: string, error: any, err: any }>(`${this.rejectsUrl}/add-rejection`, formData);
  }


  getRejectionByDemandeId(idDemande) {
    return this.http.get<{ rejection: any }>(`${this.rejectsUrl}/getRejectionByDemandId/${idDemande}`);
  }




}

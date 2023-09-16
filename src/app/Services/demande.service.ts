import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  demandeUrl: string = "http://localhost:3000/demandes"
  constructor(private http: HttpClient) { }


  addDemande(obj) {
    let formData = new FormData();
    formData.append('type', obj.type);
    formData.append('prestataire', obj.prestataire);
    formData.append('montant', obj.montant);
    formData.append('justif', obj.justif);
    formData.append('idUser', obj.idUser);
    return this.http.post<{ message: string, error: any, err: any }>(`${this.demandeUrl}/add-demande`, formData);
  }



  getAllDemandesWithUsers() {
    return this.http.get<{ AllDemandesWithUser: any }>(`${this.demandeUrl}/getAllDemandesWithUsers`);
  }
  
  
  
  getDemandeByUserId(idUser) {
    return this.http.get<{ demandes: any }>(`${this.demandeUrl}/getDemandeByUserId/${idUser}`);
  }





  confirmDemande(idDemande,noth) {
    return this.http.put<{ message: any }>(`${this.demandeUrl}/confirmDemande/${idDemande}`,noth);
  }


  rejectDemande(idDemande,noth) {
    return this.http.put<{ message: any }>(`${this.demandeUrl}/rejectDemande/${idDemande}`,noth);
  }
















}

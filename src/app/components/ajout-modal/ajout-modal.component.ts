import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-ajout-modal',
  templateUrl: './ajout-modal.component.html',
  styleUrls: ['./ajout-modal.component.css']
})
export class AjoutModalComponent implements OnInit {

  demandeForm: FormGroup;

  connectedUser: any;

  errorMsg: string;

  path: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private demandeService: DemandeService) { }

  ngOnInit() {

    this.path = this.router.url;
    console.log("Here path from compo ", this.path);

    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser')); 

    this.demandeForm = this.formBuilder.group({
      type: ["", [Validators.required]],
      prestataire: ["", [Validators.required]],
      montant: ["", [Validators.required]],
      justif: [""],
    });

  }





  ajoutDemande() {
    
    var idUser = this.connectedUser._id;
    this.demandeForm.value.idUser = idUser;

    this.demandeService.addDemande(this.demandeForm.value).subscribe(
      (response) => {
        console.log("here response after add annonce", response);
        if (response.message == "demande saved with success") {
          this.router.navigate(['assure-profile']) ;
        } else {
          this.errorMsg = "Something went wrong with your annonce try again later" ;
        }
      }
    )

  }











}

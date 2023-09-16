import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RejectsService } from 'src/app/Services/rejects.service';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit {

  idDemande: any;
  connectedUser: any;
  demandes: any;
  rejectionTab: any;
  rejection: any;


  constructor(private router: Router, private route: ActivatedRoute, private rejectService: RejectsService) { }

  ngOnInit() {
    // get connectedUser from LS
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    // get all demandes from LS
    this.demandes = JSON.parse(localStorage.getItem("demandes"));

    // get the current demande id from the path
    this.route.paramMap.subscribe(params => {
      this.idDemande = params.get('id');
    });
    console.log("here", this.idDemande);


    this.rejectService.getRejectionByDemandeId(this.idDemande).subscribe(
      (response) => {
        this.rejectionTab = response.rejection;
        this.rejection = Array.isArray(this.rejectionTab) ? this.rejectionTab : [this.rejectionTab];
        localStorage.setItem('rejection', JSON.stringify(this.rejectionTab));
      });

  }














}
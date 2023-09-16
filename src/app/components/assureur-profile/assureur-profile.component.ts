import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from 'src/app/Services/demande.service';
import { RejectsService } from 'src/app/Services/rejects.service';

@Component({
  selector: 'app-assureur-profile',
  templateUrl: './assureur-profile.component.html',
  styleUrls: ['./assureur-profile.component.css']
})
export class AssureurProfileComponent implements OnInit {

  connectedUser: any;
  demandesWithUsers: any;
  demandesTab: any;
  rejectionForm: any = {};
  isLoading: boolean = true; // Added variable for loading status
  showRejectionTextArea: boolean = false;
  rejectedDemandeId: string = '';
  rejectionCause: string = '';
  errorMsg: string;

  constructor(private demandeService: DemandeService, private router: Router, private rejectsService: RejectsService) { }

  ngOnInit() {

    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));

    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false after 10 seconds
      this.demandesWithUsers = JSON.parse(localStorage.getItem('demandes'));
    }, 3000); // 5 seconds delay


    this.demandeService.getAllDemandesWithUsers().subscribe(
      (response) => {
        this.demandesTab = response.AllDemandesWithUser;
        localStorage.setItem('demandes', JSON.stringify(this.demandesTab));
      });

  }






// ------- confirm demande

  confirmDemande(idDemande) {
    let noth;
    this.demandeService.confirmDemande(idDemande, noth).subscribe(
      (response) => {
        if (response.message == "1") {
          this.demandesWithUsers = this.demandesWithUsers.filter((m) => m._id !== idDemande);
        } else {
          alert("Error updating command status");
        }
      }
    )
  }



// -------- reject demande


  toggleRejectionTextArea(demandeId: string) {
    if (this.rejectedDemandeId === demandeId) {
      this.showRejectionTextArea = !this.showRejectionTextArea;
    } else {
      this.showRejectionTextArea = true;
      this.rejectedDemandeId = demandeId;
      this.rejectionCause = ''; // Reset the rejection cause when toggling
    }
  }

  rejectDemande(idDemande, cause) {
    this.showRejectionTextArea = false;
    this.rejectedDemandeId = '';
    this.rejectionCause = '';
    this.rejectionForm.idDemande = idDemande; // Assign value to idDemande property
    this.rejectionForm.cause = cause; // Assign value to cause property
    console.log("this is", this.rejectionForm);

    this.rejectsService.addRejection(this.rejectionForm).subscribe(
      (response) => {
        console.log("here response after add rejection", response);
        if (response.message == "rejection saved with success") {
          this.demandesWithUsers = this.demandesWithUsers.filter((m) => m._id !== idDemande);
        } else {
          alert("Something went wrong with your annonce try again later") ;
        }
      }
    )

    // ---------------Update the status--------------------------------
    var noth;
    this.demandeService.rejectDemande(idDemande, noth).subscribe(
      (response) => {
        if (response.message == "1") {
          this.router.navigate(['assureur-profile']);
        } else {
          alert("Error updating command status");
        }
      }
    )

  }









}

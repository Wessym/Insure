import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from 'src/app/Services/demande.service';
import { jsPDF } from 'jspdf';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-assure-profile',
  templateUrl: './assure-profile.component.html',
  styleUrls: ['./assure-profile.component.css']
})
export class AssureProfileComponent implements OnInit {

  connectedUser: any;
  userDemandes: any;
  demandesTab: any;
  imagePreview: any;
  userForm: FormGroup;

  isLoading: boolean = true; // Added variable for loading status

  constructor(private formBuilder: FormBuilder,private demandeService: DemandeService, private router: Router) { }



  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));




    this.demandeService.getDemandeByUserId(this.connectedUser._id).subscribe(
      (response) => {
        this.demandesTab = response.demandes;
        localStorage.setItem('demandes', JSON.stringify(this.demandesTab));
      });

      this.userForm = this.formBuilder.group({
        name: ["", [Validators.required, Validators.minLength(3)]],
      }, {        
      })
  }



  loading(){
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false after 5 seconds
      this.userDemandes = JSON.parse(localStorage.getItem('demandes'));
    }, 6000); // 5 seconds delay
  }

  reloading(){
    this.isLoading = true;
  }

  
  
  

  
  



  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log("here file", file);

    this.userForm.patchValue({ img: file });
    this.userForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }


  facturation(m) {
    console.log('Facture button clicked!', m);
  
    let facturationValue;
  
    if (m.type === 'Médicaments') {
      facturationValue = m.montant * 0.6;
    } else if (m.type === 'Consultation') {
      facturationValue = m.montant * 0.7;
    } else {
      // Handle other types or show an error message
      return;
    }
  
    // Create a new jsPDF instance
    const doc = new jsPDF();
  
    // Set the font style for the title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
  
    // Calculate the position for the centered title
    const titleWidth = doc.getStringUnitWidth('Facture') * 18 / doc.internal.scaleFactor;
    const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
    const titleY = 20;
  
    // Add the centered title
    doc.text('Facture', titleX, titleY);
  
    // Set the font style for the table
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
  
    // Define the table headers
    const headers = ['Prestataire', 'Type', 'Montant', 'Justif'];
  
    // Define the table data
    const data = [
      [m.prestataire, m.type, m.montant.toString(), m.justif],
    ];
  
    // Calculate the table column widths and row height
    const columnWidths = [50, 40, 40, 60];
    const rowHeight = 10;
  
    // Calculate the table position
    const startX = (doc.internal.pageSize.getWidth() - columnWidths.reduce((a, b) => a + b, 0)) / 2;
    const startY = titleY + 20;
  
    // Add the table headers
    let currentX = startX;
    let currentY = startY;
  
    headers.forEach((header, index) => {
      doc.rect(currentX, currentY, columnWidths[index], rowHeight, 'S'); // Draw table cell border
      doc.text(header, currentX + columnWidths[index] / 2, currentY + rowHeight / 2, { align: 'center', baseline: 'middle' });
      currentX += columnWidths[index];
    });
  
    // Add the table data
    currentY += rowHeight;
  
    data.forEach((row) => {
      currentX = startX;
  
      row.forEach((cell, index) => {
        doc.rect(currentX, currentY, columnWidths[index], rowHeight, 'S'); // Draw table cell border
  
        if (index === 3) {
          // Align justif text to the left
          doc.text(cell, currentX + 2, currentY + rowHeight / 2, { baseline: 'middle' });
        } else {
          // Align other data to the center
          doc.text(cell, currentX + columnWidths[index] / 2, currentY + rowHeight / 2, { align: 'center', baseline: 'middle' });
        }
  
        currentX += columnWidths[index];
      });
  
      currentY += rowHeight;
    });
  
    // Add the facturationValue in the bottom right corner
    const facturationText = `Facturation: ${facturationValue}`;
    const facturationTextWidth = doc.getStringUnitWidth(facturationText) * 12 / doc.internal.scaleFactor;
    const facturationTextX = doc.internal.pageSize.getWidth() - facturationTextWidth - 10;
    const facturationTextY = currentY + 20;
    doc.text(facturationText, facturationTextX, facturationTextY, { align: 'right' });
  
    // Save the PDF file
    doc.save('facturation.pdf');
  }

}

import { Component, ViewChild } from '@angular/core';
import { ISolicitudMatEntregado } from '../ISolicitudMaterial';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DatosService } from '../datos.service';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ModalPartidasComponent } from '../modal-partidas/modal-partidas.component';


@Component({
  selector: 'app-new-solicitud-entregada',
  templateUrl: './new-solicitud-entregada.component.html',
  styleUrls: ['./new-solicitud-entregada.component.css']
})
export class NewSolicitudEntregadaComponent {

  solicitudesentregadas: ISolicitudMatEntregado[] = [];

  pageActual:number=1;
  urlaccion:string = 'assets/icon-tabla/';
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;

  selectedSolicitud?: ISolicitudMatEntregado;

  constructor(public dialog: MatDialog, public datosSolicitud:DatosService) 
  {     

  }

  ngOnInit(): void {
                
    this.datosSolicitud.getSolicitudesMaterial().subscribe((data: ISolicitudMatEntregado[])=>{
      console.log(data);
      this.solicitudesentregadas = data;
    })    
  }   


  openDialogEdit() {
    const dialogRef = this.dialog.open(ModalEditComponent);
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openDialogNew() {
    const dialogRef = this.dialog.open(ModalPartidasComponent);
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialogDelete(id:string) {
    console.log("id:"+id);
    this.datosSolicitud.setIdSolicitud(id);
    const dialogRef = this.dialog.open(ModalEditComponent);
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  openDialogDetails(id:string) {
    console.log("id:"+id);
    this.datosSolicitud.setIdSolicitud(id);
    const dialogRef = this.dialog.open(ModalDetailsComponent);
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

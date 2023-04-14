import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component'
import { ModalPartidasComponent } from '../modal-partidas/modal-partidas.component'
import { SolicitudMaterialComponent } from '../solicitud-material/solicitud-material.component'
import { EntregaMaterialComponent } from '../entrega-material/entrega-material.component'
import { NewPartidaComponent } from '../new-partida/new-partida.component';
import { ConsultaSolicitudEntregadaComponent } from '../consulta-solicitud-entregada/consulta-solicitud-entregada.component';
import { NewSolicitudEntregadaComponent } from '../new-solicitud-entregada/new-solicitud-entregada.component';
import { ConsultaIngresoComponent } from '../consulta-ingreso/consulta-ingreso.component';

const routes: Routes = [
  { path: 'home', component: SolicitudMaterialComponent},
  { path: 'consultaPartidas', component: ModalPartidasComponent},
  { path: 'nuevasPartidas', component: NewPartidaComponent},
  { path: 'consultaSolicitudes', component: SolicitudMaterialComponent},
  { path: 'nuevasSolicitudes', component: ModalPartidasComponent},
  { path: 'consultaSolicitudesEntregadas', component: ConsultaSolicitudEntregadaComponent},
  { path: 'nuevaSolicitudEntregada', component: NewSolicitudEntregadaComponent},
  { path: 'consultaIngreso', component: ConsultaIngresoComponent},
  { path: 'nuevoIngreso', component: EntregaMaterialComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
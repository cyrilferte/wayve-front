import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ImportsComponent } from './pages/imports/imports.component';
import { EquipementsComponent } from './pages/equipements/equipements.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CardComponent } from './ui/card/card.component';
import { TableComponent } from './ui/table/table.component';
import { ChartModule } from 'angular-highcharts';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    MyNavComponent,
    HomepageComponent,
    ImportsComponent,
    EquipementsComponent,
    ClientsComponent,
    SettingsComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ChartModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }

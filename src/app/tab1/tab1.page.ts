import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBadge, IonLabel, IonThumbnail, IonItem, IonList, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonBadge,IonLabel,IonThumbnail,IonItem,IonList,IonSelect,IonSelectOption],
})
export class Tab1Page implements OnInit  {
  selectedService: any;
  constructor(private router:Router) {}

  ngOnInit(): void{
    const user = localStorage.getItem('User')
    if(user == null){
      this.router.navigateByUrl('/login',{replaceUrl:true})
    }
  }

  onServiceSelect(e: { detail: { value: any; }; }){
    this.selectedService = e.detail.value;
    console.log(this.selectedService)
  }
}
 
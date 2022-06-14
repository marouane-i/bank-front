import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {


  public client:any;
  
  constructor(
    private router:Router,
    private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getClientInfo().subscribe(
      (response)=>{
        this.client=response;
      }
    )
  }
  goToHome(){
    this.router.navigate(["client-home"]);
  }


  panelOpenState = false;
  
  timeline= [
      {
        title: 'Transfert',
        description: 'Transfert of 10 $',
        date: '2019-12-12',
      },
      {
        title: 'Transfert',
        description: 'Transfert of 50 $',
        date: '2020-12-12',
      },
      {
        title: 'Deposite',
        description: 'You Have Deposite 100 $',
        date: '2020-05-04',
      },
    ]



}

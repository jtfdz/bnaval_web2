import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Socket } from "ngx-socket-io";


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

    

  constructor(private route: ActivatedRoute, private socket: Socket) {
    
  }

  ngOnInit() {
    
  }

   


 }




import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-port-detail',
  templateUrl: './port-detail.component.html',
  styleUrls: ['./port-detail.component.css']
})
export class PortDetailComponent implements OnInit {

  @Input() portDetail:any;

  @Output() isChild!:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  sendChild(){

  }
}

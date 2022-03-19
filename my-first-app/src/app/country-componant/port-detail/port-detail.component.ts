import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-port-detail',
  templateUrl: './port-detail.component.html',
  styleUrls: ['./port-detail.component.css']
})
export class PortDetailComponent implements OnInit {

  @Input() portDetail:any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { PortInformationServiceService } from '../port-information-service.service';

@Component({
  selector: 'app-ports-record',
  templateUrl: './ports-record.component.html',
  styleUrls: ['./ports-record.component.css']
})
export class PortsRecordComponent implements OnInit {

  data :any 

  constructor(
    private portService:PortInformationServiceService
  ) { }

  ngOnInit(): void {
    this.portService.getPortdata().subscribe(data => {
      
      this.data = data;
    });
  }

}

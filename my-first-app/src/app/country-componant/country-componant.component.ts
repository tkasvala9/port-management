import { Component, OnInit } from '@angular/core';
import { PortInformationServiceService } from '../port-information-service.service';

@Component({
  selector: 'app-country-componant',
  templateUrl: './country-componant.component.html',
  styleUrls: ['./country-componant.component.css']
})
export class CountryComponantComponent implements OnInit {

  portDetail = {
  selectedCountryFrom: '',
  selectedCountryTo!: '',
  selectedFromPort!: "",
  selectedToPort!: "",
  fromDate:"",
  toDate : "",
  }

  data: any;
  form:any;
  isChildVisible:boolean = false;
  toCountry:any = [];
  FromPorts: any = [];
  ToPorts: any = [];
  selectedCountryFrom!: string;
  selectedCountryTo!:string;
  selectedFromPort!:string;
  selectedToPort!:string;
  fromDate!:string  ;
  toDate!:string;

  constructor(
    private portService: PortInformationServiceService
  ) { }

  ngOnInit(): void {
    this.portService.getdata().subscribe(data => {
      
      this.data = data;
    });
  }

  showFromCountryPorts() {
    if (this.selectedCountryFrom) {
      this.data.map((country: any) => {
        if (country.country_name === this.selectedCountryFrom) {
          country.ports.map(
            (port: any) => {
              this.FromPorts.push(port.port_name)
            })
        }
        else{
          this.toCountry.push(country.country_name)
        }
      })
    }
  }

  showToCountryPorts() {
    if (this.selectedCountryTo && this.selectedFromPort) {
      this.data.map((country: any) => {
        if (country.country_name === this.selectedCountryTo) {
          country.ports.map(
            (port: any) => {
                this.ToPorts.push(port.port_name)
              }  
          )
        }
      })
    }
  }

  onSubmit(){
    if (this.selectedToPort && this.toDate) {
      this.portDetail.selectedCountryFrom =this.selectedCountryFrom;
      this.portDetail.selectedCountryTo = this.selectedCountryTo;
      this.portDetail.selectedFromPort = this.selectedFromPort;
      this.portDetail.selectedToPort =  this.selectedToPort;
      this.portDetail.fromDate = this.fromDate;
      this.portDetail.toDate =  this.toDate;
      this.isChildVisible = true;
    }
  }
}

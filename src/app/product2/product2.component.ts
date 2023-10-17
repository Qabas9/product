import { Component, OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';

interface City {
  name: string,
  code: string
}


interface TableData {

  id: number;
SNo:string;
ProductCode :string;
ProductName :string;

CurrentVersion:string;
ModuleCode:string;


  radioPeriod: string;
  ModuleName:string;
  versionDate:string;

}
@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers: [MessageService]
})
export class Product2Component implements OnInit {
  cities!: City[];

  selectedCity!: City;
  constructor( private messageService: MessageService) { }

 

  ngOnInit(): void {this.cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];}

  DataDetails: TableData[] = [
  
    {

 

      id: 1,
      SNo:"1",
      ProductCode :"WBM",     
ProductName: "Websit.WBM",

      CurrentVersion: "1",

      radioPeriod: "n",

      ModuleCode:"HM",
      ModuleName:"Home",
      versionDate:"10-Aug-2023",

   },

   {

 

    id: 2,
    SNo:"2",
    ProductCode :"PLDC",
    
    ModuleCode:"DB",

    
ProductName : "PLDC",

    CurrentVersion: "R5",

    radioPeriod: "",
   
    ModuleName:"Dashoard",
    versionDate:"",
},

 

{

 

  id: 3,
  SNo:"3",
  
  ProductCode:"PDO-ICOMS",

  ModuleCode:"PT",
  
ProductName : "MASDAR",

  CurrentVersion: "R5",

  radioPeriod: "",

  ModuleName:"products",
  versionDate:"",
},

 

{

 

  id: 4,
  SNo:"4",

  ProductCode:"MASDAR-ON",

  ModuleCode:"SS",
 
ProductName : "MASDAR-ON SITE",

  CurrentVersion: "R5",

  radioPeriod: "",


  ModuleName:"services",
  versionDate:"",
},

{

 

  id: 5,
  SNo:"5",

  ProductCode:"MAS-DIV",

  ModuleCode:"CM",
  
ProductName : "MASDAR_DEV",

  CurrentVersion: "R5",

  radioPeriod: "",

  ModuleName:"Company",
  versionDate:"",
},

 {
  id: 5,
  SNo:"5",

  ProductCode:"MAS-DIV",

  ModuleCode:"CR",
  
ProductName : "MASDAR_DEV",

  CurrentVersion: "R5",

  radioPeriod: "",
  ModuleName:"Career",
versionDate:"",
 }

  ]
}

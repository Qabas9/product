import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService, ConfirmEventType, SelectItem} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface products {

  ClientName: string,

  ProductCode: string,

  ProductName: string,

  LicenesRenewalDate: string,

  LicenesExpiryDate: string,

  CurrentVersion: string,

  Modules:string

};

 

interface proVersion {

    VersionNumber: string,

    VersionInstalledDate: string

  };

 




@Component({
  selector: 'app-product,app-p-dropdown-wrapper',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ConfirmationService,MessageService],
  template: '<p-dropdown></p-dropdown>',


})
export class ProductComponent implements OnInit{
  dropdownStyles:{ [key: string]: string } = {
    'width': '100%'}


  selectedProduct1: string | undefined;

  selectedVersion: string | undefined;

 

  selectedOptions: SelectItem[] = []; // Property to hold the selected options

  multiSelectOptions: SelectItem[] = []

  multiSelectOptions1: SelectItem[] = []

 

  selectedProduct: any = {};

 

 // product!: ClientProductsComponent[];

  //selectedproducts!: MyProductsComponent;

 

 

  products= [

    {

     ClientName:'PETROGAS E&P',

     ProductCode: 'PetroHSE',

     ProductName: 'PetroHSE App Suite',

     LicenesRenewalDate: "20-1-2021",

     LicenesExpiryDate: "20-2-2023",

     CurrentVersion: '1.7',

     Modules:'Action Tracker'
    
    },

     {

       ClientName:'Hydro Carbon Finder E&P',

       ProductCode: 'SAMS',

       ProductName: 'Smart Asset Management System',

       LicenesRenewalDate: '02-05-2019',

       LicenesExpiryDate: "02-07-2020",

       CurrentVersion:'1.9',

       Modules:'Administration',
       

     },

     {

       ClientName:'Shuram Dubai',

       ProductCode: "iCDMS",

       ProductName: "iCDMS",

       LicenesRenewalDate: "01-10-2017",

       LicenesExpiryDate: "02-11-2022",

       CurrentVersion:"V2022.08",

       Modules:"Audit & Inspection"

     },

     {

       ClientName:'Shuram Oil & Gas',

       ProductCode: "ES",

       ProductName: "E-Service",

       LicenesRenewalDate: "30-07-2017",

       LicenesExpiryDate: "30-8-2018",

       CurrentVersion:"V2017",

       Modules:"Competency Matrix"

     },

     {

      ClientName:'Petroleum Development Oman',

      ProductCode: 'PetroHS',

      ProductName: 'PetroHSE App Suite',

      LicenesRenewalDate: "23-04-2019",

      LicenesExpiryDate: "11-07-2020",

      CurrentVersion: '1.9',

      Modules:'eLearning'

     },

     {

      ClientName:'Global Computer Services L.L.C',

      ProductCode: 'HSE',

      ProductName: 'PetroHSE',

      LicenesRenewalDate: "09-09-2019",

      LicenesExpiryDate: "10-09-2024",

      CurrentVersion: '1',

      Modules:'Help & Support'

     },

     {

      ClientName:'Royal Oman Police',

      ProductCode: 'PetroHSE v2',

      ProductName: 'PetroHSE App Suite v2',

      LicenesRenewalDate: "18-08-2011",

      LicenesExpiryDate: "19-04-2018",

      CurrentVersion: 'v2011.18',

      Modules:"Home"

     },

     {

      ClientName:'Tax Oman',

      ProductCode: 'iCDMS Petro',

      ProductName: 'Petro iCDMS',

      LicenesRenewalDate: "11-11-2011",

      LicenesExpiryDate: "10-12-2025",

      CurrentVersion: 'V2011.11',

      Modules:"HSE KPI"

     }

   ];

   

   proVersion= [

     {

       VersionNumber:"1.7",

       VersionInstalledDate:"24-Feb-2022"

     },

     {

      VersionNumber:"1.1",

      VersionInstalledDate:"25-Feb-2022"

    }  

   ];

 

  //proVer=[];

  value: boolean | null = null;

  productDialog: boolean = false;

  LRDateCalander:Date | undefined;

  LEDateCalander:Date | undefined;

  IDateCalander:Date | undefined;

  CurrentVersion:string | undefined;

  date: Date | undefined;

  VIDateCalander:Date | undefined;

  includes: any;

  Product: any;

  ClientNameSelect!: any[];

  selectedProductsClient!: products[] | null;

  //rowDataForConfirmation: any;

//clientProductForm: FormGroup;

 

 constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private fb: FormBuilder)

  { this.filteredTableData = this.products;

    this.filteredTableDatas = this.proVersion;

     

 

 

    // this.clientProductForm = this.fb.group({

    //   selectedProduct11: ['', Validators.required], // Client Name dropdown

    //   selectedProduct2: ['', Validators.required], // Product Name dropdown

    //   LRDateCalander: [''],

    //   LEDateCalander: [''],

    //   IDateCalander: [''],

    //   CurrentVersion: [''],

    //   selectedOptions: [[]], // MultiSelect

    // });

  }

  // saveProducts() {

  //   if (this.clientProductForm.valid) {

  //     const newClientProduct: products = {

  //       ClientName: this.clientProductForm.value.selectedProduct11,

  //       ProductCode: 'YourGeneratedProductCode', // Generate a unique product code

  //       ProductName: this.clientProductForm.value.selectedProduct2,

  //       LicenesRenewalDate: this.clientProductForm.value.LRDateCalander.toDateString(),

  //       LicenesExpiryDate: this.clientProductForm.value.LEDateCalander.toDateString(),

  //       CurrentVersion: this.clientProductForm.value.CurrentVersion,

  //       Modules: this.clientProductForm.value.selectedOptions.map((option: { value: any; }) => option.value).join(', ')

  //     };

 

  //     this.products.push(newClientProduct);

 

  //     // Clear the form fields

  //     this.clientProductForm.reset();

 

  //     // Close the dialog

  //     this.addClientProductVisible = false;

 

  //     // Display success message

  //     this.messageService.add({

  //       severity: 'success',

  //       summary: 'Success',

  //       detail: 'Client Product added successfully',

  //       life: 3000

  //     });

  //   }

   

  //   else {

  //     // Display an error message if required fields are not filled

  //     this.messageService.add({

  //       severity: 'error',

  //       summary: 'Error',

  //       detail: 'Please fill in all required fields',

  //       life: 3000

  //     });

  //   }

  // }

 

  ngOnInit() {

    this.multiSelectOptions = [

      { label: 'Option 1', value: 'option1' },

      { label: 'Option 2', value: 'option2' },

      { label: 'Option 3', value: 'option3' },];

    // this.getProduct();

    // this.getCategories();

    this.multiSelectOptions1 = [

      { label: 'Option 1', value: 'option1' },

      { label: 'Option 2', value: 'option2' },

      { label: 'Option 3', value: 'option3' },

    ];  

 

    this.ClientNameSelect=[

      { name: 'PETROGAS'},

      { name: 'Hydro Carbon Finder E&P'},

      { name: 'Shuram Dubai'},

      { name: 'Shuram Oil & Gas'},

      { name: 'Petroleum Development Oman'},

      { name: 'Global Computer Services L.L.C'},

      { name: 'Royal Oman Police'},

      { name: 'Tax Oman'},

    ];

    this.selectedRowData = this.proVersion[0];

}

 

  // getProduct(){

  //   this.appService.getProduct().subscribe(

  //     Response=>this.products=Response

  //   );

  // }

 

  // getCategories(){

  //   this.appService.getCategories().subscribe(

  //     Response=>this.proVer=Response

  //   );

  // }

 

  addClientProductVisible: boolean = false;

  visible: boolean = false;

  showDialog() {

      this.addClientProductVisible = true;

  }

  saveProduct() {

    // Implement saving logic here

    this.addClientProductVisible = false; // Close the dialog after saving

  }

  closeDialog() {

    this.addClientProductVisible = false; // Close the dialog without saving

  }

 

  editClientProductVisible: boolean = false;

  showDialog1() {

    this.editClientProductVisible = true;

}

saveProduct1() {

  // Implement saving logic here

  this.editClientProductVisible = false; // Close the dialog after saving

}

closeDialog1() {

  this.editClientProductVisible = false; // Close the dialog without saving

}

 

editVersionVisible: boolean = false;

showDialog2() {

  this.editVersionVisible = true;

}

 

editVersionVisible2: boolean = false;

showDialog3() {

  this.editVersionVisible2 = true;

}

saveProduct2() {

// Implement saving logic here

this.editVersionVisible = false; // Close the dialog after saving

}

closeDialog2() {

this.editVersionVisible = false; // Close the dialog without saving

}

 

exportExcel() {

  import('xlsx').then((xlsx) => {

      const worksheet = xlsx.utils.json_to_sheet(this.products);

      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };

      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });

      this.saveAsExcelFile(excelBuffer, 'products');

  });

}

 

saveAsExcelFile(buffer: any, fileName: string): void {

  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

  let EXCEL_EXTENSION = '.xlsx';

  const data: Blob = new Blob([buffer], {

      type: EXCEL_TYPE

  });

  // FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);

}

 

oncloseAddDialog() {

  this.addClientProductVisible = false;

}

oncloseEditDialog() {

  this.editClientProductVisible = false;

}

oncloseEditVDialog() {

  this.editVersionVisible = false;

}

oncloseAddVDialog() {

  this.editVersionVisible2 = false;

}

 

//selectedProduct!: products[];

producte: products[] = [];

 

product1 : products = {

  ProductCode: '0',

  ProductName: '',

  LicenesRenewalDate: '',

  LicenesExpiryDate: '',

  CurrentVersion: '',

  Modules: '',

  ClientName: ''

};

 

 

filteredTableData: any[] = [];

 

deleteProduct(product1: products) {

  this.confirmationService.confirm({

      message: `Do you want to remove this record of ${product1.ProductName}?`,

      header: 'Delete confirmation',

      icon: 'pi pi-exclamation-triangle',

      accept: () => {

        console.log('Accept function called');

          // Remove the row    

          this.producte = this.producte.filter((val) => val.ProductCode !== product1.ProductCode);

          // Update the tableData

          this.filteredTableData = this.filteredTableData.filter((val) => val.ProductCode !== product1.ProductCode);

         

          this.product1 = {

            ProductCode:'0',

            ProductName: '',

            LicenesRenewalDate:'',

            LicenesExpiryDate:'',

            CurrentVersion: '',

            Modules:'',

            ClientName: ''

          };

 

          // success

          this.messageService.add({

              severity: 'success',

              summary: 'Successful',

              detail: 'Product Deleted',

              life: 3000

          });

      },

      reject: (type: ConfirmEventType) => {

          switch (type) {

              case ConfirmEventType.REJECT:

                  this.messageService.add({

                      severity: 'error',

                      summary: 'Rejected',

                      detail: 'You have rejected'

                  });

                  break;

              case ConfirmEventType.CANCEL:

                  this.messageService.add({

                      severity: 'warn',

                      summary: 'Cancelled',

                      detail: 'You have cancelled'

                  });

                  break;

          }

      }

   });

 }

//  saveProducts() {

//   if (this.selectedProduct1 && this.selectedProduct1 !== '' && this.product1.ProductName !== '' && this.LRDateCalander && this.LEDateCalander && this.IDateCalander) {

//     // Check if required fields are filled (you can add more validation as needed)

   

//     // Create a new client product object and add it to the products array

//     const newClientProduct: products = {

//       ClientName: this.selectedProduct1,

//       ProductCode: 'YourGeneratedProductCode', // Generate a unique product code

//       ProductName: this.product1.ProductName,

//       LicenesRenewalDate: this.LRDateCalander.toDateString(),

//       LicenesExpiryDate: this.LEDateCalander.toDateString(),

//       CurrentVersion: this.product1.CurrentVersion,

//       Modules: this.selectedOptions.map(option => option.value).join(', ') // Convert selected options to a comma-separated string

//     };

 

//     this.products.push(newClientProduct);

 

//     // Clear the form fields

//     this.selectedProduct1 = undefined;

//     this.product1 = {

//       ProductCode: '0',

//       ProductName: '',

//       LicenesRenewalDate: '',

//       LicenesExpiryDate: '',

//       CurrentVersion: '',

//       Modules: '',

//       ClientName: ''

//     };

//     this.LRDateCalander = undefined;

//     this.LEDateCalander = undefined;

//     this.IDateCalander = undefined;

//     this.selectedOptions = [];

 

//     // Close the dialog

//     this.addClientProductVisible = false;

 

//     // Display success message

//     this.messageService.add({

//       severity: 'success',

//       summary: 'Success',

//       detail: 'Client Product added successfully',

//       life: 3000

//     });

//   } else {

//     // Display an error message if required fields are not filled

//     this.messageService.add({

//       severity: 'error',

//       summary: 'Error',

//       detail: 'Please fill in all required fields',

//       life: 3000

//     });

//   }

// }

 

hideDialog() {

  this.addClientProductVisible = false;

  this.submitted = false;

}

 

    product!: products[];

    product2 : products = {

      ProductCode: '0',

      ProductName: '',

      LicenesRenewalDate: '',

      LicenesExpiryDate: '',

      CurrentVersion: '',

      Modules: '',

      ClientName: ''

    };

 

    selectedProductsF!: products[] | null;

 

 

 submitted: boolean = false;

 

 saveProduct3() {

  this.submitted = true;

 

  if (this.product2.ProductName?.trim()) {

      if (this.product2.ProductCode) {

          this.product [this.findIndexById(this.product2.ProductCode)] = this.product2;

          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });

      } else {

          this.product2.ProductCode = this.createId();

          this.product.push(this.product2);

          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });

      }

 

      this.product = [...this.product];

      this.addClientProductVisible = false;

      this.product2 = {

        ProductCode:'0',

        ProductName: '',

        LicenesRenewalDate:'',

        LicenesExpiryDate:'',

        CurrentVersion: '',

        Modules:'',

        ClientName: ''

      };

  }

 }

 findIndexById(id: string): number {

  let index = -1;

  for (let i = 0; i < this.products.length; i++) {

      if (this.products[i].ProductCode === id) {

          index = i;

          break;

      }

  }

 

  return index;

}

createId(): string {

  let id = '';

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 5; i++) {

      id += chars.charAt(Math.floor(Math.random() * chars.length));

  }

  return id;

}

 

selectedRowData: proVersion | null = null;

 

setSelectedRowData(proVer: proVersion) {

  this.selectedRowData = proVer;

  //this.showDialog3();

 }

 

 addNewVersion() {

  const newVersion: proVersion = {

    VersionNumber: this.selectedRowData!.VersionNumber, // Assuming you want to link the new version to the selected product

    VersionInstalledDate: this.VIDateCalander ? this.VIDateCalander.toDateString() : '', // Convert date to string

  };

 

  // Add the new version to the array

  this.proVersion.push(newVersion);

 

  // Close the dialog

  this.editVersionVisible2 = false;

 

  // Optionally, clear the form fields or do any other necessary operations

  this.VIDateCalander = undefined;

}

 

saveEditProduct() {

}





  productes: proVersion[] = [];

 

  proVer : proVersion = {

  VersionNumber:'0',

  VersionInstalledDate:''

};

filteredTableDatas: any[] = [];

 

deleteVersion(proVer: proVersion) {

  this.confirmationService.confirm({

      message: `Do you want to remove this record of ${proVer.VersionNumber}?`,

      header: 'Delete confirmation',

      icon: 'pi pi-exclamation-triangle',

      accept: () => {

        console.log('Accept function called');

          // Remove the row    

          this.productes = this.productes.filter((val) => val.VersionNumber !== proVer.VersionNumber);

          // Update the tableData

          this.filteredTableDatas = this.filteredTableDatas.filter((val) => val.VersionNumber !== proVer.VersionNumber);

         

          this.proVer = {

            VersionNumber:'0',

            VersionInstalledDate:''

          };

 

          // success

          this.messageService.add({

              severity: 'success',

              summary: 'Successful',

              detail: 'Product Deleted',

              life: 3000

          });

      },

      reject: (type: ConfirmEventType) => {

          switch (type) {

              case ConfirmEventType.REJECT:

                  this.messageService.add({

                      severity: 'error',

                      summary: 'Rejected',

                      detail: 'You have rejected'

                  });

                  break;

              case ConfirmEventType.CANCEL:

                  this.messageService.add({

                      severity: 'warn',

                      summary: 'Cancelled',

                      detail: 'You have cancelled'

                  });

                  break;

          }

      }
     

   });

 }

}
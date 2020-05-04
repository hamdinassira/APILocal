import { Component } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any = [];
  constructor(private restService:RestService) {}
  ngOnInit(){
    this.restService.getProducts().subscribe((res) =>{
      this.products=res;
    }

    )
    
    
   
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images : Array<string> = [
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80",
    "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" ,
    "https://images.unsplash.com/photo-1532751203793-812308a10d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80",
    "https://images.unsplash.com/photo-1453856908826-6bbeda0f8490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  ] ;

  Pointer : number = 0 ;

  right(){
    this.Pointer = (this.Pointer + 1) % this.images.length ;
  } 

  left(){
    this.Pointer = (this.Pointer - 1 + this.images.length) % this.images.length ;
  }

  curr(){
    this.Pointer += 0 ;
  }

  cardContentArray : Array<cardDetails> = [
    {
      price : "Free" ,
      money : "0",
      user : "Single User", 
      storage : "5GB Storage",
      limit : "Unlimited Public Projects", 
      access : "Community Access" ,
      privateProjects : "Unlimited Private Projects",
      support : "Dedicated Phone Support", 
      subdomain : "Free Subdomain", 
      status : "Monthly Status Reports",
      icons : [true , true , true , true , false, false , false , false]
    },
    {
      price : "Plus" ,
      money : "9" ,
      user : "5 Users", 
      storage : "50GB Storage",
      limit : "Unlimited Public Projects", 
      access : "Community Access" ,
      privateProjects : "Unlimited Private Projects",
      support : "Dedicated Phone Support", 
      subdomain : "Free Subdomain", 
      status : "Monthly Status Reports",
      icons : [true , true , true , true , true , true , true ,  false]
    },
    {
      price : "Pro",
      money : "45" ,
      user : "Unlimited Users", 
      storage : "150GB Storage",
      limit : "Unlimited Public Projects", 
      access : "Community Access" ,
      privateProjects : "Unlimited Private Projects",
      support : "Dedicated Phone Support", 
      subdomain : "Unlimited Free Subdomain", 
      status : "Monthly Status Reports",
      icons : [true , true , true , true , true , true , true ,  true]
    }
  ]
}


export interface cardDetails {
  price : string ;
  money : string ;
  user : string ;
  storage : string ;
  limit : string ; 
  access : string ;
  privateProjects : string ; 
  support : string ; 
  subdomain : string ; 
  status : string ;
  icons : Array<boolean>;
}

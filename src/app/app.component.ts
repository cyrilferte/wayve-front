import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public navOpen :boolean = false;

  public navToggle(){
    console.log('kkk')
    if(this.navOpen == true){
      this.navOpen = false
    }else{
      this.navOpen = true
    }
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
   @Output() navToggle: EventEmitter<any> = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver) {}

  public onToggle(){
    this.navToggle.emit('toggle')
  }
}

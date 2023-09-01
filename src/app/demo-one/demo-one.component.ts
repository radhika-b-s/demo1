import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.scss']
})
export class DemoOneComponent implements OnInit {

  opened: boolean = true;
  public isChecked: any;
  @ViewChild('sidenav') sidenav: any;
  public isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(map((result: BreakpointState):any => result.matches))

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isChecked = false;
  }
}

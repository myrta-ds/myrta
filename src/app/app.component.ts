import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public selectedComponent: any = {};
  public selectComponents: any[] = [
    { id: 0, label: 'Button', link: '/components/button-view' },
    { id: 1, label: 'Alert', link: '/components/alert-view' },
    { id: 2, label: 'Loader', link: '/components/loader-view' },
  ];

  public selectedTheme: any = { id: 0, label: 'Minfin', classes: 'minfin-theme PtSans' };
  public selectThemes: any[] = [
    { id: 0, label: 'Minfin', classes: 'minfin-theme PtSans' }
  ];

  constructor(private router: Router) {
  }

  public get getThemeClasses(): string {
    return this.selectedTheme.classes
  }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.selectedComponent = this.selectComponents.find(s => s.link === e.url)
      }
    })
  }

  selectComponent(event: any) {
    this.router.navigate([event.link]);
  }


  selectTheme(event: any) {

  }
}

import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public selectedComponent: any = {};
  public selectComponents: any[] = [
    { id: 0, label: 'Button', link: '/components/button' },
    { id: 1, label: 'Alert', link: '/components/alert' },
    { id: 2, label: 'Loader', link: '/components/loader' },
    { id: 3, label: 'Badges', link: '/components/badges' },
    { id: 4, label: 'Breadcrumbs', link: '/components/breadcrumbs' },
    { id: 5, label: 'Link', link: '/components/link' },
    { id: 6, label: 'Label', link: '/components/label' },
    { id: 7, label: 'CdkTooltip', link: '/components/cdk-tooltip' },
    { id: 8, label: 'Dropdown', link: '/components/dropdown' },
    { id: 9, label: 'Error Message', link: '/components/error-message' },
    { id: 10, label: 'Hint Error Message', link: '/components/hint-error-message' },
    { id: 11, label: 'Icon Button', link: '/components/icon-button' },
    { id: 12, label: 'Modal', link: '/components/modal' },
    { id: 13, label: 'Paginator', link: '/components/paginator' },
    { id: 14, label: 'Progress', link: '/components/progress' },
    { id: 15, label: 'Stepper', link: '/components/stepper' },
    { id: 16, label: 'Table', link: '/components/table' },
    { id: 17, label: 'Tabs', link: '/components/tabs' },
    { id: 18, label: 'Truncate Text', link: '/components/truncate-text' },
    { id: 19, label: 'Warning Message', link: '/components/warning-message' },
    { id: 20, label: 'Controls Wrapper', link: '/components/controls-wrapper' },
    { id: 21, label: 'Checkbox', link: '/components/form/checkbox' },
    { id: 22, label: 'Checkbox Group', link: '/components/form/checkbox-group' },
  ];

  public selectedTheme: any = { id: 0, label: 'Minfin', theme: 'minfin-theme', font: 'PtSans' };
  public selectThemes: any[] = [
    { id: 0, label: 'Minfin', theme: 'minfin-theme', font: 'PtSans' },
    { id: 1, label: 'Default', theme: 'default-theme', font: 'PtSans' }
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
  ) {
    this.changeBodyClass()
  }

  public get getThemeClasses(): string {
    return this.selectedTheme.theme
  }

  private changeBodyClass(): void {
    this.renderer.setAttribute(
      this.document.body,
      'class',
      `page-wrapper ${this.selectedTheme.theme} ${this.selectedTheme.font}`
    );

    this.renderer.setStyle(this.document.body, 'background-color', '#EEF0F4');
    this.renderer.setStyle(this.document.body, 'min-height', '100vh');
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
    if (event) {
      this.selectedTheme = event
      this.changeBodyClass()
    }
  }
}

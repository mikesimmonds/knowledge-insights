import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-bar-brand',
  template: `
    <div class="mobile-nav-bar__brand">
      <a (click)="onMobileNavBarBrandClick()" routerLink="/">
      <h1 class='nav-logo'><strong>KNOWLEDGE</strong>INSIGHTS</h1>
      </a>
    </div>
  `,
    styles: [
      `
        .nav-logo {
          color: #fff;
          strong {
            color: #eee;
          }
        }
      `
    ]
})
export class MobileNavBarBrandComponent {
  @Output() mobileNavBarBrandClick = new EventEmitter<void>();

  onMobileNavBarBrandClick(): void {
    this.mobileNavBarBrandClick.emit();
  }
}

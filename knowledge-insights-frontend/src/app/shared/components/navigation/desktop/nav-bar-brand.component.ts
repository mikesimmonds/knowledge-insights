import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
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
export class NavBarBrandComponent {}

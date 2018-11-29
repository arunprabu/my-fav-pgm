import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <!-- FOOTER -->
    <footer class="container">
      <hr>
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-nav>
      <p>&copy; 2017-2018 Cognizant, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#" class="yellowBg">Terms</a></p>
    </footer>
  `,
  styles: [`
    .yellowBg{
      background: yellow;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

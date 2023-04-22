import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-sidenav-at',
  templateUrl: './sidenav-at.component.html',
  styleUrls: ['./sidenav-at.component.scss']
})
export class SidenavAtComponent implements OnInit {

  name = 'Angular ' + VERSION.major;

  constructor() { }

  ngOnInit(): void {
    let sidebar = document.querySelector('.sidebar');
    let closeBtn = document.querySelector('#btn');

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      menuBtnChange();
    });

    function menuBtnChange() {
      if (sidebar.classList.contains('open')) {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    }
  }

}

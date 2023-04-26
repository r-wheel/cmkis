import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-sidenav-faculty',
  templateUrl: './sidenav-faculty.component.html',
  styleUrls: ['./sidenav-faculty.component.scss']
})
export class SidenavFacultyComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    let sidebar = document.querySelector('.sidebar');
    let closeBtn = document.querySelector('#btn');
    let hideIcon = document.querySelector('.fa-brands');

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      menuBtnChange();
    });

    function menuBtnChange() {
      if (sidebar.classList.contains('open')) {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
        hideIcon.classList.remove('closed-icon');
      } else {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
        hideIcon.classList.add("closed-icon");
      }
    }
  }

  logOut(){
    this.api.deleteToken();
    this.router.navigate(['./cmkis']);
  }


}

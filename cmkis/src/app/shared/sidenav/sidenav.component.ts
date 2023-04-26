import { Component, VERSION } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent{
 // name = 'Angular ' + VERSION.major;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    // let sidebar = document.querySelector('.sidebar');
    // let closeBtn = document.querySelector('#btn');

    // closeBtn.addEventListener('click', () => {
    //   sidebar.classList.toggle('open');
    //   menuBtnChange();
    // });

    // function menuBtnChange() {
    //   if (sidebar.classList.contains('open')) {
    //     closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
    //   } else {
    //     closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
    //   }
    // }
  }

  logOut(){
    this.api.deleteToken();
    this.router.navigate(['./cmkis']);
  }
}

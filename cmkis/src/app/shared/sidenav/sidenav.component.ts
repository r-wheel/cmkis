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
    let sidebar = document.querySelector('.sidebar');
    let closeBtn = document.querySelector('#btn');

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('none-sidebar');
      menuBtnChange();
    });

    function menuBtnChange() {
      if (sidebar.classList.contains('none-sidebar')) {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
        closeBtn.classList.replace('open-btn', 'close-btn')
        } 

       else {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
        closeBtn.classList.add('open-btn');
       }
    }

  }

  logOut(){
    this.api.deleteToken();
    this.router.navigate(['./cmkis']);
  }
}

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private translate: TranslateService) { }

  getSideMenuList() {
    let sideMenuList = [
      {icon: 'bi bi-book', title:this.translate.instant('LAYOUT.SIDEMENU.BOOKS'), routeUrl: '/books'},
    ];

    return sideMenuList;
  }
}

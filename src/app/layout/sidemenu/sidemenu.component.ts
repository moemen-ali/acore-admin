import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LayoutService } from '../core/services/layout.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {
    isOpened: boolean = true;
    sideMenuList: any;

    constructor(private layoutService: LayoutService) {

    }
    ngOnInit() {
      this.sideMenuList = this.layoutService.getSideMenuList();
    }
}

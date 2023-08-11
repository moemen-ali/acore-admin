import { Component } from '@angular/core';
import { LayoutService } from '../layout/core/services/layout.service';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
})
export class FeaturesPageComponent {
  sideMenuOpen: boolean = true;
  sideMenuList: any;
  
  constructor(private layoutService: LayoutService) {

  }
  ngOnInit() {
    this.sideMenuList = this.layoutService.getSideMenuList();
  }
  toggle(drawer:any) {
    drawer.toggle();
    this.sideMenuOpen = drawer._opened;
  }
}

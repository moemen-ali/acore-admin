import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    const savedLanguage = localStorage.getItem('language');
    const defaultLanguage = savedLanguage || 'en';
    translate.setDefaultLang(defaultLanguage);
    translate.use(defaultLanguage);
    if (defaultLanguage == 'ar') {
      this.loadStyle('arabicStyle.css');
    }
  }


  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.id = 'client-theme';
    style.rel = 'stylesheet';
    style.href = `${styleName}`;
    head.appendChild(style);
  }
}

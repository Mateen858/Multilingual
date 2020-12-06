import { environment } from './../environments/environment';
import { I18nService } from './shared/services/i18n/i18n.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sms-online';
  constructor(
    private titleService:Title,
    private translateService:TranslateService,
    private i18nService:I18nService
    ){

  }
  public toggleLanguage(){
    let currentLanguge = this.i18nService.language;
    // en-US", "de-DE"
    if(currentLanguge==="en-US"){
      this.i18nService.language = "de-DE";
    }
    else{
      this.i18nService.language = "en-US";
    }
    // this.i18nService.language = language;
    localStorage.setItem("lang", this.i18nService.language);
    window.location.reload();
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
    window.location.reload();
  }

  get alternateLanguage(): string {
    let lang = this.i18nService.language;
    if(lang==="en-US"){
      lang = "DE";
    }
    else{
      lang = "EN";
    }
    return lang;
  }

  get currentLanguage(): string {
    let lang = this.i18nService.language;
    return lang;
  }

  get languages(): string[] {
    let languages =  this.i18nService.supportedLanguages;
    return languages;
  }
  ngOnInit(){
    this.i18nService.init(environment.defaultLanguage,environment.supportedLanguages);
  }
}

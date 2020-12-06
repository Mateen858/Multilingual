import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import enUS from '../../../../assets/i18n/en-US.json';
import deDE from '../../../../assets/i18n/de-DE.json';
const languageKey = 'language';

export function extract(s: string) {
  return s;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  defaultLanguage!: string;
  supportedLanguages!: string[];
  private langChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService) {
    translateService.setTranslation('en-US', enUS);
    translateService.setTranslation('de-DE', deDE);
  }


  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';
    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(languageKey, event.lang);
    });
  }
  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
  set language(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = this.supportedLanguages.includes(language);
    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }
    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }
    this.translateService.use(language);
  }
  
  get language(): string {
    return this.translateService.currentLang;
  }
}

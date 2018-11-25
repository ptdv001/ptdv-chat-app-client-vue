import Vue from 'vue';
import VueI18n from 'vue-i18n';

import enUs from './translations/en-us.json';
import esEs from './translations/es-es.json';
import frFr from './translations/fr-fr.json';
import jaJp from './translations/ja-jp.json';

import numberFormats from './numberFormats.json';

// For more date time formatting options see the ecma spec
// http://www.ecma-international.org/ecma-402/2.0/#sec-intl-datetimeformat-constructor
import dateTimeFormats from './dateTimeFormats.json';

Vue.use(VueI18n);

// Order of local presedence
// 1. take localStorage if exists -or-
// 2. take browser locale if exists
function getLocale() {
  const localeLocalStorage = localStorage.getItem("locale");
  if (localeLocalStorage) {
    return localeLocalStorage;
  }

  return navigator.language.toLocaleLowerCase();
}

export function setLocale(newLocale, i18n) {
  localStorage.setItem("locale", newLocale);

  //TODO probably a better way than passing in i18n wherever
  if (i18n) {
    i18n.locale = newLocale;
  }
}

const fallbackLocale = 'en-us';
const locale = getLocale();

// TODO it may not be worth it to have above export since now the below cannot be a default export
// this means all imports have to do the `{i18n} = ..`  instead of `whatever = ...`
export const i18n = new VueI18n({
  locale,
  fallbackLocale,
  messages: {
    'en-us': enUs,
    'es-es': esEs,
    'fr-fr': frFr,
    'ja-jp': jaJp
  },
  numberFormats,
  dateTimeFormats
});

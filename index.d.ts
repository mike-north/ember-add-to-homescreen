declare namespace AddToHomescreen {
  interface Options {
    appID?: string; // local storage name (no need to change)
    fontSize?: number; // base font size, used to properly resize the popup based on viewport scale factor
    debug?: boolean; // override browser checks
    logging?: boolean; // log reasons for showing or not showing to js console; defaults to true when debug is true
    modal?: boolean; // prevent further actions until the message is closed
    mandatory?: boolean; // you can't proceed if you don't add the app to the homescreen
    autostart?: boolean; // show the message automatically
    skipFirstVisit?: boolean; // show only to returning visitors (ie: skip the first time you visit)
    startDelay?: number; // display the message after that many seconds from page load
    lifespan?: number; // life of the message in seconds
    displayPace?: number; // minutes before the message is shown again (0: display every time, default 24 hours)
    maxDisplayCount?: number; // absolute maximum number of times the message will be shown to the user (0: no limit)
    icon?: boolean; // add touch icon to the message
    message?: string; // the message can be customized
    validLocation?: RegExp[]; // list of pages where the message will be shown (array of regexes)
    onInit?: () => void; // executed on instance creation
    onShow?: () => void; // executed when the message is shown
    onRemove?: () => void; // executed when the message is removed
    onAdd?: () => void; // when the application is launched the first time from the homescreen (guesstimate)
    onPrivate?: () => void; // executed if user is in private mode
    privateModeOverride?: boolean; // show the message even in private mode (very rude)
    detectHomescreen?: boolean; // try to detect if the site has been added to the homescreen (false | true | 'hash' | 'queryString' | 'smartURL')
  }
}

declare interface Window {
  addToHomescreen: (opts: AddToHomescreen.Options) => void;
}

declare module 'ember-add-to-homescreen/components/add-to-homescreen' {
  export { default } from '@ember/component';
}

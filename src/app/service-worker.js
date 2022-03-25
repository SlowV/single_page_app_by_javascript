import LogUtils from "./utils/log-utils.js";

const log = new LogUtils('~.s.a.js.ServiceWorker')

self.addEventListener('install', e => {
    log.info('Service worker: Installed');
});

self.addEventListener('activate', e => {
    log.info('Service worker: Activated');
});



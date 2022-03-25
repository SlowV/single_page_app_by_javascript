import App from "../../app/app.js";
// Import config service here
const config = {
    cache: {
        isActive: true,
        path: '/assets/js/service-worker.js',
        assets: [
            '/assets/css/index.js'
        ]
    },
    debug: true,
    image: {
        lazy: true
    }
};


// Start service app
App.initialize(config);


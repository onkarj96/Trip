app.factory('configservice', function ($http) {
    return {
        'loginURL': '/api/login',
        'tripURL': '/api/trip',
        'chatURL': '/api/chat',
        'getTripChats': '/api/chat/trip/'
    }
});
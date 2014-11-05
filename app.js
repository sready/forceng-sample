angular.module('demoApp', ["controllers", "forceng"])

    .run(function ($window, force) {

        force.init({
            // Required: clientId of Salesforce Connected App
            appId: '3MVG9A2kN3Bn17htrGcJ8DnRaOl8WTI7pvuhUty5FMXjedLdIMITLDTVW3uh2ZsYUPWLkKBU.Pi5ZJpRRdb9m',
            // optional: defaults to 'v30.0'
            apiVersion: 'v30.0',
            // optional: defaults to oauthcallback.html in same directory as index.html
             oauthRedirectURL: 'https://samforceng.herokuapp.com/oauthcallback.html',
            // only required when hosting app on your own server to work around cross-domain issues (Not required when running locally on mobile device)
            proxyURL: 'https://simple-cors-proxy.herokuapp.com' /* Node.js hosted proxy provided as a sample for development only https://github.com/ccoenraets/cors-proxy */
            // proxyURL: 'https://sfdc-cors.herokuapp.com' /* Play/Scala hosted proxy provided as a sample for development only https://github.com/jamesward/sf-cors-proxy */
            // proxyURL: 'http://localhost:3000' /* Your own local proxy for development */

        });

    });
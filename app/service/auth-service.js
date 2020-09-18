// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_oauth2_1 = require("nativescript-oauth2");
var providers_1 = require("nativescript-oauth2/providers");
var client = null;

function configureOAuthProviders() {
    var microsoftProvider = configureOAuthProviderMicrosoft();
    var googleProvider = configureOAuthProviderGoogle();
    var facebookProvider = configureOAuthProviderFacebook();
    nativescript_oauth2_1.configureTnsOAuth([microsoftProvider, googleProvider, facebookProvider]);
    // nativescript_oauth2_1.configureTnsOAuth([googleProvider]);

}
exports.configureOAuthProviders = configureOAuthProviders;
// 598161901649-q3jl8h0eeqbbnd8ko6541k3u4jvdc5mb.apps.googleusercontent.com
function configureOAuthProviderGoogle() {
    var googleProviderOptions = {
        openIdSupport: "oid-full",
        // clientId: "598161901649-dtlh4c20osdlll4qq6i2140jcdckqk9h.apps.googleusercontent.com",
        // redirectUri: "apps.googleusercontent.com.598161901649-dtlh4c20osdlll4qq6i2140jcdckqk9h:/auth",
        // urlScheme: "apps.googleusercontent.com.598161901649-dtlh4c20osdlll4qq6i2140jcdckqk9h",
        clientId: "598161901649-tpqdibcoq8ieon70ukuhgljvhcg2qt6e.apps.googleusercontent.com",
        redirectUri: "apps.googleusercontent.com.598161901649-tpqdibcoq8ieon70ukuhgljvhcg2qt6e:/auth",
        urlScheme: "apps.googleusercontent.com.598161901649-tpqdibcoq8ieon70ukuhgljvhcg2qt6e",
        scopes: ["email"]
    };
    var googleProvider = new providers_1.TnsOaProviderGoogle(googleProviderOptions);
    return googleProvider;
}
function configureOAuthProviderFacebook() {
    var facebookProviderOptions = {
        openIdSupport: "oid-none",
        clientId: "694904407909206",
        clientSecret: "7305cebb64f445de65331271ce857c6c",
        redirectUri: "https://www.facebook.com/connect/login_success.html",
        scopes: ["email"]
    };
    var facebookProvider = new providers_1.TnsOaProviderFacebook(facebookProviderOptions);
    return facebookProvider;
}
function configureOAuthProviderMicrosoft() {
    var microsoftProviderOptions = {
        openIdSupport: "oid-full",
        clientId: "f376fa87-64a9-49a1-8b56-e0d48fc0810b",
        // redirectUri: "urn:ietf:wg:oauth:2.0:oob",
        redirectUri: "msalf376fa87-64a9-49a1-8b56-e0d48fc0810b://auth",
        urlScheme: "msalf376fa87-64a9-49a1-8b56-e0d48fc0810b",
        scopes: ["https://outlook.office.com/mail.read"]
    };
    var microsoftProvider = new providers_1.TnsOaProviderMicrosoft(microsoftProviderOptions);
    return microsoftProvider;
}
function tnsOauthLogin(providerType) {
    client = new nativescript_oauth2_1.TnsOAuthClient(providerType);
    client.loginWithCompletion(function (tokenResult, error) {
        if (error) {
            console.error("back to main page with error: ");
            console.error(error);
        }
        else {
            console.log("back to main page with access token: ");
            console.log(tokenResult);
        }
    });
}
exports.tnsOauthLogin = tnsOauthLogin;


function tnsOauthLogout() {
    if (client) {
        client.logout();
    }
}
exports.tnsOauthLogout = tnsOauthLogout;
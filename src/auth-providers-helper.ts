import {
    TnsOAuthClient,
    configureTnsOAuth,
    ITnsOAuthTokenResult
} from "nativescript-oauth2";
import {
    TnsOaProvider,
    TnsOaProviderOptionsFacebook,
    TnsOaProviderFacebook,
    TnsOaProviderOptionsGoogle,
    TnsOaProviderGoogle,
    TnsOaProviderOptionsMicrosoft,
    TnsOaProviderMicrosoft,
    TnsOaProviderOptionsIdentityServer,
    TnsOaProviderIdentityServer
} from "nativescript-oauth2/providers";

export function configureOAuthProviders() {
    // const microsoftProvider = configureOAuthProviderMicrosoft();
    // const googleProvider = configureOAuthProviderGoogle();
    // const facebookProvider = configureOAuthProviderFacebook();
    const identityServer = configureOAuthProviderIdentityServer();

    configureTnsOAuth([identityServer]);
}

// export function configureOAuthProviderGoogle(): TnsOaProvider {
//     const googleProviderOptions: TnsOaProviderOptionsGoogle = {
//         openIdSupport: "oid-full",
//         clientId:
//             "932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb.apps.googleusercontent.com",
//         redirectUri:
//             "com.googleusercontent.apps.932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb:/auth",
//         urlScheme:
//             "com.googleusercontent.apps.932931520457-buv2dnhgo7jjjjv5fckqltn367psbrlb",
//         scopes: ["email"]
//     };
//     const googleProvider = new TnsOaProviderGoogle(googleProviderOptions);
//     return googleProvider;
// }

// export function configureOAuthProviderFacebook(): TnsOaProvider {
//     const facebookProviderOptions: TnsOaProviderOptionsFacebook = {
//         openIdSupport: "oid-none",
//         clientId: "691208554415645",
//         clientSecret: "d8725ac416fa1bb1917ccffd1670e3c6",
//         redirectUri: "https://www.facebook.com/connect/login_success.html",
//         scopes: ["email"]
//     };
//     const facebookProvider = new TnsOaProviderFacebook(facebookProviderOptions);
//     return facebookProvider;
// }

// export function configureOAuthProviderMicrosoft(): TnsOaProvider {
//     const microsoftProviderOptions: TnsOaProviderOptionsMicrosoft = {
//         openIdSupport: "oid-full",
//         clientId: "f376fa87-64a9-49a1-8b56-e0d48fc0810b",
//         // redirectUri: "urn:ietf:wg:oauth:2.0:oob",
//         redirectUri: "msalf376fa87-64a9-49a1-8b56-e0d48fc0810b://auth",
//         urlScheme: "msalf376fa87-64a9-49a1-8b56-e0d48fc0810b",
//         scopes: ["openid", "https://outlook.office.com/mail.read"]
//     };
//     const microsoftProvider = new TnsOaProviderMicrosoft(
//         microsoftProviderOptions
//     );
//     return microsoftProvider;
// }

export function configureOAuthProviderIdentityServer(): TnsOaProvider {
    const identityServerProviderOptions: TnsOaProviderOptionsIdentityServer = {
        openIdSupport: 'oid-full',
        issuerUrl: 'authority-url',
        clientId: 'clientId zitadel app',
        urlScheme: 'org.nativescript.NSAuthExample',
        redirectUri: 'org.nativescript.NSAuthExample://auth',
        scopes: ['openid', 'profile', 'email', 'offline_access'],
    };
    const identityServerProvider = new TnsOaProviderIdentityServer(
        identityServerProviderOptions,
    );
    identityServerProvider.authorizeEndpoint = "oauth/v2/authorize";
    identityServerProvider.tokenEndpoint = "oauth/v2/token";
    identityServerProvider.revokeEndpoint = "oauth/v2/revoke";
    identityServerProvider.endSessionEndpoint = "oidc/v1/end_session";
    return identityServerProvider;
}

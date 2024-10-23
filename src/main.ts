import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { configureOAuthProviders } from './auth-providers-helper';
import { AppModule } from './app/app.module';

configureOAuthProviders();

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});



import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
//import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {LoginComponent} from './best.login.component';

bootstrap(LoginComponent).catch(err => console.error(err));

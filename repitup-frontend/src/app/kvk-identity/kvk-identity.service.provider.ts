import { environment } from '../../environments/environment';
import { KvkIdentityService } from './kvk-identity.service';

function loadWidget() {
  return new Promise((resolve, reject) => {
    const url = 'https://widget.mayersoftwaredevelopment.nl/kvk-identity-qr.js';
    const scriptElement = document.createElement('script');
    scriptElement.async = true;
    scriptElement.src = url;
    scriptElement.onload = () => {
      resolve(window.kvk);
    };
    window.document.head.appendChild(scriptElement);
  });
};

function KvkIdentityServiceFactory() {
  return new KvkIdentityService(environment.kvk.secret, loadWidget);
}

export const KvkIdentityServiceProvider = {
  provide: KvkIdentityService,
  useFactory: KvkIdentityServiceFactory
}

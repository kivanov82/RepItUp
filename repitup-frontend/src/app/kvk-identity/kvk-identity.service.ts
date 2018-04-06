import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class KvkIdentityService {
  private widgetPromise: Promise<Kvk>;

  constructor(private secret: string, loadWidget: Function) {
    this.widgetPromise = loadWidget();
  }

  async createWidget(container: ElementRef, questionId: string) {
    const kvk = await this.widgetPromise;

    const containerElement = container.nativeElement;
    const widgetElements = containerElement.querySelectorAll('.kvk-identity-qr');
    Array.prototype.forEach.call(widgetElements, (widgetElement) => {
      widgetElement.setAttribute('data-secret', this.secret);
    });

    // TODO: Load kvk widget asynchronously
    kvk.startWidgets(containerElement);

    return container;
  }

}

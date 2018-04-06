import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { KvkIdentityService } from '../kvk-identity/kvk-identity.service';
import { KvkIdentityServiceProvider } from '../kvk-identity/kvk-identity.service.provider';

@Component({
  selector: 'app-kvk-identity-widget',
  templateUrl: './kvk-identity-widget.component.html',
  providers: [KvkIdentityServiceProvider]
})
export class KvkIdentityWidgetComponent implements AfterViewInit {

  @Input() questionId: string;
  @Output() onAgree = new EventEmitter();
  @Output() onReject = new EventEmitter();
  @Output() onError = new EventEmitter();

  @ViewChild('container') container;
  @ViewChild('widget') widget;

  constructor(private identityService: KvkIdentityService) {}

  ngAfterViewInit() {
    this.identityService.createWidget(this.container, this.questionId)
      .then(() => {
        this.widget.nativeElement.onAgree = (sessionKey, data) => {
          this.onAgree.emit({ sessionKey, data });
        };
        this.widget.nativeElement.onReject = () => { this.onReject.emit() };
        this.widget.nativeElement.onError = () => { this.onError.emit() };
      });
  }
}

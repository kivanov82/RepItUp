import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { KvkIdentityService } from '../kvk-identity/kvk-identity.service';
import { KvkIdentityServiceProvider } from '../kvk-identity/kvk-identity.service.provider';

@Component({
  selector: 'app-kvk-identity-widget',
  templateUrl: './kvk-identity-widget.component.html',
  styleUrls: ['./kvk-identity-widget.component.css'],
  providers: [KvkIdentityServiceProvider]
})
export class KvkIdentityWidgetComponent implements AfterViewInit {

  @Input() questionId: string;
  @ViewChild('widget') widget;

  constructor(private identityService: KvkIdentityService) {}

  ngAfterViewInit() {
    this.identityService.createWidget(this.widget, this.questionId);
  }
}

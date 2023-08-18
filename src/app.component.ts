import { Component, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { EmitType, detach } from '@syncfusion/ej2-base';
import {
  UploaderComponent,
  RemovingEventArgs,
} from '@syncfusion/ej2-angular-inputs';
import {
  createSpinner,
  showSpinner,
  hideSpinner,
} from '@syncfusion/ej2-popups';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';

/**
 * Default Uploader Default Component
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('defaultupload')
  public uploadObj: UploaderComponent;

  public path: Object = {
    saveUrl: 'https://localhost:7060/Uploader/Save',
    removeUrl: 'https://localhost:7060/Uploader/Remove',
  };
  public dropElement: HTMLElement = document.getElementsByClassName(
    'control-fluid'
  )[0] as HTMLElement;

  public onFileRemove(args: RemovingEventArgs): void {
    args.postRawFile = false;
  }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NfcReaderComponent } from './nfc-reader';

@NgModule({
  declarations: [
    NfcReaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(NfcReaderComponent),
  ],
  exports: [
    NfcReaderComponent
  ]
})
export class NfcReaderComponentModule {}

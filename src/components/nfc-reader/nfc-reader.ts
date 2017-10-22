import { Component } from '@angular/core';
import {Ndef, NFC} from "@ionic-native/nfc";

/**
 * Generated class for the NfcReaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'nfc-reader',
  templateUrl: 'nfc-reader.html'
})
export class NfcReaderComponent {

  text: string;

  constructor(private nfc: NFC, private ndef: Ndef) {
    console.log('Hello NfcReaderComponent Component');
    this.text = 'Hello World';
  }

  triggerListener(){
	  this.nfc.addNdefListener(() => {
		  console.log('successfully attached ndef listener');
	  }, (err) => {
		  console.log('error attaching ndef listener', err);
	  }).subscribe((event) => {
		  console.log('received ndef message. the tag contains: ', event.tag);
		  console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));

		  let message = this.ndef.textRecord('Hello world');
		  this.nfc.share([message]).then(function (e) {
              alert(e);
		  }).catch(function(e){
		    alert("error"+e);
          });
	  });
  }

}

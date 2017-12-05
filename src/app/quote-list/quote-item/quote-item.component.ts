import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {

  // "theQuote" is an object that
  // this component needs to receive from its parent
  @Input() theQuote: any;

  // "deleteNotifier" is our "text messaging" object
  @Output() deleteNotifier = new EventEmitter();

  quoteEdit: string = "";

  constructor() { }

  ngOnInit() {
  }

  notifyForDeletion() {
      // sends the "text message" to the parent
      this.deleteNotifier.emit( this.theQuote.id );
  }                    //                     |
                       // send the parent the ID of this quote
}

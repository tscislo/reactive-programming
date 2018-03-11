import {Component, EventEmitter} from '@angular/core';
// import {Observable} from "rxjs/Observable";
import * as Rx from 'rxjs/Rx'

@Component({
    selector: 'app-root',
    template: `
        <!--<button (click)="ee1.emit('1')">Button 1</button>-->
        <!--<button (click)="ee2.emit('2')">Button 2</button>-->
        <!--<button (click)="ee1.emit('1')">Button 3</button>-->
        <!--<button (click)="ee2.emit('2')">Button 4</button>-->
        <app-canvas [delay]="0"></app-canvas>
        <app-canvas [delay]="600"></app-canvas>
    `,
    styles: []
})
export class AppComponent {

    public ee1 = new EventEmitter();
    public ee2 = new EventEmitter();

    constructor() {
        // this.ee1.subscribe(() => {
        //     console.log('button1')
        // })
        /**
         * Można spróbować na canvas zrobić prostą malowankę w ramach której
         * malujemy naciskając strzałki a dodatkowe efekty dodajemy przytrzymując jakiś klawisz na klawiaturze
         *
         */
        // Rx.Observable.merge(this.ee1, this.ee2)
        //     .delay(500)
        //     .subscribe((val) => {
        //     console.log(val)
        // });
        //
        // const subject = new Rx.Subject();
        // subject.next('subject1');
        // subject.subscribe(x => console.log(x)); // tylko subject2 (subject1 będzie zignorowany)
        // subject.next('subject2');
        //
        //
        // const subject2 = new Rx.BehaviorSubject(null);
        // subject2.next('behaviorSubject');
        // subject2.subscribe(x => console.log(x)); // behaviorSubject


    }

}

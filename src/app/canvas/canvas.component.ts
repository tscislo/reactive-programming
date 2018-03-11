import {Component, Input, OnInit, ViewChild} from '@angular/core';
import * as Rx from 'rxjs/Rx'


@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

    @Input() delay;
    public mouseStream;
    private isMouseDown = false;

    @ViewChild('canvas') canvasEl;
    public ctx;

    constructor() {
    }

    ngOnInit() {
        this.ctx = this.canvasEl.nativeElement.getContext('2d');
        this.mouseStream = Rx.Observable.fromEvent(this.canvasEl.nativeElement, 'mousemove');
        Rx.Observable.fromEvent(this.canvasEl.nativeElement, 'mouseup').subscribe(() => {
            this.ctx.beginPath();
            this.isMouseDown = false;
        })
        Rx.Observable.fromEvent(this.canvasEl.nativeElement, 'mousedown').subscribe(() => {
            this.isMouseDown = true;
        })
        this.mouseStream
            .filter(() => this.isMouseDown)
            .delay(this.delay)
            .subscribe((event) => {
                this.drawLine(event.pageX - this.canvasEl.nativeElement.offsetLeft, event.pageY - this.canvasEl.nativeElement.offsetTop)
            })
    }

    public drawLine(x, y) {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }

}

import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public hasStarted: boolean = false;
  public msgNumber: number = 0;

  private numbers: Observable<number> = interval(300);
  private observableCount;

  public isBadgeHidden() {
    return this.msgNumber === 0;
  }

  public start() {
    this.hasStarted = true;

    this.observableCount = this.numbers.subscribe((x) => {
      this.msgNumber = this.msgNumber + 1;
    });
  }

  public stop() {
    this.hasStarted = false;

    this.observableCount.unsubscribe();
  }

  public clear() {
    this.msgNumber = 0;
  }
}

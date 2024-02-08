import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subject, timer } from 'rxjs';
import { debounce, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[mrxDelayedValue]'
})
export class DelayedValueDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private delayTime = 1500

  @Input() emitDelay!: number;
  @Output() delayedInput = new EventEmitter<Event>();

  constructor(private elementRef: ElementRef<HTMLInputElement>) { }

  ngOnInit(): void {
    if (this.emitDelay) {
      this.delayTime = this.emitDelay
    }

    fromEvent(this.elementRef.nativeElement, 'input')
      .pipe(
        debounce(() => timer(this.delayTime)),
        distinctUntilChanged(
          (x: string, y: string) => x === y,
          (event: Event) => (event.target as HTMLInputElement).value
        ), // 6️⃣
        takeUntil(this.destroy$),
      )
      .subscribe(e => this.delayedInput.emit(e));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

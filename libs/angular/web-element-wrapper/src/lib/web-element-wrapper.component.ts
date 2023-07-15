import { Component, ElementRef, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface WebElementWrapperOptions {
  loadRemoteBundle: () => Promise<void>;
  selector: string;
}

@Component({
  selector: 'app-web-component-wrapper',
  standalone: true,
  template: ``
})
export class WebElementWrapperComponent implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly route = inject(ActivatedRoute);

  @Input() options!: WebElementWrapperOptions;

  element!: HTMLElement;

  async ngOnInit() {
    const { loadRemoteBundle, selector } = this.options || this.route.snapshot.data as WebElementWrapperOptions;
    await loadRemoteBundle();

    this.element = document.createElement(selector);
    this.elementRef.nativeElement.appendChild(this.element);
  }

  ngOnDestroy() {
    if (this.element) {
      this.elementRef.nativeElement.removeChild(this.element);
    }
  }
}

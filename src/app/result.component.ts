import { Component, Input } from "@angular/core";

@Component({
    selector: 'results',
    template: `<div>results</div>`
})
export class ResultComponent {
    @Input() result: {};
}

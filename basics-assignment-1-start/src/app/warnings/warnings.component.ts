import { Component } from "@angular/core";

@Component ({
    selector : 'app-warnings',
    template : `<h3>
                This is a Warning Message.
                </h3>`,
    styles : [`h3 {
                color: blue
            }`]
})
export class WarningsComponent {

}
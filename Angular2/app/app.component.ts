import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{MyName}}</h1>'
})
export class AppComponent {

    public MyName: string;

    constructor() {
        this.MyName = "Sumeet Kumar";
    }

     

}

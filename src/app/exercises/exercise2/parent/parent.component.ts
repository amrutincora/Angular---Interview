import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: []
})
export class ParentComponent{
    parentfield:string = '';
    toChildComponent = ''; 

    onSubmit(){
        console.log(this.parentfield);
        this.toChildComponent = this.parentfield;
    }

}
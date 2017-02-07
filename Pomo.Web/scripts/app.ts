import { Component } from "@angular/core"
import { MyModel } from "./model"

@Component({
    selector: `my-app`,
    template: `<div>Hello from </div>`
})

export class MyApp {
    model = new MyModel();
    getCompiler() {
        return this.model.compiler;
    }
}
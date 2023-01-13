import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Moment from "src/app/interface/Moment";

@Component({
    selector: "app-moment-form",
    templateUrl: "./moment-form.component.html",
    styleUrls: ["./moment-form.component.scss"],
})
export class MomentFormComponent {
    @Output() onSubmit = new EventEmitter<Moment>();
    @Input() btnText!: string;

    momentForm!: FormGroup;

    //Inicializando o formulário, não usamos o construtor pois estamos utilizando o angular.
    ngOnInit(): void {
        this.momentForm = new FormGroup({
            id: new FormControl(""),
            title: new FormControl("", [Validators.required]),
            description: new FormControl("", [Validators.required]),
            image: new FormControl(""),
        });
    }

    get title() {
        return this.momentForm.get("title")!;
    }

    get description() {
        return this.momentForm.get("description")!;
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        this.momentForm.patchValue({ image: file });
    }

    submit() {
        if (this.momentForm.invalid) return;
        console.log(this.momentForm.value);

        this.onSubmit.emit(this.momentForm.value);
    }
}

import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "app-moment-form",
    templateUrl: "./moment-form.component.html",
    styleUrls: ["./moment-form.component.scss"],
})
export class MomentFormComponent {
    @Input() btnText!: string;

    momentForm!: FormGroup;

    //Inicializando o formulário, não usamos o construtor pois estamos utilizando o anruglar.
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

    onSubmit() {
        if (this.momentForm.invalid) return;
        console.log("Send the form");
    }
}

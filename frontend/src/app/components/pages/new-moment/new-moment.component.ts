import { Component } from "@angular/core";
import { Router } from "@angular/router";

import Moment from "src/app/interface/Moment";
import { MomentService } from "src/services/moment.service";
import { MessagesService } from "src/services/messages.service";

@Component({
    selector: "app-new-moment",
    templateUrl: "./new-moment.component.html",
    styleUrls: ["./new-moment.component.scss"],
})
export class NewMomentComponent {
    constructor(
        private momentService: MomentService,
        private messagesService: MessagesService,
        private router: Router
    ) {}

    btnText: string = "Share!";

    async createHandler(moment: Moment) {
        const formData = new FormData();
        formData.append("title", moment.title);
        formData.append("description", moment.description);

        if (moment.image) formData.append("image", moment.image);

        //todo
        await this.momentService.createMoment(formData).subscribe();
        //exibir msg

        this.messagesService.add("Moment created successfully!");
        //redirect
        this.router.navigate(["/"]);
    }
}

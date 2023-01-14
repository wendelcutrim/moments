import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import Moment from "src/app/interface/Moment";
import { MomentService } from "src/services/moment.service";
import { MessagesService } from "src/services/messages.service";

@Component({
    selector: "app-edit-moment",
    templateUrl: "./edit-moment.component.html",
    styleUrls: ["./edit-moment.component.scss"],
})
export class EditMomentComponent implements OnInit {
    moment!: Moment;
    btnText: string = "Edit";

    constructor(
        private momentsService: MomentService,
        private messageService: MessagesService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get("id"));
        this.momentsService.getMoment(id).subscribe((item) => {
            this.moment = item.data;
        });
    }

    async editHandler(momentData: Moment) {
        const id = this.moment.id;
        const formData = new FormData();

        formData.append("title", momentData.title);
        formData.append("description", momentData.description);
        if (momentData.image) {
            formData.append("image", momentData.image);
        }

        await this.momentsService.updateMoment(id!, formData).subscribe();
        await this.messageService.add(`Moment ${id} updated successfully!`);
        await this.router.navigate(["/"]);
    }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { MomentService } from "src/services/moment.service";
import { enviroment } from "src/environments/enviroments";
import Moment from "src/app/interface/Moment";

import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-moment",
    templateUrl: "./moment.component.html",
    styleUrls: ["./moment.component.scss"],
})
export class MomentComponent implements OnInit {
    moment?: Moment;
    baseApiUrl = enviroment.API_BASE_URL;
    faTimes = faTimes;
    faEdit = faEdit;

    constructor(
        private route: ActivatedRoute,
        private momentService: MomentService
    ) {}

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get("id"));

        this.momentService
            .getMoment(id)
            .subscribe((item) => (this.moment = item.data));
    }
}

import { Component, OnInit } from "@angular/core";

import { MomentService } from "src/services/moment.service";
import Moment from "src/app/interface/Moment";
import { enviroment } from "./../../../../environments/enviroments";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    //System reference (response api), when changed, update the attibute moment to reflect the changes in the web page
    allMoments: Array<Moment> = [];

    //Show on webpage
    moments: Array<Moment> = [];
    baseApiUrl: string = enviroment.API_BASE_URL;

    faSearch = faSearch;
    searchTerm: string = "";

    constructor(private momentService: MomentService) {}

    ngOnInit(): void {
        this.momentService.getMoments().subscribe((items) => {
            const { data } = items;

            data.map((item) => {
                item.created_at = new Date(item.created_at!).toLocaleString(
                    "pt-BR"
                );
            });

            this.allMoments = data;
            this.moments = data.reverse();
        });
    }

    search(event: Event): void {
        const target = event.target as HTMLInputElement;
        const { value } = target;

        this.moments = this.allMoments.filter((moment) =>
            moment.title.toLowerCase().includes(value)
        );
    }
}

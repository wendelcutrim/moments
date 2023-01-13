import { Component } from "@angular/core";
import { MessagesService } from "src/services/messages.service";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-messages",
    templateUrl: "./messages.component.html",
    styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent {
    constructor(public messagesService: MessagesService) {}

    faTimes = faTimes;
}

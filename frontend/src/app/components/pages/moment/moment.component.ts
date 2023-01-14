import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
    FormGroup,
    FormControl,
    Validators,
    FormGroupDirective,
} from "@angular/forms";

import { MomentService } from "src/services/moment.service";
import { CommentService } from "src/services/comment.service";
import { MessagesService } from "src/services/messages.service";

import { enviroment } from "src/environments/enviroments";
import Moment from "src/app/interface/Moment";
import Comment from "src/app/interface/Comment";

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

    commentForm!: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private momentService: MomentService,
        private messagesService: MessagesService,
        private commentService: CommentService
    ) {}

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get("id"));

        this.momentService
            .getMoment(id)
            .subscribe((item) => (this.moment = item.data));

        this.commentForm = new FormGroup({
            text: new FormControl("", [Validators.required]),
            username: new FormControl("", [Validators.required]),
        });
    }

    get text() {
        return this.commentForm.get("text")!;
    }

    get username() {
        return this.commentForm.get("username")!;
    }

    async onSubmit(formDirective: FormGroupDirective) {
        if (this.commentForm.invalid) return;

        const data: Comment = this.commentForm.value;
        data.momentId = Number(this.moment!.id);

        await this.commentService
            .createComment(data)
            .subscribe((comment) => this.moment!.comments!.push(comment.data));

        await this.messagesService.add("Comment created successfully!");

        //clear the form data on template
        await this.commentForm.reset();

        //clear the form data on TS
        await formDirective.resetForm();
    }

    async removeHandler(id: number) {
        await this.momentService.deleteMoment(id).subscribe();
        this.messagesService.add("Moment removed successfully");
        this.router.navigate(["/"]);
    }
}

import { Component } from "@angular/core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    mobileMenuIcon = faBars;
    closeMenuIcon = faTimes;
    showMobileMenu: boolean = false;

    constructor(private route: ActivatedRoute) {}

    handleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu;
    }
}

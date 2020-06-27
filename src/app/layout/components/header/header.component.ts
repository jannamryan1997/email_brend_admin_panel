import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit, OnDestroy {
    hasSelectedContacts: boolean;

    private dialogRef:any;
    public searchInput = new FormControl('');

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

    public toggleSidebar():void{}
}
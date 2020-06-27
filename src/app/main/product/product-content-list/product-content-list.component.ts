import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ECommerceFakeDb } from 'app/fake-db/fake-db';

@Component({
    selector: "app-product-content-list",
    templateUrl: "product-content-list.component.html",
    styleUrls: ["product-content-list.component.scss"]
})

export class ProductContentlistComponent implements OnInit, OnDestroy {
    dataSource = [];
    displayedColumns = ['id', 'image', 'name', 'category', 'price', 'quantity', 'active'];


    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.dataSource = ECommerceFakeDb.products;
        console.log(this.dataSource);
        
    }

    ngOnDestroy() { }

}


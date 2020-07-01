import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';
import { ECommerceFakeDb } from 'app/fake-db/fake-db';

@Component({
    selector: "app-main-sidebar",
    templateUrl: "main-sidebar.component.html",
    styleUrls: ["main-sidebar.component.scss"]
})

export class MainSidebarComponent implements OnInit, OnDestroy {

    
    public category = [
        {
            name: 'All Contacts',
            filterBy:'all',
            children: [
                { name: 'All Contacts Chiled' },
            ]
        }, 
        {
            name: 'Freequently Cntacted',
            filterBy:'frequent',
            children: [
                {name: 'Freequently Cntacted Chiled'}, 
            ]
        },
        {
            name: 'Starred Contacts',
            filterBy:'starred',
            children: []
        },

    ];


 
    user: any;
    filterBy: string = 'all';
    @Input() productsSidebarContent: boolean;
    @Input() product;
    @Output() onchange = new EventEmitter<any>();

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EcommerceProductsService} _ecommerceProductsService
     */
    constructor(
        // private _ecommerceProductsService: EcommerceProductsService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }


    /**
     * On init
     */
    ngOnInit(): void {
        console.log(this.product, "prodcut");


    }


    /**
     * Change the filter
     *
     * @param filter
     */
    public changeFilter(filter): void {
        console.log(filter);
        
        this.filterBy = filter;
        let prductItem;

        if (filter === 'all') {
            prductItem = ECommerceFakeDb.products;
            this.product = prductItem;

        }
        else if (filter === 'frequent') {
            prductItem = ECommerceFakeDb.productsFiltre;
            this.product = prductItem;
        }
        else if (filter === 'starred') {
            prductItem = ECommerceFakeDb.productsStarred;
            this.product = prductItem;
        }
        this.onchange.emit(prductItem);

    }





    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}

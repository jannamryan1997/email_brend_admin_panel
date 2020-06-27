import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ContactFormModal } from 'app/layout/modals/contacts/contact-form.modal';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ECommerceFakeDb } from 'app/fake-db/fake-db';

@Component({
    selector: "app-product",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.scss"]
})

export class ProductComponent implements OnInit, OnDestroy {
  public  dataSource = [];
    displayedColumns = ['id', 'image', 'name', 'category', 'price', 'quantity', 'active'];
    hasSelectedContacts: boolean;
    private _unsubscribeAll: Subject<any>;

    private dialogRef: any;
    public searchInput = new FormControl('');


    constructor(public _matDialog:MatDialog,private _httpClient:HttpClient) {
        this._unsubscribeAll = new Subject();
     }

    ngOnInit() { 
        this.dataSource = ECommerceFakeDb.products;
        console.log(this.dataSource);
    }

    newContact(): void {
        this.dialogRef = this._matDialog.open(ContactFormModal, {
            panelClass: 'contact-form-dialog',
            data: {
                action: 'new'
            }
        });

    }

    public changeFilter(event){
        this.dataSource=event;
        console.log(this.dataSource);
        
    }







    ngOnDestroy() { }
}
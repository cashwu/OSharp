import { Component, OnInit, OnDestroy, } from '@angular/core';
import { SettingsService, } from './settings.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 's-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit, OnDestroy {

    constructor(private _service: SettingsService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}

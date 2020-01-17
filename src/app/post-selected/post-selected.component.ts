import { Component, OnInit } from '@angular/core';
import { ApiService, PostItem } from 'src/app/api.service';

@Component({
    selector: 'app-post-selected',
    templateUrl: './post-selected.component.html',
    styleUrls: ['./post-selected.component.less']
})
export class PostSelectedComponent implements OnInit {

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {

    }

    get selected(): PostItem {
        return this.apiService.selectedPost;
    }

}

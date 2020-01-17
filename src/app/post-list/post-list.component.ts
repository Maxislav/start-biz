import { Component, OnInit } from '@angular/core';
import { ApiService, PostItem } from 'src/app/api.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {
    postList: Array<PostItem>;

    constructor(private apiService: ApiService) {
        this.postList = apiService.postList;
    }

    ngOnInit() {
    }


    onSelect(item: PostItem): void {
        this.apiService.setSelected(item);
    }

}

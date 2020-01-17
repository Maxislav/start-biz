import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface PostItem {
    id: number;
    title: string;
    body: string;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    postList: Array<PostItem> = [];
    selectedPost: PostItem = {
        id: null,
        title: null,
        body: null
    };

    constructor(private http: HttpClient) {
    }

    init(): void {
        this.getList()
            .subscribe(data => {
                data.forEach(item => {
                    this.postList.push(item);
                });
            });
    }


    addItem(postItem: { title: string, body: string }) {
        const id = Math.max.apply(null, this.postList.map(item => item.id)) + 1;
        const data: PostItem = {...{id}, ...postItem};
        // const arr = [...this.postList, ...data];
        this.saveList(data)
            .subscribe(res => {
                this.clearList();
                this.init();
            });

    }

    saveList(item: PostItem): Observable<any> {
        return this.http.post('https://mighty-meadow-71062.herokuapp.com/posts', item);
    }

    getList(): Observable<Array<PostItem>> {
        return this.http.get<Array<PostItem>>('https://mighty-meadow-71062.herokuapp.com/posts');
    }

    setSelected(postItem: PostItem): void {
        this.selectedPost = postItem;
    }

    private clearList() {
        this.postList.length = 0;
    }


}


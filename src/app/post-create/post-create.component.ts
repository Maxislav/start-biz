import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.less']
})
export class PostCreateComponent {

    @ViewChild('postForm') postForm: any;

    model: { title: string, body: string } = {title: null, body: null};

    constructor(private apiService: ApiService) {
    }

    onSubmit() {
        if (this.postForm.valid) {
            this.apiService.addItem(this.model);
        }
    }
}

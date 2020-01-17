import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.less']
})
export class PostCreateComponent implements AfterViewInit {

    @ViewChild('postForm') postForm: any;

    model: { title: string, body: string } = {title: null, body: null};

    constructor(private apiService: ApiService) {
    }


    ngAfterViewInit() {


    }

    onSubmit() {
        //console.log(this.postForm.valid);
      //  console.log(this.model);
        if (this.postForm.valid) {
            this.apiService.addItem(this.model);
        }


    }

}

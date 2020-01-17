import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from 'src/app/api.service';
import { PostListComponent } from 'src/app/post-list/post-list.component';
import { PostSelectedComponent } from './post-selected/post-selected.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostSelectedComponent,
        PostCreateComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(apiService: ApiService) {
        apiService.init();
    }
}

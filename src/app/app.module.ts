import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { SearchComponent } from './search.component';
import { ResultComponent } from './result.component';
import { YoutubeComponent } from './youtube.component';

import { SearchService } from './search.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SearchComponent, ResultComponent, YoutubeComponent ],
  providers:    [ SearchService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

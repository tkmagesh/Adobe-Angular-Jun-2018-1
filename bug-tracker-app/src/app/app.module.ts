import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { BugOperationsService } from './bugTracker/services/bugOperations.services';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { BugStorageService } from './bugTracker/services/bugStorage.service';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule
  ],
  providers: [
  	BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

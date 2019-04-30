import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyService } from './my-service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [MyService],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

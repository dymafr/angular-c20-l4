import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'my-app',
  template: `
  <h3>Combinaison des API responsive et statique</h3>
  <h4>Elargissez / réduisez la fenêtre </h4>
  <div 
      fxLayout.xs="row"
      fxLayout="column"
      class="container">
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign.xs="flex-start"
         fxFlexAlign="flex-end">
    </div>
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign.xs="flex-start"
         fxFlexAlign="flex-end">
    </div>
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign.xs="flex-start"
         fxFlexAlign="flex-end">
    </div>
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign.xs="flex-start"
         fxFlexAlign="flex-end">
    </div>
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign.xs="flex-start"
         fxFlexAlign="flex-end">
    </div>
</div>
`,
  styles: [`
    .container {
      border: solid 1px #b6b6b6;
      background: skyblue;
      height: 400px;
      width: 100%;
    }
    
    .block {
      background-color: blue;
      height: 50px;
      width: 50px;
    }`
  ]
})

export class AppComponent {
 
}

@NgModule({
  imports: [ 
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
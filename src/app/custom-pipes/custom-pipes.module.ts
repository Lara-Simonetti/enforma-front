import { NgModule } from '@angular/core';
import { ErrorMessageMapperPipe } from "./pipes/error-message-mapper.pipe";

@NgModule({
    imports: [],
    declarations: [ErrorMessageMapperPipe],
    exports: [ErrorMessageMapperPipe],
    providers: [ErrorMessageMapperPipe]
})
export class CustomPipesModule { }

import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

@NgModule({
    imports: [ FontAwesomeModule ],
    exports: [ FontAwesomeModule ],
    bootstrap: [],
})
export class IconsModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, far);
    }
}
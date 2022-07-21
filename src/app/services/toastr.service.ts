import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastrService  {

    constructor(public toastr: ToastsManager) {}

    /*
    *
    * success   'You are awesome!', 'Success!'
    * error     'This is not good!', 'Oops!'
    * warning   'You are being warned.', 'Alert!'
    * info      'Just some information for you.', 'Info!'
    * custom
    */

    showSuccess(entity: string, action: string) {
        this.toastr.success('Your ' + entity + ' ' + action +' Successfully.', 'Success!', {toastLife: 5000});
    }

    showError(error) {
        this.toastr.error( error, 'Oops! We have an Error..!', {toastLife: 5000});
    }
    
    showWarning(message: string) {
        this.toastr.warning(message, 'Alert!', {toastLife: 5000});
    }

    showInfo(entity: string, action: string) {
        this.toastr.info('Your ' + entity + ' ' + action + ' Successfully.', 'Info!', {toastLife: 5000});
    }
    
    showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
    }
}
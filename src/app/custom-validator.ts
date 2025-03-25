import{AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
export function forbiddenUsernameValidator(forbiddenName: string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors|null=>{
        const forbidden=control.value?.toLowerCase()===forbiddenName.toLowerCase();
        return forbidden ?{forbiddenUserName:{value:control.value}}:null;
    };
}
export class CustomValidator {
}

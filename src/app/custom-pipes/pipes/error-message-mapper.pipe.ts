import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessageMapper'
})
export class ErrorMessageMapperPipe implements PipeTransform {

  transform(error: any) {
    if (error.statusText === "UNAUTHORIZED") {
      return "Su sesión ha caducado, por favor vuelva a iniciar sesión.";
    }
    else if (error.statusText === "UNPROCESSABLE ENTITY") {
      return "No hemos podido identificarlo, por favor vuelva a iniciar sesión.";
    }
    else {
      return "Ha ocurrido un error. " + error.message;
    }
  }

}

import { Injectable } from '@angular/core';
import { ToastrConfig, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrConfigService {
  getDefaultConfig(): Partial<IndividualConfig> {
    return {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 5000,
      extendedTimeOut: 1000,
      preventDuplicates: true,
      newestOnTop: true,
      showEasing: 'ease-in-out',
      hideEasing: 'ease-in-out',
      showMethod: 'slideDown',
      hideMethod: 'slideUp'
    };
  }
}

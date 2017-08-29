import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { IBreadcrumb } from "../mc-breadcrumbs.shared";

interface IPostProcessFunc {
  (crumbs: IBreadcrumb[]) : Promise<IBreadcrumb[]> | Observable<IBreadcrumb[]> | IBreadcrumb[];
}

@Injectable()
export class McBreadcrumbsConfig {
  postProcess : IPostProcessFunc
}

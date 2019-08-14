import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPersonalScore } from '../_models/interfaces/personal-score.interface';

@Injectable()
export class BaseService {

  public selectedChange: BehaviorSubject<IPersonalScore> = new BehaviorSubject<IPersonalScore>(null);

}

import { Injectable }      from '@angular/core';
import { Http,Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Centres} from '../models/Centres';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CentreService {
  

  private mongoURL: string = "https://api.mlab.com/api/1/databases/my_filapp_database/collections/";
  private apiKey: string = "QASWwDr0wEXEyyBUSniEc8mtRvqdRUuL";

  constructor(private http:Http) {
  }

  getCentres (){
  return this.http.get(this.mongoURL + "Centres" + "?apiKey=" + this.apiKey)
                  .map(res => res.json());
  
  }
}
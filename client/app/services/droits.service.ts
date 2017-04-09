import  {Injectable} from '@angular/core';
import  {Http, Response} from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class HTTPDroitsService{
	
	constructor(private _http: Http) {}

	getText(){
		/*
		return this._http.get('test.php')
		.map((response:Response) => response.text());
		*/

		return this._http.get('http://localhost/test.php')
		.map(res => res.text());

	}
}

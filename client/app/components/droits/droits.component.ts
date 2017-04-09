
import {Component} from '@angular/core';
import {HTTPDroitsService} from '../../services/droits.service';


export class Droits{

	id : number;
	droit: String;
}

@Component ({
    moduleId: module.id,
	selector : 'droits',
	templateUrl: 'droits.component.html',
	providers:[HTTPDroitsService]

})


export class DroitsComponent {
	//Constructeur qui cree une variable de HTTPDroitService
	constructor(private _droitsservice: HTTPDroitsService){};

	data: string
	/*
	ngOnInit(){

		//Le service HTTPDroit Service qui recupere les donnees du fichier test.php et ecrit dans la div avec l'id Madiv
		this._droitsservice.getText().subscribe(res =>this.setData(res));
		
	}
	*/
	setData(response : string){

		this.data = response;
		document.getElementById('Madiv').innerHTML = this.data;
	}

	title : String = 'Infos Pratiques';

	droits: Droits[] = [{id: 1, droit: "Droits 1"},{id: 2,droit: "Droits 2"},{id:3,droit: "Droits 3"}];

	show : boolean = false;
	show2 : boolean = false;
	droite : Droits;
	identi : number;
	//Cache ou fait apparaitre le menu 
	clickonme(){

		this.show = !this.show;
	}

	clickondroit(droitt : Droits): void{

		this.droite = droitt;
		this.identi = droitt.id;
		this.show2 = !this.show2;

		if(this.identi == 1){

			this._droitsservice.getText().subscribe(res =>this.setData(res));
		}

		if(this.identi == 2){

			this._droitsservice.getText().subscribe(res =>this.setData(res));
		}

		if(this.identi == 3){

			this._droitsservice.getText().subscribe(res =>this.setData(res));
		}
	}
}
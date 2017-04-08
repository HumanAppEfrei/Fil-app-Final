import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';

import {MarkerService} from '../../services/marker.service';
import {CentreService} from '../../services/centre.service';
import {Centres} from '../../models/Centres';
import { Http,Response }  from '@angular/http';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'prevention',
  templateUrl: 'prevention.component.html',
  providers: [MarkerService,CentreService]
})
export class PreventionComponent {
  // Zoom level
  zoom: number = 12;
  // Start Position
  lat: number ;
  lng: number ;
  // Values
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;
  // Markers
  markers: marker[];
  centres:Centres[];
  constructor(private _markerService:MarkerService, private centreService:CentreService){
    this.markers = this._markerService.getMarkers();
    navigator.geolocation.watchPosition((position) =>{
      this.lat =position.coords.latitude;
      this.lng =position.coords.longitude;
    });

  }
    ngOnInit(): void {
        this.centreService.getCentres().subscribe(
                       data => this.centres = data,
        errorMessage => alert(" Error is : " + errorMessage),
        () => console.log("finished")
     );
    }  
  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker: '+marker.name+' at index '+index);
  }
  
  mapClicked($event:any){
    console.log('Map Clicked');
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
    
    this.markers.push(newMarker);
  }
  
  markerDragEnd(marker:any, $event:any){
    console.log('dragEnd', marker, $event);
    
    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable:false
    }
    
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
    
    this._markerService.updateMarker(updMarker, newLat, newLng);
  }
  
  
}

 // Marker Type
  interface marker{
    name?:string;
    lat: number;
    lng: number;
    draggable:boolean;
  }

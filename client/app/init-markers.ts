export class Init{
    load(){
       
            
            var markers = [
                {
                    name:'Hopital Paul Brousse',
                    lat: 48.794961,
                    lng: 2.363536999999951,
                    draggable: false
                },
             
                {
                    name: 'Hopital Gustave Roussy',
                    lat: 48.7943873,
                    lng: 2.348361000000068,
                    draggable: false
                },
                {
                    name: 'Centre Hospitalier Guiraud',
                    lat: 48.7885978,
                    lng: 2.358671700000059,
                    draggable: false
                }
            ];
            
            localStorage.setItem('markers', JSON.stringify(markers));
        
    }
}
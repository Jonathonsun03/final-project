import eastasiancluster from '../data/EastAsianCluster.geojson.js';
import southasiancluster from '../data/SouthAsianCluster.geojson.js';
import southeastasiancluster from '../data/SoutheastAsianCluster.geojson.js';


function filterResearchData(data) {
  const cat1 = [];
  const cat2 = [];
  const cat3 = [];
  const cat4 = []
  // iterate over data
  if(data.col.field == cat1) {
    return{
      'type':
    }
    cat1.append();
  } else if(data.col.field == cat2){
    cat2.append();
  } else if(data.col.field == cat3){
    cat3.append()
  } else if(data.col.field == cat4){

  }
}

const clusterTypeColors = {
  "Low Frequency": "blue",
}

function loadResearchData(currentSlideIndex) {
  layerGroup.clearLayers(); 
  if(currentSlideIndex == 3) {
    L.geoJSON(eastasiancluster, {
      style: (feature) => {
        const ct = '...'; //<-- cluster type
        const color = clusterTypeColors[ct];
        return {fill: null, color: 'black'}
      },
    }).addTo(layerGroup);
    };
  else if(currentSlideIndex == 4) {
    L.geoJSON(southasiancluster, {
      style: {fill: null, color: 'black'},
    }).addTo(layerGroup);
    };
  else if(currentSlideIndex == 5) {
    L.geoJSON(southeastasiancluster, {
      style: {fill: null, color: 'black'},
    }).addTo(layerGroup);
  }
}

export{

}
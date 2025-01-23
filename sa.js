document.getElementById("showMapBtn")
addEventListener("click", function() {
   
    const mapContainer = document.getElementById("sa-map-container");
    mapContainer.style.display = "block"; 
})

document.getElementById("showNewYorkMapBtn")
addEventListener("click", function() {
    
    const mapContainer = document.getElementById("sa-new-map-container");
    mapContainer.style.display = "block"; 
});



function addActivity() {
    const activityList = document.getElementById('sa-activityList'); 
    const newActivity = document.getElementById('sa-newActivity').value; 
        if (newActivity.trim() !== '') 
    { 
    const listItem = document.createElement('li'); 
    listItem.classList.add('sa-li');
    listItem.textContent = newActivity;
    activityList.appendChild(listItem); 
    document.getElementById('sa-newActivity').value = ''; 
    } 
        else { alert('Ju lutem shkruani një aktivitet!'); 
  }
   } 




 

// TODO: add code here
window.addEventListener('load', function() {
    const container = document.getElementById('container');
    let sortedAstronauts = [];
    // console.log(sortedAstronauts);
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data){
                console.log(data);
                for (let i=0; i<data.length; i++) {
                    container.innerHTML+=(`
                    <div class="astronaut">
                    <div class="bio">
                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${data[i].hoursInSpace}</li>
                    <li>Active: ${data[i].active}</li>
                    <li>Skills: ${data[i].skills.join(", ")}</li>
                    </ul>
                    </div>
                    <img class="avatar" src=${data[i].picture}>
                    </div>`
                )};
        });
    });
            // console.log(json);
            // console.log(sortedAstronauts);
            // for (i=0; i<json.length; i++){
                // console.log(json[i]);
                
                
                // if (i===0) {
                //     sortedAstronauts.push(json[0])
                    // console.log(json[i+1].hoursInSpace);
                    // console.log(sortedAstronauts);
                // } 
                // else if (i>0){
                //     console.log(`i is ${i}`);
                    // console.log(json[i].hoursInSpace);
                    // console.log(sortedAstronauts);
                    // console.log(sortedAstronauts[i-1]);
                    // sortedAstronauts.push(json[i]);
                    // if (json[i].hoursInSpace < sortedAstronauts[i-1].hoursInSpace) {
                    //     // sortedAstronauts.unshift(json[i+1]);
                    //     console.log('less than');
                    // } 
                    // else if (json[i].hoursInSpace > sortedAstronauts[i-1].hoursInSpace) {
                    //     sortedAstronauts.push(json[i+1]);
                    // }
            //     }
            // }
        // console.log(sortedAstronauts);

});
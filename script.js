// TODO: add code here
window.addEventListener('load', function() {
    const container = document.getElementById('container');
    const count = document.getElementById('count');
    // let sortedAstronauts = [];
    // console.log(sortedAstronauts);
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data){
            console.log(data);

            count.innerHTML+=`There are ${data.length} astronauts!`;

            data.sort(function(a, b){
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
            })
                for (let i=0; i<data.length; i++) {
                    container.innerHTML+=(`
                    <div class="astronaut">
                   
                    <div class="bio">
                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${data[i].hoursInSpace}</li>
                    <li style="${data[i].active ? `color: green`: ""}">Active: ${data[i].active}</li>
                    <li>Skills: ${data[i].skills.join(", ")}</li>
                    </ul>
                    </div>
                    <img class="avatar" src=${data[i].picture}>
                    </div>`
                )};
        });
    });
});
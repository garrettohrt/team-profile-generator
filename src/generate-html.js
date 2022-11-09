const generateTeam = (team) => {
    //Empty array to push html to.
    const html = [];
// For loop with if statement to check getRole method and push to html array.
    for (let i = 0; i < team.length; i++) {

        if (team[i].getRole() === 'Manager') {

            let managerHtml = ` 
        <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${team[i].name}<br/>
       <i class="fas fa-mug-hot"></i>Manager</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[i].id}</li>
        <li class="list-group-item">Email:<span id="email"><a href="mailto:${team[i].email}">${team[i].email}</a>
        <li class="list-group-item">Office Number: ${team[i].officeNumber}</li>
        </ul>
    </div>
        `;
            html.push(managerHtml);
        }

        if (team[i].getRole() === 'Engineer') {

            let engineerHtml = ` 
        <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${team[i].name}<br/>
       <i class="fasfa-glasses"></i>Engineer</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[i].id}</li>
        <li class="list-group-item">Email:<span id="email"><a href="mailto:${team[i].email}">${team[i].email}</a>
        <li class="list-group-item">Github username: <a target="_blank" href="https://github.com/${team[i].github}">${team[i].github}</a></li>
        </ul>
    </div>
        `;
            html.push(engineerHtml);
        }

        if (team[i].getRole() === 'Intern') {

            let internHtml = ` 
        <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${team[i].name}<br/>
       <i class="fas fa-school"></i>Intern</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[i].id}</li>
        <li class="list-group-item">Email:<span id="email"><a href="mailto:${team[i].email}">${team[i].email}</a>
        <li class="list-group-item">School: ${team[i].school}</li>
        </ul>
    </div>
        `;
            html.push(internHtml);
        }
    }
// return the fully rendered page with the html array.
    const page = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link rel="stylesheet" href="./CSS/style.css"/>
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>

    <main>${html}</main>
     
</body>
</html>`
    return page
}
//export generateTeam function
module.exports = generateTeam
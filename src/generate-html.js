const generateTeam = (team) => {
    console.log(team);
    const html = [];
    if (team[0].getRole() === 'Manager') {



        
        let managerHtml = ` 
        <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${team[0].name}<br/>
       <i class="fas fa-mug-hot"></i>Manager</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[0].id}</li>
        <li class="list-group-item">Email:${team[0].email} <span id="email"><a>${team[0].email}</a>
        <li class="list-group-item">Office Number: ${team[0].officeNumber}</li>
        </ul>
    </div>
        `;
        html.push(managerHtml);


    }


    const page = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link rel="stylesheet" href="../dist/style.css"/>
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
module.exports = generateTeam
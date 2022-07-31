

// generate engineer cards
const generateEngineerCards = members=>{
    return`
        ${members
            .filter(({role}) => role==="Engineer")    
            .map(({name, id, email, github, role}) => {
                return`
                <div class="col-12 col-md-6 col-lg-3 mb-3 ">
                            <div class="card shadow h-100">

                                <div class="card-header bg-warning">
                                    <h5 class="card-title">${name}</h5>
                                    <h6 class="card-subtitle mb-2 "><i class="fa-solid fa-user-gear"></i> ${role}</h6>
                                </div>

                                <div class="card-body">                    
                                    <p class="card-text">ID: ${id}</p>
                                    <p class="card-text">Email: <a href="mailto:${email}" class="card-link">${email}</a></p>
                                    <p class="card-text">GitHub: <a href="https://github.com/${github}" class="card-link">${github}</a></p>
                                </div>
                            </div>
                        </div>
                `;
            })
            .join('')
        }
    `;
};




// generate intern cards
const generateInternCards = members=>{
    return`
        ${members
            .filter(({role}) => role==="Intern")    
            .map(({name, id, email, school, role}) => {
                return`
                    <div class="col-12 col-md-6 col-lg-3 mb-3 ">
                        <div class="card shadow h-100">

                            <div class="card-header bg-secondary">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-subtitle mb-2 "><i class="fa-solid fa-user-graduate"></i> ${role}</h6>
                            </div>

                            <div class="card-body">                    
                                <p class="card-text">ID: ${id}</p>
                                <p class="card-text">Email: <a href="mailto:${email}" class="card-link">${email}</a></p>
                                <p class="card-text">School: ${school}</p>
                            </div>
                        </div>
                    </div>   
                `
            })
            .join('')
        }
    `;
};


// export function that generates the whole page
module.exports = teamData => {
const {members,...manager} = teamData;

return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Russo+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="container-fluid bg-dark text-white text-center p-3">
        <h1>${manager.teamName}</h1>
    </header>

    <main class="container-fluid p-3">
        <div class="row justify-content-center">
            
        <!-- Manager Info Card -->
            <div class="col-12 col-md-6 col-lg-3 mb-3">
                <div class="card shadow h-100">
                    <div class="card-header bg-danger">
                        <h5 class="card-title">${manager.name}</h5>
                        <h6 class="card-subtitle mb-2 "><i class="fa-solid fa-bullhorn"></i> ${manager.role}</h6>
                    </div>

                    <div class="card-body">
                        <p class="card-text">ID: ${manager.id}</p>
                        <p class="card-text">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></p>
                        <p class="card-text">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
            <!-- Engineer Info Cards -->
            ${generateEngineerCards(members)}
            <!-- Intern Info Cards -->
            ${generateInternCards(members)}
            
        </div>

    </main>
    
</body>
</html>

`
 
};
// fetch agents
for (let i = 0; i <= 23; i++) {

    fetch("https://valorant-api.com/v1/agents")
        .then(response => response.json())
        .then(result => {
            document.querySelector("#dataArea").innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12 p-3">
                <div class="card border border-light-subtle" style="background-color: #171717;">
                    <div class="card-body text-white d-grid">
                        <div class="row">
                            <div class="col-8">
                                <img class="img-fluid" src="${result.data[i].displayIcon}">
                            </div>
                            <div class="col-4 d-flex align-items-end">
                                <img class="img-fluid" src="${result.data[i].role.displayIcon}">
                            </div>     
                        </div>
                        <h3 class="fw-semibold mt-2">${result.data[i].displayName}</h3>
                        <div class="row">
                            <span class="d-grid mb-2">
                                <button class="btn fw-bold" style="background-color: #D24545;" type="button" data-bs-toggle="collapse" data-bs-target="#aboutCollapse${i}" aria-expanded="false" aria-controls="aboutCollapse${i}">
                                    ABOUT ⬇
                                </button>
                            </span>
                            <div class="collapse" id="aboutCollapse${i}">
                                <div class="card card-body bg-dark mb-2">
                                    <span>${result.data[i].description}</span>
                                </div>
                            </div>
                            <span class="d-grid mb-2">
                                <button class="btn fw-bold" style="background-color: #D24545;" type="button" data-bs-toggle="collapse" data-bs-target="#abilitiesCollapse${i}" aria-expanded="false" aria-controls="abilitiesCollapse${i}">
                                    ABILITIES ⬇
                                </button>
                            </span>
                            <div class="collapse" id="abilitiesCollapse${i}">
                                <div class="container abilitiesDetails">
                                    ${abilities()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;

            function abilities(){
                //let abilities = [];

                let totalAbilities = 0;

                for (ability in result.data[i].abilities){
                    totalAbilities++;    
                }

                if (totalAbilities == 5){
                    return `
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[0].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[0].slot} - ${result.data[i].abilities[0].displayName}</h5>
                            <small>${result.data[i].abilities[0].description}</small>
                        </div>
                    </div>
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[1].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[1].slot} - ${result.data[i].abilities[1].displayName}</h5>
                            <small>${result.data[i].abilities[1].description}</small>
                        </div>
                    </div>
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[2].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[2].slot} - ${result.data[i].abilities[2].displayName}</h5>
                            <small>${result.data[i].abilities[2].description}</small>
                        </div>
                    </div>
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[3].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[3].slot} - ${result.data[i].abilities[3].displayName}</h5>
                            <small>${result.data[i].abilities[3].description}</small>
                        </div>
                    </div>
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[4].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[4].slot} - ${result.data[i].abilities[4].displayName}</h5>
                            <small>${result.data[i].abilities[4].description}</small>
                        </div>
                    </div>
                    `;
                } else {
                    return `
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[0].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[0].slot} - ${result.data[i].abilities[0].displayName}</h5>
                            <small>${result.data[i].abilities[0].description}</small>
                        </div>
                    </div>
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[1].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[1].slot} - ${result.data[i].abilities[1].displayName}</h5>
                            <small>${result.data[i].abilities[1].description}</small>
                        </div>
                    </div>
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[2].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[2].slot} - ${result.data[i].abilities[2].displayName}</h5>
                            <small>${result.data[i].abilities[2].description}</small>
                        </div>
                    </div>
                    <div class="row bg-dark rounded p-3 mb-2">
                        <div class="col-3 d-flex align-items-center">
                            <img class="img-fluid rounded-5 border p-2" src="${result.data[i].abilities[3].displayIcon}" alt="">
                        </div>
                        <div class="col-9">
                            <h5 class="fw-bold">${result.data[i].abilities[3].slot} - ${result.data[i].abilities[3].displayName}</h5>
                            <small>${result.data[i].abilities[3].description}</small>
                        </div>
                    </div>
                    `;
                }
            }
            
        })
        .catch(error => console.log('error', error));
};
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

// fetch weapons
for (let i = 0; i <= 18; i++){
    fetch("https://valorant-api.com/v1/weapons")
        .then(response => response.json())
        .then(result => {
            document.querySelector("#dataArea").innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12 p-3">
                <div class="card border border-light-subtle" style="background-color: #171717;">
                    <div class="card-body text-white d-grid">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img class="img-fluid p-5" src="${result.data[i].displayIcon}">
                            </div>   
                        </div>
                        <h3 class="fw-semibold mt-2">${result.data[i].displayName}</h3>
                        <span>Category: ${result.data[i].shopData.category}</span>
                        <span class="mb-3">Shop Cost: ${result.data[i].shopData.cost}</span>
                        
                        <div class="row">
                            <span class="d-grid mb-2">
                                <button id="statButton${i}" class="btn fw-bold" style="background-color: #D24545;" type="button">STATS</button>
                            </span>
                            
                            <span class="d-grid mb-2">
                                <button id="skinButton${i}" class="btn fw-bold" style="background-color: #D24545;" type="button">SKINS</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            `;

            let url;

            // WEAPON STAT BUTTON
            document.querySelector("#statButton0").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Odin#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton1").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Ares#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton2").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Vandal#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton3").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Bulldog#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton4").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Phantom#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton5").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Judge#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton6").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Bucky#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton7").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Frenzy#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton8").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Classic#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton9").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Ghost#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton10").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Sheriff#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton11").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Shorty#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton12").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Operator#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton13").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Guardian#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton14").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Outlaw#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton15").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Marshal#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton16").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Spectre#Stats";
                window.open(url, '_blank');
            });

            document.querySelector("#statButton17").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Stinger#Stats";
                window.open(url, '_blank');
            });

            // WEAPON SKIN BUTTON
            document.querySelector("#skinButton0").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Odin#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton1").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Ares#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton2").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Vandal#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton3").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Bulldog#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton4").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Phantom#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton5").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Judge#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton6").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Bucky#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton7").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Frenzy#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton8").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Classic#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton9").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Ghost#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton10").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Sheriff#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton11").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Shorty#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton12").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Operator#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton13").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Guardian#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton14").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Outlaw#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton15").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Marshal#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton16").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Spectre#Skins";
                window.open(url, '_blank');
            });

            document.querySelector("#skinButton17").addEventListener("click", () => {
                url = "https://valorant.fandom.com/wiki/Stinger#Skins";
                window.open(url, '_blank');
            });
        })
        .catch(error => console.log('error', error));
};
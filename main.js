function makeGetRequest(path) {
  axios.get(path).then(
    (response) => {
      var result = response.data;
      // console.log(result);
      result.forEach((pokemon) => {
    //     document.getElementById("main-box").innerHTML += ` <div class="card">
    //   <div class="imgBox">
    //    <img src=
    //    ${pokemon.pokemon_data.sprites.front_default}>
    //    <img src=
    //    ${pokemon.pokemon_data.sprites.front_shiny}>
    //    <div class="name-container">${pokemon.name}</div>
    //   </div>
    //   <div class="details">
    //     <div class="content">
    //     <div class="headings1">STATISTICS</div>
    //       <div class="stats" >${renderStats(pokemon)}</div>
    //       <div class="headings2">ABILITIES</div>
    //       <div class="abilities">${renderAbilities(pokemon)}</div>
    //     </div>
    //   </div>
    // </div>`;

        document.getElementById("main-box").innerHTML += `
        
          <div class="card" style="width: 21rem; height: 450px">
            <img class="card-img-top image" src=${pokemon.pokemon_data.sprites.front_default} alt="${pokemon.name}" >
            <div class="card-body">
               <span class="card-title name"  style=" ; font-size:24px">${pokemon.name}</span>

              <span claas="ID" id="poki-id" style="text-align: center; font-weight: 600; font-size:24px" >ID: ${pokemon.id}</span>
              
             
                <div id="detail">
                  <span>${renderStats(pokemon)}</span>
                 </div> 
                
              
            </div>
          </div>

        `;

      });
    },
    (error) => {
      console.log(error);
    }
  );
}
let pokemons = makeGetRequest(
  "https://pokemon-json-demo-api.herokuapp.com/pokemon?_page=1&_limit=16"
);
let renderAbilities = (data) => {
  let string = "<div>";
  data.pokemon_data.abilities.forEach((ability) => {
    string += `<div>${ability.ability.name}</div>`;
  });
  string += "</div>";
  return string;
};

function renderStats(data) {
  let string = "<div>";
  data.pokemon_data.stats.forEach((statistic) => {
    string += `
    <p class="detail" style="margin-bottom: 5px">${statistic.stat.name} : ${statistic.base_stat}</p>`;
  });
  string += "</div>";
  return string;
  
}

// nextBtn.addEventListner("click" , event => {
//   nextBtn.abilities = `click nextBtn : event.${ability.ability.name}`;
  
//   fetchPokeList("https://pokemon-json-demo-api.herokuapp.com/pokemon?_page=16&limit32");

  
// });
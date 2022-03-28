    

    const fetchPokemon = () => {
	    const pokeNameInput = document.getElementById("name-input");
	    let pokeName = pokeNameInput.value;
	    pokeName = pokeName.toLowerCase();
	    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
	    fetch(url).then((res) => {
		  if (res.status != "200") {
		      console.log(res);
		      pokeChange("./pokemon-sad.gif")
		  }
		  else {
		      return res.json();
		  }
	    }).then((data) => {
		  if (data) {
		    let pokeImg = data.sprites.front_default;
		    let pokemMoves = data.moves.map((move) => {
			        return move.move.name;
		      	})
        let height = data.height;
        let weight = data.weight;
        let name = data.name;
        let type = data.types.map((type) => {
          return type.type.name;
        })
        let ps = data.stats[0].base_stat;
        let atk = data.stats[1].base_stat;
        let def = data.stats[2].base_stat;
        let moves = "<p>Movimientos: </p>";
        pokemMoves.forEach(move => {
           moves = moves + `<p> ‣ ${move}`  
        });
			
			  let id = data.id;
		    pokeChange(name,pokeImg, type[0], id, height, weight,  moves, ps, atk, def);
		    console.log(pokemMoves);
		  }
	    });
	}

	const pokeChange = (name, urlP, type, number, h, w, moves, hp, atk, def) => {
	    const pokePhoto = document.getElementById("main-screen").style;
	    const pokeName = document.getElementById("name-screen");
	    const pokeType = document.getElementById("type-screen");
	    const pokeNumber = document.getElementById("id-screen");
	    const pokeText = document.getElementById("about-screen");
	    pokePhoto.backgroundImage = `url('${urlP}')`;
	    pokeName.innerText = name;
	    pokeType.innerText = type;
	    pokeNumber.innerText = "#"+number;
	    pokeText.innerHTML = `<p>Altura: ${h*10} cm</p> <p>Peso: ${w/10} kg</p> <p>Salud: ${hp}</p><p>Ataque: ${atk}</p><p>Defensa: ${def}</p>${moves}`
	}



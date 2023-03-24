const translateGender = (gender) => {
    switch (gender) {
        case 'Male':
            return 'Hombre';
        case 'Female':
            return 'Mujer';
        default:
            return 'Desconocido';
    }
}

const translateSpecies = (species) => {
    return species === "Human" ? "Humano" : species;
}

const translateStatus = (status) => {
    switch (status) {
        case "Alive":
            return "Vivo";
        case "Dead":
            return "Muerto";
        default:
            return "Desconocido";
    }
}

const translateOrigin = (origin) => {
    if (origin === "unknown") {
        return "Desconocido";
    } else {
        return origin
            .replace("Earth", "Tierra")
            .replace("Replacement Dimension", "C-131");
    }
}

const API_CHARACTERS = "https://rickandmortyapi.com/api/character";
const myPromise = fetch(API_CHARACTERS);

myPromise
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        const $container = document.getElementById("container");
        const characters = data.results;
        for (let i = 0; i < characters.length; i++) {
            $container.innerHTML += `
                <div class="card">
                    <img src=${characters[i].image} alt="Character image."/>
                    <strong>${characters[i].name}</strong>
                    <p>Genero: ${translateGender(characters[i].gender)}</p>
                    <p>Especie: ${translateSpecies(characters[i].species)}</p>
                    <p>Estado: ${translateStatus(characters[i].status)}</p>
                    <p>Origen: ${translateOrigin(characters[i].origin.name)}</p>
                </div>
            `;
        }
    })
    .catch((err) => {
        console.log(err);
    });
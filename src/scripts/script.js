const translateGender = (gender) => {
    const data = {
        Male: 'Hombre',
        Female: 'Mujer'
    }
    return data[gender] ?? 'Desconocido'
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

const mode = document.getElementById('toggle-theme');
mode.addEventListener('click', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.toggle('light-mode');
    } else {
        document.body.classList.toggle('dark-mode');
    }
});

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
                    <p>Género: ${translateGender(characters[i].gender)}</p>
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
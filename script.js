document.getElementById("generateBtn").addEventListener("click", updateInformation);

function updateInformation() {
    document.getElementById("name").innerHTML = `<em>loading... </em>`
    document.getElementById("height").innerHTML = `<em>loading... </em>`
    document.getElementById("mass").innerHTML = `<em>loading... </em>`
    document.getElementById("homeworld").innerHTML = `<em>loading... </em>`
    document.getElementById("films").innerHTML = `<em>loading... </em>`
    document.getElementById("starships").innerHTML = `<em>loading... </em>`

    const randInt =  Math.floor(Math.random() * 83);
    fetch("https://swapi.dev/api/people/"+randInt)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("name").innerText = data.name
            document.getElementById("height").innerText = data.height
            document.getElementById("mass").innerText = data.mass

            fetch(data.homeworld)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("homeworld").innerText = data.name

            })

            document.getElementById("films").innerText = ""
            for (let i = 0; i< data.films.length; i++) {
                console.log(data.films[i])
                fetch(data.films[i])
                .then(response => response.json())
                .then(data => {
                    document.getElementById("films").innerHTML += `<li>${data.title}</li>`

            })
            }
            // console.log(Array.isArray(data.films))
            // document.getElementById("films").innerText = data.films
            // document.getElementById("starships").innerText = data.starships

            document.getElementById("starships").innerText = ""
            for (let i = 0; i< data.starships.length; i++) {
                console.log(data.starships[i])
                fetch(data.starships[i])
                .then(response => response.json())
                .then(data => {
                    console.log(data.name)
                    document.getElementById("starships").innerHTML += `<li>${data.name}</li>`

            })
            }
            console.log("done with function")
        })
  }
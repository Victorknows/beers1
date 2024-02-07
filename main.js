document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/beers')
        .then(response => response.json())
        .then(data => {
            displayData(data)
            console.log(data)
        })

    function displayData(details) {
        const container = document.getElementById('container')
        details.forEach(detail => {
            container.innerHTML += `
            <p>${detail.name}</p>
            <img src=${detail.image_url}>`
        });
    }
    let form = document.querySelector('form')
    form.addEventListener('submit', (event)=> {
        event.preventDefault();

        let name = document.querySelector('input[name="name"]').value
        let image = document.querySelector('input[name="image"]').value
        let dataToPost = {
            name: name,
            image: image
        }
        fetch('http://localhost:3000/beers', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(dataToPost)
        })
        .then(response => console.log(response))
})

})
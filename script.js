var from = document.getElementById("myForm")

from.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')



    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)

            document.getElementById("result").innerHTML = `
            <img src="${data.avatar_url}"/>
            `

            document.getElementById("created_at").
                data.created_at

        })
})


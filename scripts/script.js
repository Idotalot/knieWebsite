let listItems = ["gay", "Eye of Rahh", "Akimbo Uzi", "Blue Lobster", "Volvo C30 T5 Review!"];

function onWheelSpin() {
    let randomizeSpin = Math.floor(Math.random() * 30);
    console.log(randomizeSpin);
    let rat = document.querySelector(".rat");

    for (let i = 0; i < randomizeSpin; i++) {
        setTimeout(() => {
            let randomItem = Math.floor(Math.random() * listItems.length);
            rat.innerHTML = listItems[randomItem]

            if (i === randomizeSpin - 1) {
                rat.classList.add("purple");
                setTimeout(() => {
                    getWheelResult();
                }, 2000)                
            }    
        }, i * 150);       
    }
}

function getWheelResult() {
    let rat = document.querySelector(".rat");

    switch (rat.innerHTML) {
        case "gay":
            window.location.href = "https://www.pornhub.com/gay"
            break;
        case "Eye of Rahh":
            window.location.href = "https://www.google.com/search?sca_esv=a01068f07d037735&sxsrf=AHTn8zonGEFIbf450xt-s2c-SJl97CPwWQ:1738791814992&q=eye+of+rah+meme&udm=2&fbs=ABzOT_DDfJxgmsKFIwrWKcoyw2RfcH6DTUcy5g5alyxuLXMELFYytOWGTvTZIDoI52i6SCGy0LWR52jnJc4IdeRvzIQPPHjGPy5Zn0K2P6or-0dAfF49uJdwwTtf9ymVFX5Z6UFrmb2auP8TraIxVcmtva8EJDPRfq-PYHIGH4rsNfiepl1bl-i_55eG7UtEnJYaRutODSQo&sa=X&ved=2ahUKEwiihOKjwK2LAxUA2QIHHYdQNO0QtKgLegQIExAB&biw=2560&bih=1323&dpr=1"
            break;
        case "Akimbo Uzi":
            window.location.href = "https://www.reddit.com/r/FortNiteBR/comments/7t5sjd/weapon_idea_akimbo_uzi/?rdt=45927"
            break;
        case "Blue Lobster":
            window.location.href = "https://www.youtube.com/watch?v=OgZzUJud3Q4&t=1s"
            break;
        case "Volvo C30 T5 Review!":
            window.location.href = "https://www.youtube.com/watch?v=3Po3i1DVpS8"
        default:
            break;
    }
}
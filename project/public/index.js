function submitChannel(){
    const convert_string = document.querySelector('.channel-input').value; 
    const channelURL = convert_string.replace(/ /g, '+');
    const userURL = `https://www.amazon.com/s?k=${channelURL}&sprefix=samsubng%2Caps%2C166&ref=nb_sb_ss_pltr-ranker-lnopsacceptance_1_8`
    //send to server
    fetch('http://localhost:3000/creators', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userURL})
    })
}

async function loadCreators() {
    const res = await fetch('http://localhost:3000/creators');
    // const creators = await res.json();

    // // const ctr = document.querySelector('.container');

    // creators.forEach(creator => {
    //     const card = newEl('div', {class: 'card'});
    //     const title = newEl('h4', {innerText: creator.name});
    //     const img = newEl('img', {src: creator.img});
    //     img.style.width = '100px';
    //     card.appendChild(title);
    //     card.appendChild(img);
    //     ctr.appendChild(card);
    // })
}

loadCreators();

// const axios = require('axios');

// function submitChannel(){
//     const user_request = document.querySelector('.channel-input').value;
//     const getProductURL = `https://www.amazon.com/s?k=${user_request}&sprefix=samsubng%2Caps%2C166&ref=nb_sb_ss_pltr-ranker-lnopsacceptance_1_8`;
//     console.log(getProductURL);
    // const { data } = axios.get(getProdcutURL, {
    //     headers: {
    //         Accept: ''
    //     },
    // });

    //send to server
    // fetch('http://localhost:3000/creators', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({channelURL})
    // })
// }

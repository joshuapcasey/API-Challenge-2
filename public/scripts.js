// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.6.1/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.6.1/firebase-analytics.js"></script>

// // <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>


//! VARIABLE DECLARATIONS
const searchURL = 'https://api.giphy.com/v1/gifs/search';
const key = '3ADp3XhtKEWggX26S07NqOXbDixK0lZZ'; 

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');

// let url;
// const submitBtn = document.querySelector('.submit');
// const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchSearch);

//! SEARCH API CALL

function fetchSearch(e) {
    e.preventDefault();
    urlSearch = `${searchURL}?q=${searchTerm.value}&api_key=${key}&limit=16`; // & vs ? format for api & search query
     // url = `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=$3ADp3XhtKEWggX26S07NqOXbDixK0lZZ&limit=10`; // & vs ? format for api & search query

    console.log('URL:', urlSearch);

    fetch(urlSearch)
        .then(function (result) {
            console.log(result)
            return result.json();
        })

//! DISPLAY SEARCH RESULTS AS IMAGES

        .then(json => {
            console.log('Jsonify Results', json.data);
            json.data
                .map(gif => gif.images.fixed_height.url)
                .forEach(url => {
                    let img = document.createElement('img')
                    img.src = url
                    document.body.appendChild(img)
                })
        })
        .catch(err => console.log(err))
}

// FIXME -  add function on button click that removes first child 



//     fetch(url)
//         .then(function (result) {
//             console.log(result)
//             return result.json();
//         })
//         .then(function (json) {
//             console.log(json);
           
//             // displayResults(json)
//         })
        
//         .catch(err => console.log(err))
// }

//! ADDING IMAGES TO DOCUMENT

// function displayResults(json) {
//     console.log('Display Results', json);
//     console.log(json.data);

//     while (section.firstChild) {
//                 section.removeChild(section.firstChild);
//             }

//             let gifs = json.data;
//             console.log(gifs);

//             if (gifs.length === 0) {
//             console.log('No results');

//             } else {
               
            //     for (let i = 0; i < gifs.length; i++) {
            //         console.log(i);
            //         // let answer = document.createElement('article');
            //         let img = document.createElement('img');
            //         let clearfix = document.createElement('div');
            //         let current = gifs[i];
            //         // console.log('current:' current);

            //     if (current.images.length > 0) {
            //         img.src = gifs.images.fixed_width.url
            //     }
                
            //     console.log(gifs.images.fixed_width.url);

            //     clearfix.setAttribute('class', 'clearfix');
        
            //     answer.appendChild(img);

            //     document.section.appendChild(answer);
            // }
//         }

// }
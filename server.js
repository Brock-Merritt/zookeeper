const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});



// function filterByQuery(query, animalsArray){
//     let filteredResults = animalsArray;
//     let personalityTraitsArray = [];
//     if(query.personalityTraits){
//         if (typeof query.personalityTraits === 'string'){
//             personalityTraitsArray = [query.personalityTraits];
//         }else {
//             personalityTraitsArray = query.personalityTraits;
//         }
//         personalityTraitsArray.forEach(trait => {
//             filteredResults = filteredResults.filter(
//                 animal => animal.personalityTraits.indexOf(trait) !== -1
//             );
//         });
//     }
//     if (query.diet){
//         filteredResults = filteredResults.filter(animal =>animal.diet === query.diet);
//     }
//     if (query.species){
//         filteredResults = filteredResults.filter(animal => animal.species === query.species);
//     }
//     if (query.name){
//         filteredResults = filteredResults.filter(animal => animal.name === query.name);
//     }
//     return filteredResults;
// }
// function validateAnimal(animal){
//     if (!animal.name || typeof animal.name !== 'string'){
//         return false;
//     }
//     if (!animal.species || typeof animal.species !== 'string'){
//         return false;
//     }
//     if (!animal.diet || typeof animal.diet !== 'string'){
//         return false;
//     }
//     if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)){
//         return false;
//     }
//     return true;
// }


// function findById(id, animalsArray){
//     const result = animalsArray.filter(animal => animal.id === id)[0];
//     return result;
// }

// function createNewAnimal(body, animalsArray){
//     const animal = body;
//     animalsArray.push(animal);
//     fs.writeFileSync(
//         path.join(__dirname, './data/animals.json'),
//         JSON.stringify({ animals: animalsArray}, null, 2)
//     );
//     return animal;
// }
// // fetch('/api/animals', {
// //     method: 'POST',
// //     headers: {
// //       Accept: 'application/json',
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify(animalObject)
// //   })
// //     .then(response => {
// //       if (response.ok) {
// //         return response.json();
// //       }
// //       alert('Error: ' + response.statusText);
// //     })
// //     .then(postResponse => {
// //       console.log(postResponse);
// //       alert('Thank you for adding an animal!');
// //     });

// app.get('/api/animals', (req,res) => {
//     let results = animals;
//     if (req.query){
//         results = filterByQuery(req.query, results);
//     } else {
//         res.send(404);
//     }
//     res.json(results);
// });

// app.get('/api/animals/:id', (req,res) => {
//     const result = findById(req.params.id, animals);
//     res.json(result);
// });
// app.post('/api/animals', (req,res) => {
//     //req.body is where our incoming content will be
//     req.body.id = animals.length.toString();

//     //if any data inreq body is incorrect, send 400 error
//     if(!validateAnimal(req.body)){
//         res.status(400).send('The animalis not formatted');
//     } else {
//         const animal = createNewAnimal(req.body, animals);
//         res.json(animal);
//     }
// });
// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });
// app.get('/animals', (req,res) => {
//     res.sendFile(path.join(__dirname, './public/animals.html'));
// });
// app.get('/zookeepers', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/zookeepers.html'));
// });
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.listen(PORT, () =>{
//     console.log(`API server now on port ${PORT}`);
// });
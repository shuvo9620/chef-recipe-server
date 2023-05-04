const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is Cooking!')
})

app.get('/chef/:id',(req,res)=>{
    const id = req.params.id;
    const chef_info = chefs.find(n => n.id == id);
    res.send(chef_info);
    console.log(id);

})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`Chef api is running on port ${port}`)
})
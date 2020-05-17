const express = require('express');
const routes = express.Router();
const recipes = require('./data');

routes.get('/', (req, res) => {
    return res.render('index', {recipes});
})

routes.get('/recipes', (req, res) => {
    return res.render('recipes', {recipes});
})

routes.get('/about', (req, res) => {
    return res.render('about')
})

routes.get('/recipes/:index', (req, res) => {
    let recipeIndex = Number(req.params.index);
    recipeIndex -= 1;
    //console.log(recipeIndex)
    return res.render('recipesInfo', { recipe: recipes[recipeIndex]})
})

module.exports = routes;

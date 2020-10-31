const recipes = [
    {
        id: 1,
        name: "Ricetta della torta di carote",
        ingredients: [
            {
                name: "carote",
                quantity: 3
            },
            {
                name: "latte",
                quantity: 1
            },
            {
                name: "burro",
                quantity: 1
            },
            {
                name: "zucchero",
                quantity: 1
            }
        ]
    },
    {
        id: 2,
        name: "Carbonara",
        ingredients: [
            {
                name: "panna",
                quantity: 1
            },
            {
                name: "pancetta",
                quantity: 2
            },
            {
                name: "uovo",
                quantity: 2
            }
        ]
    },
    {
        id: 3,
        name: "Torta di mele",
        ingredients: [
            {
                name: "mele",
                quantity: 3
            },
            {
                name: "latte",
                quantity: 1
            },
            {
                name: "burro",
                quantity: 1
            },
            {
                name: "zucchero",
                quantity: 1
            }
        ]
    }
];


// ritorna un array che contienie tutte le ricette
//che hanno l'ingrediente passato come parametro


function searchByIngredients(recipes, ingredientName) {

    let filteredRecipes = []

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i]

        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredient = recipe.ingredients[j]

            if (ingredient.name === ingredientName) {
                filteredRecipes.push(recipe);

                break;
            }
        }
    }

    return filteredRecipes
}

function searchByIngredientsFilter(recipes, ingredientName) {

    let filtered = recipes.filter(recipe => {

        for (let k = 0; k < recipe.ingredients.length; k++) {
            const ingredient = recipe.ingredients[k];

            if (ingredient.name === ingredientName) {
                return true;
            }
        }
        return false;
    })
    return filtered.map(recipe => recipe.name);
}


const recipeFilterSome = function(recipes,ingredient) {
    return recipes.filter(recipe => {
        return recipe.ingredients.find((filtered) => {
            return filtered.name === ingredient;
        });
    }).map(filteredRecipe => {return filteredRecipe.name})
}
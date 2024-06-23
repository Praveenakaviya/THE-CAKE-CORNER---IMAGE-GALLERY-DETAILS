document.addEventListener('DOMContentLoaded', function() {
    // Fetch cake data based on id parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const cakeId = parseInt(urlParams.get('id')); // Get id parameter from URL

    // Example cake data (you would fetch this from a database or API in a real application)
    const cakes = [
        {
            name: "Divine Chocolate Overload Cake",
            image: "cakehiveimages/cake1.jpg",
            description: "A chocolate lover's dream!",
            price: "$25.99",
            address: "123 Cake Street, City, Country",
            ingredients: "Flour, chocolate, sugar, butter, eggs"
        },
        {
            name: "Blackforest Cake",
            image: "cakehiveimages/blackforest.jpg",
            description: "A Slice of Heaven.",
            price: "$19.99",
            address: "456 Forest Avenue, Town, Country",
            ingredients: "Chocolate, cherries, cream, sponge cake"
        },
        {
            name: "Cheesecake",
            image: "cakehiveimages/CheesCake.jpg",
            description: "Creamy Bliss in Every Bite",
            price: "$21.99",
            address: "789 Cheese Lane, City, Country",
            ingredients: "Cream cheese, sugar, eggs, vanilla extract"
        },
        {
            name: "Cherry Cake",
            image: "cakehiveimages/cherry.jpg",
            description: "Light and fluffy cake filled with fresh cherries.",
            price: "$18.99",
            address: "567 Cherry Street, Town, Country",
            ingredients: "Flour, cherries, sugar, butter, eggs"
        },
        {
            name: "Rasamalai Cake",
            image: "cakehiveimages/rasamalaicake.jpg",
            description: "Delicate cake infused with flavors of Rasamalai.",
            price: "$23.99",
            address: "890 Rasamalai Avenue, City, Country",
            ingredients: "Milk, flour, sugar, pistachios, almonds"
        },
        {
            name: "White Forest Cake",
            image: "cakehiveimages/whiteforest.jpg",
            description: "White chocolate cake with layers of whipped cream and cherries.",
            price: "$20.99",
            address: "234 White Chocolate Lane, Town, Country",
            ingredients: "White chocolate, cherries, cream, sponge cake"
        },
        {
            name: "Fruit Cake",
            image: "cakehiveimages/fruitcake.jpg",
            description: "Rich fruit cake packed with assorted fruits and nuts.",
            price: "$22.99",
            address: "789 Fruit Lane, City, Country",
            ingredients: "Assorted fruits, nuts, flour, sugar, eggs"
        },
        {
            name: "Chiffon Cake",
            image: "cakehiveimages/chiffonCake.jpg",
            description: "Light and airy chiffon cake with a smooth texture.",
            price: "$17.99",
            address: "345 Chiffon Lane, Town, Country",
            ingredients: "Cake flour, vegetable oil, sugar, eggs, baking powder"
        },
        {
            name: "Ice Cream Cake",
            image: "cakehiveimages/Icecreemcake.jpg",
            description: "Decadent cake with layers of ice cream and chocolate.",
            price: "$27.99",
            address: "567 Ice Cream Avenue, City, Country",
            ingredients: "Ice cream, chocolate, flour, sugar, eggs"
        },
        {
            name: "Hot Milk Cake",
            image: "cakehiveimages/hotmilkcake.jpg",
            description: "Moist cake made using hot milk for added richness.",
            price: "$16.99",
            address: "890 Milk Lane, Town, Country",
            ingredients: "Hot milk, flour, sugar, butter, eggs"
        },
        {
            name: "Coffee Cake",
            image: "cakehiveimages/Coffe.jpg",
            description: "Coffee-flavored cake with a hint of espresso.",
            price: "$19.99",
            address: "234 Coffee Lane, City, Country",
            ingredients: "Coffee, flour, sugar, butter, eggs"
        },
        {
            name: "Cupcake",
            image: "cakehiveimages/Cupcake.jpg",
            description: "Small, individual cake usually topped with frosting.",
            price: "$2.99",
            address: "567 Cupcake Street, Town, Country",
            ingredients: "Flour, sugar, butter, eggs, frosting"
        },
        {
            name: "Red Velvet Cake",
            image: "cakehiveimages/redvelvetcake.jpg",
            description: "Velvety smooth cake with a rich red color and cream cheese frosting.",
            price: "$24.99",
            address: "890 Velvet Avenue, City, Country",
            ingredients: "Cake flour, cocoa powder, buttermilk, vinegar, cream cheese"
        },
        {
            name: "Plum Cake",
            image: "cakehiveimages/plumcake.jpg",
            description: "Dense fruit cake loaded with plums and spices.",
            price: "$21.99",
            address: "234 Plum Lane, Town, Country",
            ingredients: "Plums, flour, sugar, butter, eggs"
        },
        {
            name: "Rose Milk Cake",
            image: "cakehiveimages/rosemilkcake.jpg",
            description: "Cake infused with the flavor of rose milk.",
            price: "$18.99",
            address: "567 Rose Lane, City, Country",
            ingredients: "Rose milk essence, flour, sugar, butter, eggs"
        },
        {
            name: "Caramel Cake",
            image: "cakehiveimages/Caramel Cake.jpg",
            description: "Indulge in the rich, buttery flavor of caramel with every bite.",
            price: "$22.99",
            address: "789 Caramel Avenue, City, Country",
            ingredients: "Caramel sauce, flour, sugar, butter, eggs"
        }
        
        // Add more cakes as needed
    ];

    // Function to populate cake details based on cakeId
    function populateCakeDetails(cakeId) {
        const cake = cakes[cakeId]; // Fetch cake data from array based on cakeId

        // Update DOM elements with cake details
        document.getElementById('cakeImage').src = cake.image;
        document.getElementById('cakeName').textContent = cake.name;
        document.getElementById('cakeDescription').textContent = cake.description;
        document.getElementById('cakePrice').textContent = cake.price;
        document.getElementById('cakeAddress').textContent = cake.address;
        document.getElementById('cakeIngredients').textContent = cake.ingredients;
    }

    // Call the function to populate cake details
    populateCakeDetails(cakeId);
});

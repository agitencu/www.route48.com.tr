const cocktails = [
    { name: "Paloma", ingredients: "Tekila, agave şurubu, soda, greyfurt suyu, limon suyu", price: "300 ₺", color: "#ffb7b2", text: "#000" },
    { name: "Negroni", ingredients: "Gin, campari, martini rosso", price: "300 ₺", color: "#e63946", text: "#fff" },
    { name: "Margarita", ingredients: "Tekila, triple sec, limon suyu", price: "300 ₺", color: "#dce775", text: "#000" },
    { name: "Tequila Sunrise", ingredients: "Tekila, triple sec, portakal suyu, grenadin şurubu", price: "300 ₺", color: "#fb8c00", text: "#fff" },
    { name: "Blue Lagoon", ingredients: "Vodka, blue curacao, limon suyu, soda / sprite", price: "300 ₺", color: "#00e5ff", text: "#000" },
    { name: "Ramos Gin Fizz", ingredients: "Gin, triple sec, limon suyu, şeker şurubu, krema, soda", price: "300 ₺", color: "#f5f5f5", text: "#000" },
    { name: "Espresso Martini", ingredients: "Vodka, kahlua, espresso, baileys, şeker şurubu", price: "300 ₺", color: "#3e2723", text: "#fff" },
    { name: "Martini", ingredients: "Vodka / Gin, dry vermouth", price: "300 ₺", color: "#eeeeee", text: "#000" },
    { name: "Mojito", ingredients: "Rom, taze nane, limon suyu, soda, esmer şeker", price: "300 ₺", color: "#aeea00", text: "#000" },
    { name: "Lynchburg Lemonade", ingredients: "Viski, sweet&sour, triple sec, sprite", price: "300 ₺", color: "#fff59d", text: "#000" },
    { name: "Blue Hawaii", ingredients: "Rom, malibu, blue curacao, ananas suyu", price: "300 ₺", color: "#18ffff", text: "#000" },
    { name: "Whiskey Sour", ingredients: "Viski, sweet&sour, triple sec", price: "300 ₺", color: "#ffcc80", text: "#000" },
    { name: "Nane Margarita", ingredients: "Tekila, nane, limon suyu, gazoz", price: "300 ₺", color: "#c6ff00", text: "#000" },
    { name: "Perfect Mojito", ingredients: "Rom, taze nane, limon suyu, esmer şeker, çilek-muz-elma şurubu, soda", price: "300 ₺", color: "#ff8a80", text: "#fff" },
    { name: "Aperol Spritz", ingredients: "Aperol, beyaz şarap, soda", price: "300 ₺", color: "#ff6d00", text: "#fff" },
    { name: "Sex On the Beach", ingredients: "Vodka, tekila, archers, portakal suyu, nar şurubu", price: "300 ₺", color: "#ff5252", text: "#fff" },
    { name: "Cuba Libre", ingredients: "Rom, kola, limon suyu", price: "300 ₺", color: "#5d4037", text: "#fff" },
    { name: "Long Island Ice Tea", ingredients: "Vodka, tekila, rom, cin, triple sec, limon suyu, cola", price: "300 ₺", color: "#795548", text: "#fff" },
    { name: "Black Russian", ingredients: "Vodka, kahlua, kola", price: "300 ₺", color: "#212121", text: "#fff" },
    { name: "White Russian", ingredients: "Vodka, kahlua, süt kreması", price: "300 ₺", color: "#fbe9e7", text: "#000" },
    { name: "Cosmopolitan", ingredients: "Vodka, triple sec, cranberry, limon suyu", price: "300 ₺", color: "#e040fb", text: "#fff" },
    { name: "White Lady", ingredients: "Gin, triple sec, limon suyu", price: "300 ₺", color: "#f5f5f5", text: "#000" },
    { name: "Apple Lemonade", ingredients: "Jack Daniel’s Apple, limonata, limon suyu, nane", price: "300 ₺", color: "#dce775", text: "#000" },
    { name: "Pina Colada", ingredients: "Rom, malibu, ananas suyu, krema", price: "300 ₺", color: "#fff9c4", text: "#000" }
];

const card = document.getElementById('cardElement');
const cardBack = document.getElementById('cardBack');
const cName = document.getElementById('cName');
const cIngredients = document.getElementById('cIngredients');
const cPrice = document.getElementById('cPrice');

let isFlipped = false;

function flipCard() {
    if (!isFlipped) {
        // Kart Henüz Çevrilmemişse (Ön yüz -> Arka Yüz)
        pickRandomCocktail();
        card.classList.add('is-flipped');
        isFlipped = true;
    } else {
        // Kart Zaten Çevrilmişse (Tekrar başa dön)
        card.classList.remove('is-flipped');
        isFlipped = false;
    }
}

function pickRandomCocktail() {
    const randomIndex = Math.floor(Math.random() * cocktails.length);
    const selected = cocktails[randomIndex];

    cName.innerText = selected.name;
    cIngredients.innerText = selected.ingredients;
    cPrice.innerText = selected.price;

    cardBack.style.backgroundColor = selected.color;
    cardBack.style.color = selected.text;

    cPrice.style.backgroundColor = selected.text === '#fff' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
}
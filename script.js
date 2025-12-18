function getRecommendation() {
    const mood = document.getElementById("mood").value;
    const hunger = document.getElementById("hunger").value;
    const weather = document.getElementById("weather").value;

    let foods = [];
    let reason = "";

    if (mood === "Happy") {
        foods = ["🍕 Pizza", "🍔 Burger", "🍦 Ice Cream"];
        reason = "You are happy, so fun and tasty foods match your mood.";
    }
    else if (mood === "Sad") {
        foods = ["🍫 Chocolate", "🍜 Soup", "☕ Coffee"];
        reason = "Comfort foods help improve mood when feeling sad.";
    }
    else if (mood === "Stressed") {
        foods = ["🥗 Salad", "🍵 Green Tea", "🍌 Banana"];
        reason = "Light and healthy food helps reduce stress.";
    }
    else if (mood === "Energetic") {
        foods = ["🍗 Grilled Chicken", "🥪 Sandwich", "🥤 Smoothie"];
        reason = "Protein-rich food supports an energetic mood.";
    }

    // Hunger logic
    if (hunger === "Heavy") foods.push("🍛 Biryani");
    if (hunger === "Light") foods.push("🍎 Fruits");

    // Weather logic
    if (weather === "Rainy") foods.push("☕ Hot Tea");
    if (weather === "Cold") foods.push("🍲 Hot Soup");

    // Save last mood
    localStorage.setItem("lastMood", mood);

    let output = `<h3>🍽️ Recommended Foods</h3>`;
    foods.forEach(food => {
        output += `<div class="food">${food}</div>`;
    });

    output += `<p><strong>Why?</strong> ${reason}</p>`;
    output += `<p><strong>Based on:</strong> Mood = ${mood}, Hunger = ${hunger}, Weather = ${weather}</p>`;

    document.getElementById("result").innerHTML = output;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Load last mood
window.onload = function () {
    const savedMood = localStorage.getItem("lastMood");
    if (savedMood) {
        document.getElementById("mood").value = savedMood;
    }
};



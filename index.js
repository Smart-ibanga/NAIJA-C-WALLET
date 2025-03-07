// function calculate() {
//     // Local Nigerian conversion factors
//     const electricity = (document.getElementById('electricity').value / 50) * 0.7; // Convert Naira to approximate kWh
//     const transport = parseInt(document.getElementById('transport').value);
//     const meat = parseInt(document.getElementById('meat').value) * 1.2; // Meat impact
//     const generator = parseInt(document.getElementById('generator').value);

//     const carbonFootprint = electricity + transport + meat + generator;

//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = `
//         <h3>Your Carbon Score:</h3>
//         <h2>${carbonFootprint.toFixed(1)} Carbon Points</h2>
//         ${carbonFootprint > 50 ? 
//             '🙈 Wow!! you have a poor carbon wallet, improve your savings plan' : 
//             '👍🏾 Great job! keeping saving more'}
        
//         <div style="margin-top:15px; background:${
//             carbonFootprint > 50 ? '#ffd700' : '#98fb98'}; 
//             padding:10px; border-radius:5px;">
//             ${carbonFootprint > 50 ? 
//                 'Try Walk more, reduce generator use, & eat healthy!' : 
//                 'Thank you for keeping the planet safe!'}
//         </div>
//         <button style="display:inline-block; margin-top: 15px;">
//          <a href="learn.html" style="color:inherit; text-decoration:none; display:block;">Learn more</a>
//         </button>
//     `;

// }

function calculateFootprint() {
    // Get values from form
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const fuel = parseFloat(document.getElementById('fuel').value) || 0;
    const cookingFuel = parseFloat(document.getElementById('cookingFuel').value) || 0;
    const transportKm = parseFloat(document.getElementById('transportKm').value) || 0;
    const wasteKg = parseFloat(document.getElementById('wasteKg').value) || 0;
    const cookingType = document.getElementById('cookingType').value;

    // Emission factors
    const ELECTRICITY_FACTOR = 0.5;
    const FUEL_FACTOR = 2.3;
    const LPG_FACTOR = 1.5;
    const KEROSENE_FACTOR = 2.5;
    const TRANSPORT_FACTOR = 0.15;
    const WASTE_FACTOR = 0.1;

    // Calculations
    const electricityEmission = electricity * ELECTRICITY_FACTOR;
    const fuelEmission = fuel * FUEL_FACTOR;
    const cookingEmission = cookingType === 'lpg' 
        ? cookingFuel * LPG_FACTOR 
        : cookingFuel * KEROSENE_FACTOR;
    const transportEmission = transportKm * TRANSPORT_FACTOR;
    const wasteEmission = wasteKg * WASTE_FACTOR;

    const totalFootprint = electricityEmission + fuelEmission + cookingEmission +
                          transportEmission + wasteEmission;

    // Display results
    // document.getElementById('result').style.display = 'block';
    // document.getElementById('totalFootprint').textContent = 
    //     `${totalFootprint.toFixed(2)} kg CO₂`;
    
    // document.getElementById('electricityEmission').textContent = 
    //     `${electricityEmission.toFixed(2)} kg`;
    // document.getElementById('fuelEmission').textContent = 
    //     `${fuelEmission.toFixed(2)} kg`;
    // document.getElementById('cookingEmission').textContent = 
    //     `${cookingEmission.toFixed(2)} kg`;
    // document.getElementById('transportEmission').textContent = 
    //     `${transportEmission.toFixed(2)} kg`;
    // document.getElementById('wasteEmission').textContent = 
    //     `${wasteEmission.toFixed(2)} kg`;

    const params = new URLSearchParams({
        total: totalFootprint.toFixed(2),
        electricity: electricityEmission.toFixed(2),
        fuel: fuelEmission.toFixed(2),
        cooking: cookingEmission.toFixed(2),
        transport: transportEmission.toFixed(2),
        waste: wasteEmission.toFixed(2)
    });

    // Redirect to results page
    window.location.href = `result.html?${params.toString()}`;
}
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
    //     `${wasteEmission.toFixed(2)} kg`;<!-- <label>Monthly Light Bill (Naira):</label>
            <input type="number" id="electricity" placeholder="e.g 5000">
            
            <label>Weekly Transport (km):</label>
            <select id="transport">
                <option value="0">I trek or bike</option>
                <option value="5">Danfo Bus</option>
                <option value="8">Private Car</option>
                <option value="10">Okada</option>
            </select>
            
            <label>How many meat meals per week (Suya, fried meat etc):</label>
            <input type="number" id="meat" min="0" max="21" placeholder="0-21">
            
            <label>Do you use generator often?</label>
            <select id="generator">
                <option value="0">Never</option>
                <option value="5">Small I-pass-my-neighbor</option>
                <option value="10">Big Generator</option>
            </select>

            <button onclick="calculate()">Calculate Now!</button> -->

 <!-- <div class="result" id="result" style="display: none;">
                <h3>Your Carbon Wallet Report</h3>
                <p>Total Monthly CO₂: <strong id="totalFootprint"></strong></p>
                <h4>Breakdown:</h4>
                <ul>
                    <li>Electricity: <span id="electricityEmission"></span></li>
                    <li>Vehicle Fuel: <span id="fuelEmission"></span></li>
                    <li>Cooking Fuel: <span id="cookingEmission"></span></li>
                    <li>Transportation: <span id="transportEmission"></span></li>
                    <li>Waste: <span id="wasteEmission"></span></li>
                </ul>
            </div> -->
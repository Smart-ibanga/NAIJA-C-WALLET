function calculate() {
    // Local Nigerian conversion factors
    const electricity = (document.getElementById('electricity').value / 50) * 0.7; // Convert Naira to approximate kWh
    const transport = parseInt(document.getElementById('transport').value);
    const meat = parseInt(document.getElementById('meat').value) * 1.2; // Meat impact
    const generator = parseInt(document.getElementById('generator').value);

    const carbonFootprint = electricity + transport + meat + generator;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Your Carbon Score:</h3>
        <h2>${carbonFootprint.toFixed(1)} Carbon Points</h2>
        ${carbonFootprint > 50 ? 
            '🙈 Wow!! you have a poor carbon wallet, improve your savings plan' : 
            '👍🏾 Great job! keeping saving more'}
        
        <div style="margin-top:15px; background:${
            carbonFootprint > 50 ? '#ffd700' : '#98fb98'}; 
            padding:10px; border-radius:5px;">
            ${carbonFootprint > 50 ? 
                'Try Walk more, reduce generator use, & eat healthy!' : 
                'Thank you for keeping the planet safe!'}
        </div>
        <button style="display:inline-block; margin-top: 15px;">
         <a href="learn.html" style="color:inherit; text-decoration:none; display:block;">Learn more</a>
        </button>
    `;

}


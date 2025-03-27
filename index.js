
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
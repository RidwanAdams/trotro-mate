// Mock Data: This represents real buses found in the database
const trotroData = [
    { id: 1, driver: "Kojo (Sprinter)", route: "Circle - Achimota", price: 15, seats: 4, distance: "2 mins away" },
    { id: 2, driver: "Emmanuel (Toyota)", route: "Circle - Kasoa", price: 25, seats: 1, distance: "5 mins away" },
    { id: 3, driver: "Uncle Atta (Ford)", route: "Lapaz - Madina", price: 12, seats: 7, distance: "1 min away" },
    { id: 4, driver: "Senior Man (Urvan)", route: "Accra - Tema", price: 30, seats: 2, distance: "10 mins away" }
];

// UI Elements
const searchSection = document.getElementById('search-section');
const resultsSection = document.getElementById('results-section');
const bidSection = document.getElementById('bid-section');
const trotroList = document.getElementById('trotro-list');
const bidInput = document.getElementById('bid-amount');

// Function 1: Find Trotros
function findTrotros() {
    const destination = document.getElementById('destination-input').value;
    
    if(destination === "") {
        alert("Please enter a destination first.");
        return;
    }

    // Switch Views
    searchSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    // Generate List
    trotroList.innerHTML = ""; // Clear old results
    
    trotroData.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = "bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex justify-between items-center hover:border-red-500 cursor-pointer transition";
        busCard.onclick = () => openBid(bus);
        
        busCard.innerHTML = `
            <div>
                <h4 class="font-bold text-gray-800">${bus.driver}</h4>
                <p class="text-xs text-gray-500">${bus.route}</p>
                <div class="mt-1 flex items-center gap-2">
                    <span class="bg-gray-100 text-xs px-2 py-0.5 rounded text-gray-600"><i class="fas fa-clock"></i> ${bus.distance}</span>
                    <span class="text-xs text-green-600 font-bold">${bus.seats} seats</span>
                </div>
            </div>
            <div class="text-right">
                <span class="block font-bold text-lg text-gray-900">GH₵ ${bus.price}</span>
                <button class="text-xs bg-black text-white px-3 py-1 rounded-full mt-1">Select</button>
            </div>
        `;
        
        trotroList.appendChild(busCard);
    });
}

// Function 2: Open Bidding
function openBid(bus) {
    resultsSection.classList.add('hidden');
    bidSection.classList.remove('hidden');

    // Fill details
    document.getElementById('selected-driver').innerText = bus.driver;
    document.getElementById('selected-route').innerText = bus.route;
    document.getElementById('selected-price').innerText = `GH₵ ${bus.price.toFixed(2)}`;
    
    // Set default bid to the driver's price
    bidInput.value = bus.price;
}

// Function 3: Adjust Bid Amount
function adjustBid(amount) {
    let currentVal = parseInt(bidInput.value);
    bidInput.value = currentVal + amount;
}

// Function 4: Navigation Helpers
function resetSearch() {
    resultsSection.classList.add('hidden');
    searchSection.classList.remove('hidden');
}

function backToResults() {
    bidSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}
// --- Map Initialization ---
// Create the map centered on Accra (Coordinates: 5.6037, -0.1870)
var map = L.map('map', { zoomControl: false }).setView([5.6037, -0.1870], 13);

// Add the tile layer (The actual map images) - Using OpenStreetMap (Free)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// Add a marker for "Current Location" (Blue Dot)
var userIcon = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#3B82F6; width: 15px; height: 15px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);'></div>",
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});
L.marker([5.6037, -0.1870], {icon: userIcon}).addTo(map);


// --- Trotro Data & Logic ---

const trotroData = [
    { id: 1, driver: "Kojo (Sprinter)", route: "Circle - Achimota", price: 15, seats: 4, distance: "2 mins", lat: 5.6100, lng: -0.1900 },
    { id: 2, driver: "Emmanuel (Toyota)", route: "Circle - Kasoa", price: 25, seats: 1, distance: "5 mins", lat: 5.5900, lng: -0.1800 },
    { id: 3, driver: "Uncle Atta (Ford)", route: "Lapaz - Madina", price: 12, seats: 7, distance: "1 min", lat: 5.6050, lng: -0.1850 },
    { id: 4, driver: "Senior Man (Urvan)", route: "Accra - Tema", price: 30, seats: 2, distance: "10 mins", lat: 5.6150, lng: -0.1750 }
];

const searchSection = document.getElementById('search-section');
const resultsSection = document.getElementById('results-section');
const bidSection = document.getElementById('bid-section');
const trotroList = document.getElementById('trotro-list');
const bidInput = document.getElementById('bid-amount');
let busMarkers = []; // Array to keep track of bus markers

function findTrotros() {
    const destination = document.getElementById('destination-input').value;
    
    if(destination === "") {
        alert("Please enter a destination first.");
        return;
    }

    // UI Updates
    searchSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    // Add Bus Markers to Map
    addBusMarkers();

    // Generate List
    trotroList.innerHTML = "";
    
    trotroData.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = "bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex justify-between items-center hover:border-red-500 cursor-pointer transition relative overflow-hidden group";
        busCard.onclick = () => {
            focusOnBus(bus.lat, bus.lng);
            setTimeout(() => openBid(bus), 600); // Wait for map zoom before opening bid
        };
        
        busCard.innerHTML = `
            <div class="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-10 transition"></div>
            <div class="relative z-10">
                <h4 class="font-bold text-gray-800 text-sm">${bus.driver}</h4>
                <p class="text-xs text-gray-500 mb-2">${bus.route}</p>
                <div class="flex items-center gap-2">
                    <span class="bg-gray-100 text-[10px] px-2 py-1 rounded-md text-gray-600 font-medium flex items-center gap-1">
                        <i class="fas fa-clock"></i> ${bus.distance}
                    </span>
                    <span class="text-[10px] text-green-700 font-bold bg-green-50 px-2 py-1 rounded-md border border-green-100">
                        ${bus.seats} seats
                    </span>
                </div>
            </div>
            <div class="text-right relative z-10">
                <span class="block font-extrabold text-lg text-gray-900">GH₵ ${bus.price}</span>
                <span class="text-[10px] text-gray-400">Fixed</span>
            </div>
        `;
        
        trotroList.appendChild(busCard);
    });
}

function addBusMarkers() {
    // Icon for the bus
    var busIcon = L.divIcon({
        className: 'bus-marker-icon',
        html: "<div style='background-color: #DC2626; color: white; padding: 5px; border-radius: 8px; font-size: 12px; font-weight: bold; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.3);'><i class='fas fa-bus'></i></div>",
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });

    trotroData.forEach(bus => {
        var marker = L.marker([bus.lat, bus.lng], {icon: busIcon})
            .addTo(map)
            .bindPopup(`<b>${bus.driver}</b><br>GH₵ ${bus.price}`);
        busMarkers.push(marker);
    });

    // Zoom out slightly to see all buses
    var group = new L.featureGroup(busMarkers);
    map.fitBounds(group.getBounds().pad(0.2));
}

function focusOnBus(lat, lng) {
    map.flyTo([lat, lng], 16, {
        animate: true,
        duration: 1.5
    });
}

function openBid(bus) {
    resultsSection.classList.add('hidden');
    bidSection.classList.remove('hidden');

    document.getElementById('selected-driver').innerText = bus.driver;
    document.getElementById('selected-route').innerText = bus.route;
    document.getElementById('selected-price').innerText = `GH₵ ${bus.price.toFixed(2)}`;
    bidInput.value = bus.price;
}

function adjustBid(amount) {
    let currentVal = parseInt(bidInput.value);
    if(currentVal + amount > 0) {
        bidInput.value = currentVal + amount;
    }
}

function resetSearch() {
    resultsSection.classList.add('hidden');
    searchSection.classList.remove('hidden');
    
    // Remove bus markers when going back
    busMarkers.forEach(marker => map.removeLayer(marker));
    busMarkers = [];
    
    // Reset map view
    map.setView([5.6037, -0.1870], 13);
}

function backToResults() {
    bidSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}
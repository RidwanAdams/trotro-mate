# 🚌 Trotro Mate - Ride-Hailing App UI

![GitHub last commit](https://img.shields.io/github/last-commit/RidwanAdams/trotro-mate)
![GitHub repo size](https://img.shields.io/github/repo-size/RidwanAdams/trotro-mate)
![GitHub](https://img.shields.io/github/license/RidwanAdams/trotro-mate)
![GitHub stars](https://img.shields.io/github/stars/RidwanAdams/trotro-mate?style=social)

A modern mobile-first ride-hailing application UI for Ghanaian "trotro" (mini-bus) transportation with interactive maps and real-time booking.

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Here-green?style=for-the-badge)](https://ridwanadams.github.io/trotro-mate)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-4285F4?style=for-the-badge&logo=github&logoColor=white)](https://ridwanadams.github.io/trotro-mate)

## ✨ Features

| Feature | Description |
|---------|-------------|
| **🗺️ Interactive Map** | Leaflet.js integration with OpenStreetMap tiles |
| **📍 Real-time Tracking** | Mock bus locations with distance indicators |
| **💰 Dynamic Pricing** | Seat bidding system with price adjustment |
| **📱 Mobile-First Design** | Optimized for smartphone use |
| **🎨 Glassmorphism UI** | Modern frosted glass design effects |
| **⚡ Smooth Animations** | Panel transitions and map interactions |
| **🚍 Bus Selection** | Filter and choose available trotros |

## 🛠️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Mapping
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white)

### Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## 📁 Project Structure

```
trotro-mate/
├── 📄 index.html      # Main application
├── 📜 app.js          # Application logic (map, bus data, UI)
├── 🎨 styles.css      # Custom CSS animations and overrides
├── 📖 README.md       # This file
└── 📄 LICENSE         # MIT License
```

## 🗺️ Map Integration

The app uses cutting-edge mapping technology:

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Map Engine** | Leaflet.js | Interactive map rendering |
| **Map Tiles** | OpenStreetMap | Free, open-source map data |
| **Markers** | Custom SVG | User location and bus positions |
| **Animations** | Fly-to | Smooth map transitions |
| **Geolocation** | Browser API | User location detection |

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Basic understanding of HTML/CSS/JavaScript
- Internet connection (for map tiles)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/RidwanAdams/trotro-mate.git
cd trotro-mate
```

2. **Run locally**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Open browser: http://localhost:8000
```

### Customization

1. **Change default location** (Accra, Ghana):
```javascript
// In app.js, line ~10
map.setView([5.6037, -0.1870], 13); // [latitude, longitude], zoom level
```

2. **Update bus data**:
```javascript
// In app.js, trotroData array
const trotroData = [
    { 
        id: 1, 
        driver: "Kojo (Sprinter)", 
        route: "Circle - Achimota", 
        price: 15, 
        seats: 4, 
        distance: "2 mins", 
        lat: 5.6100, 
        lng: -0.1900 
    },
    // Add more buses here...
];
```

## 📱 UI Components

### 1. Search Panel
- **Current Location**: Auto-detected or manual input
- **Destination Input**: Type your destination
- **Find Trotro**: Search for available buses

### 2. Results Panel
- **Bus List**: Available trotros with details
- **Driver Info**: Name and vehicle type
- **Route & Price**: Destination and fare
- **Seat Availability**: Number of available seats
- **Distance**: Time to arrival

### 3. Booking Panel
- **Bus Details**: Complete information
- **Price Display**: Current fare
- **Bid System**: Adjust price (+/- buttons)
- **Confirm Booking**: Finalize reservation

### 4. Map View
- **User Marker**: Blue circle for your location
- **Bus Markers**: Red markers for available buses
- **Interactive Controls**: Zoom, pan, and selection
- **Selection Focus**: Auto-zoom to selected bus

## 🎨 Design Features

| Design Element | Description |
|----------------|-------------|
| **Glassmorphism** | Frosted glass effect with backdrop blur |
| **Mobile-First** | Optimized for smartphone screens |
| **Smooth Transitions** | 300ms CSS transitions for all interactions |
| **Bottom Sheet UI** | Mobile-optimized panel design |
| **Custom Markers** | SVG icons for map markers |
| **Responsive Layout** | Adapts to all screen sizes |

## 🔄 Application Flow

```mermaid
graph LR
    A[Search Destination] --> B[Find Available Buses]
    B --> C[Select Bus]
    C --> D[Adjust Bid Price]
    D --> E[Confirm Booking]
    E --> F[Booking Complete]
```

## 🌐 Deployment

### GitHub Pages (Recommended)
1. Go to repository **Settings** → **Pages**
2. Set source to **main** branch
3. Save and wait for deployment
4. Access at: `https://ridwanadams.github.io/trotro-mate`

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RidwanAdams/trotro-mate)

### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RidwanAdams/trotro-mate)

## 📊 Mock Data Structure

```javascript
{
    id: Number,          // Unique identifier (1, 2, 3...)
    driver: String,      // "Kojo (Sprinter)"
    route: String,       // "Circle - Achimota"
    price: Number,       // 15 (GHS)
    seats: Number,       // 4 (available seats)
    distance: String,    // "2 mins" (time to arrival)
    lat: Number,         // 5.6100 (latitude)
    lng: Number          // -0.1900 (longitude)
}
```

## 🚀 Future Enhancements

- [ ] **Real API Integration**: Connect to transportation APIs
- [ ] **User Authentication**: Login/signup system
- [ ] **Payment Processing**: Mobile money integration
- [ ] **Live Tracking**: WebSocket for real-time updates
- [ ] **Favorites System**: Save frequent routes
- [ ] **Trip History**: Past bookings record
- [ ] **Push Notifications**: Booking confirmations
- [ ] **Driver Ratings**: Review system
- [ ] **Multi-language**: Support for local languages
- [ ] **Offline Mode**: Cache map data for offline use

## 🎯 Use Cases

| Scenario | Application |
|----------|-------------|
| **University Projects** | Web development coursework |
| **UI/UX Portfolio** | Showcase mobile design skills |
| **Startup MVP** | Transportation service prototype |
| **Map Integration Demo** | Leaflet.js implementation example |
| **African Tech Solutions** | Local problem-solving applications |

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Leaflet.js](https://leafletjs.com) for amazing mapping library
- [OpenStreetMap](https://www.openstreetmap.org) for free map tiles
- [Tailwind CSS](https://tailwindcss.com) for utility-first CSS
- [Font Awesome](https://fontawesome.com) for beautiful icons
- Ghanaian transportation system for inspiration

## 📞 Contact

Ridwan Adams - [GitHub](https://github.com/RidwanAdams) - ridwan@example.com

Project Link: [https://github.com/RidwanAdams/trotro-mate](https://github.com/RidwanAdams/trotro-mate)

---

⭐ **If you find this project useful, please give it a star!** ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=RidwanAdams/trotro-mate&type=Date)](https://star-history.com/#RidwanAdams/trotro-mate&Date)
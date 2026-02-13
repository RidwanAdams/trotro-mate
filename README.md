# Trotro Mate - Ride-Hailing App UI

A modern mobile-first ride-hailing application UI for Ghanaian "trotro" (mini-bus) transportation with interactive maps and real-time booking.

## 🚌 Features

- **Interactive Map** - Leaflet.js integration with bus locations
- **Real-time Bus Tracking** - Mock data with distance indicators
- **Seat Bidding System** - Dynamic price adjustment
- **Mobile-First Design** - Optimized for smartphone use
- **Smooth Animations** - Panel transitions and map interactions
- **Bus Selection** - Filter and choose available trotros

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Mapping**: Leaflet.js (OpenStreetMap tiles)
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Deployment**: Static hosting compatible

## 📁 Project Structure

```
trotro-mate/
├── index.html      # Main application
├── app.js          # Application logic (map, bus data, UI)
├── styles.css      # Custom CSS animations and overrides
└── README.md       # This file
```

## 🗺️ Map Integration

The app uses:
- **Leaflet.js** for interactive maps
- **OpenStreetMap** tiles (free)
- **Custom markers** for user location and buses
- **Fly-to animations** for bus selection

## 🔧 Setup Instructions

### 1. Local Development
```bash
git clone https://github.com/yourusername/trotro-mate.git
cd trotro-mate
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

### 2. Customization
1. **Change default location** in `app.js`:
```javascript
// Current: Accra, Ghana
map.setView([5.6037, -0.1870], 13);
```

2. **Update bus data** in `app.js`:
```javascript
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
    // Add more buses...
];
```

## 📱 UI Components

### 1. Search Panel
- Current location display
- Destination input
- Find Trotro button

### 2. Results Panel
- Available buses list
- Driver info, route, price
- Distance and seat availability
- Select button for booking

### 3. Booking Panel
- Bus details
- Price display
- Bid adjustment (+/- buttons)
- Confirm booking

### 4. Map View
- User location marker (blue)
- Bus markers (red)
- Interactive zoom/pan
- Selection focus

## 🎨 Design Features

- **Glass morphism** effects
- **Smooth transitions** between panels
- **Mobile-optimized** bottom sheet UI
- **Custom map markers** with icons
- **Responsive design** for all screen sizes

## 🔄 Application Flow

1. **Search** → Enter destination
2. **Find** → Click "Find Trotro"
3. **Select** → Choose from available buses
4. **Bid** → Adjust price (optional)
5. **Confirm** → Book seat

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Set source to `main` branch
4. Access at `https://yourusername.github.io/trotro-mate`

### Netlify/Vercel
1. Connect GitHub repository
2. Set build command: (none for static site)
3. Set publish directory: `.`
4. Deploy

## 📊 Mock Data Structure

```javascript
{
    id: Number,          // Unique identifier
    driver: String,      // Driver name and vehicle
    route: String,       // Route description
    price: Number,       // Standard fare
    seats: Number,       // Available seats
    distance: String,    // Time to arrival
    lat: Number,         // Latitude for map
    lng: Number          // Longitude for map
}
```

## 🔧 Extending the Project

### Backend Integration
1. **Real bus data**: Connect to transportation API
2. **User authentication**: Add login/signup
3. **Payment processing**: Integrate mobile money API
4. **Live tracking**: WebSocket for real-time updates

### Additional Features
1. **Favorites**: Save frequent routes
2. **History**: Past trips
3. **Notifications**: Booking confirmations
4. **Ratings**: Driver reviews

## 🎯 Use Cases

- **Transportation apps** in developing countries
- **University projects** for web development
- **UI/UX portfolio** showcasing mobile design
- **Map integration** demonstrations

## 📄 License

MIT License - free for personal and commercial use.

## 🙏 Acknowledgments

- [Leaflet.js](https://leafletjs.com) for mapping
- [OpenStreetMap](https://www.openstreetmap.org) for map tiles
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Font Awesome](https://fontawesome.com) for icons

---

**Note**: This is a frontend prototype. For production use, implement backend services, real data, and proper security.
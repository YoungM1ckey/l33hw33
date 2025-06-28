const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const hotels = [
    { id: 1, name: 'Premier Hotel Lybid', address: 'Kyiv, Shevchenko Blvd 1', city: 'kyiv' },
    { id: 2, name: 'Hotel Ukraine', address: 'Kyiv, Instytutska St 4', city: 'kyiv' },
    { id: 3, name: 'Grand Hotel', address: 'Lviv, Svobody Ave 13', city: 'lviv' },
    { id: 4, name: 'Dnister Hotel', address: 'Lviv, Mateyka St 6', city: 'lviv' },
];

app.get('/api/hotels', (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ message: 'City parameter is required' });
    }

    const filteredHotels = hotels.filter(hotel => hotel.city === city.toLowerCase());
    res.json(filteredHotels);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

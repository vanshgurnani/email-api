function getCurrentLocation(req, res) {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Define success callback function
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            res.json({ latitude, longitude });
        }

        // Define error callback function
        function error(error) {
            res.status(500).json({ error: "Failed to get location." });
        }

        // Call navigator.geolocation.getCurrentPosition()
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        res.status(400).json({ error: "Geolocation is not supported by this browser." });
    }
}

module.exports = {
    getCurrentLocation
};

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
  },
  (error) => {
    console.error(error.message);
  },
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
)

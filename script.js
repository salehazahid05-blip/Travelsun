// Destinations (4 cities)
const destinations = [
  { name: "Paris", country: "France", img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "London", country: "United Kingdom", img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Madrid", country: "Spain", img: "https://images.pexels.com/photos/1132951/pexels-photo-1132951.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Rome", country: "Italy", img: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800" }
];

const capitalsGrid = document.getElementById('capitalsGrid');
if (capitalsGrid) {
  destinations.forEach(cap => {
    const card = document.createElement('div');
    card.className = 'capital-card';
    card.innerHTML = `<div class="capital-img" style="background-image: url(${cap.img}); background-size: cover; background-position: center;"></div><h3>${cap.name}</h3><p>${cap.country}</p>`;
    capitalsGrid.appendChild(card);
  });
}

// Packages
const packagesList = [
  { type: "Couple Package", icon: "fas fa-heart", desc: "Private dining, spa access, beachfront suite", price: "£1599" },
  { type: "Group Package", icon: "fas fa-user-friends", desc: "Adventure tours, nightlife access, shared transport", price: "£1099" },
  { type: "Solo Package", icon: "fas fa-hiking", desc: "Flexible itinerary, cultural tours, co-working spaces", price: "£899" }
];

const packagesGrid = document.getElementById('packagesGrid');
if (packagesGrid) {
  packagesList.forEach(pkg => {
    const div = document.createElement('div');
    div.className = 'package-item';
    div.innerHTML = `<i class="${pkg.icon}"></i><h3>${pkg.type}</h3><p>${pkg.desc}</p><div class="price">${pkg.price}</div>`;
    packagesGrid.appendChild(div);
  });
}

// WhatsApp booking
const whatsappBtn = document.getElementById('whatsappBookBtn');
const bookingDate = document.getElementById('bookingDate');
const returnDate = document.getElementById('returnDate');
const bookDest = document.getElementById('bookDestination');
const departureSelect = document.getElementById('departureAirport');
const arrivalSelect = document.getElementById('arrivalAirport');
const statusBadge = document.getElementById('statusBadge');
const bookingStatusMsg = document.getElementById('bookingStatusMsg');

function getWhatsAppMessage() {
  const dep = departureSelect ? departureSelect.value : "LHR";
  const arr = arrivalSelect ? arrivalSelect.value : "Unknown";
  const dest = bookDest ? bookDest.value : "Turkey";
  const depDate = bookingDate ? bookingDate.value : "2026-06-01";
  const retDate = returnDate ? returnDate.value : "2026-06-08";
  return `TRAVELSUN Booking Request\nDeparture: ${dep}\nDestination: ${dest} (Arrival: ${arr})\nDeparture: ${depDate}\nReturn: ${retDate}\nPlease share package options. Call us at 02046218739 for urgent queries.`;
}

if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    const msg = getWhatsAppMessage();
    const url = `https://wa.me/447848146969?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    if (statusBadge) statusBadge.innerText = 'Status: Booking Sent';
    if (bookingStatusMsg) bookingStatusMsg.innerText = 'Request sent. Our agent will respond shortly.';
  });
}

// Inquiry form - email updated to travelsun37@gmail.com
const sendQuery = document.getElementById('sendQueryBtn');
const qName = document.getElementById('queryName');
const qEmail = document.getElementById('queryEmail');
const qSubject = document.getElementById('querySubject');
const qMessage = document.getElementById('queryMessage');
const qFeedback = document.getElementById('queryFeedback');

if (sendQuery) {
  sendQuery.addEventListener('click', () => {
    if (!qName.value.trim() || !qEmail.value.trim() || !qMessage.value.trim()) {
      qFeedback.innerText = 'Please fill all required fields.';
      qFeedback.style.color = '#f4a100';
      return;
    }
    const body = `Name: ${qName.value}%0AEmail: ${qEmail.value}%0A%0AMessage:%0A${qMessage.value}`;
    const mailto = `mailto:travelsun37@gmail.com?subject=${encodeURIComponent(qSubject.value || 'Travel Inquiry')}&body=${body}`;
    window.location.href = mailto;
    qFeedback.innerText = 'Email client opened. Please send the message.';
    qFeedback.style.color = '#0057a3';
    qName.value = qEmail.value = qSubject.value = qMessage.value = '';
  });
}

// Date validation
if (returnDate && bookingDate) {
  bookingDate.addEventListener('change', () => {
    if (returnDate.value < bookingDate.value) returnDate.value = bookingDate.value;
  });
}

console.log('TravelSun website ready – email updated to travelsun37@gmail.com');
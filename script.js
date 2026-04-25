// DESTINATIONS DATA
const destinations = [
  { name: "Turkey", desc: "Istanbul, Cappadocia & Mediterranean coast | Cultural heritage & natural wonders", bg: "url('https://images.pexels.com/photos/1460836/pexels-photo-1460836.jpeg?auto=compress&cs=tinysrgb&w=800')" },
  { name: "Spain", desc: "Barcelona, Madrid & Costa del Sol | Art, architecture & vibrant culture", bg: "url('https://images.pexels.com/photos/3201157/pexels-photo-3201157.jpeg?auto=compress&cs=tinysrgb&w=800')" },
  { name: "Canada", desc: "Toronto, Vancouver & Rocky Mountains | Urban energy meets untamed wilderness", bg: "url('https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800')" },
  { name: "Malaysia", desc: "Kuala Lumpur, Langkawi & Borneo | Tropical diversity & modern skyline", bg: "url('https://images.pexels.com/photos/2423520/pexels-photo-2423520.jpeg?auto=compress&cs=tinysrgb&w=800')" },
  { name: "Dubai", desc: "Burj Khalifa, Palm Jumeirah & desert | Luxury, innovation & Arabian heritage", bg: "url('https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800')" },
  { name: "London", desc: "Westminster, Thames & Royal Parks | Historic grandeur & contemporary culture", bg: "url('https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800')" }
];

const destGrid = document.getElementById('destinationsGrid');
if (destGrid) {
  destGrid.innerHTML = '';
  destinations.forEach(d => {
    const card = document.createElement('div');
    card.className = 'dest-card';
    card.innerHTML = `
      <div class="dest-img" style="background-image: ${d.bg}; background-size: cover; background-position: center;"></div>
      <div class="dest-info">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
      </div>
    `;
    destGrid.appendChild(card);
  });
}

// PACKAGES DATA - Professional naming
const packagesData = [
  { type: "Family Package", icon: "fas fa-users", desc: "Resort accommodations · Group activities · Childcare available", price: "£2899", days: "7 nights" },
  { type: "Couple Package", icon: "fas fa-heart", desc: "Private dining · Spa access · Beachfront suite", price: "£1599", days: "5 nights" },
  { type: "Group Package", icon: "fas fa-user-friends", desc: "Adventure tours · Nightlife access · Shared transport", price: "£1099", days: "6 nights" },
  { type: "Solo Package", icon: "fas fa-hiking", desc: "Flexible itinerary · Co-working spaces · Cultural tours", price: "£899", days: "5 days" }
];

const packageContainer = document.getElementById('packageContainer');
if (packageContainer) {
  packageContainer.innerHTML = '';
  packagesData.forEach(p => {
    const card = document.createElement('div');
    card.className = 'package-card';
    card.innerHTML = `
      <i class="${p.icon}"></i>
      <h3>${p.type}</h3>
      <p>${p.desc}</p>
      <div class="price">${p.price}</div>
      <small>${p.days} · per person</small>
    `;
    packageContainer.appendChild(card);
  });
}

// DOM Elements
const whatsappBtn = document.getElementById('whatsappBookBtn');
const bookingDateInput = document.getElementById('bookingDate');
const returnDateInput = document.getElementById('returnDate');
const bookDestinationSelect = document.getElementById('bookDestination');
const departureSelect = document.getElementById('departureAirport');
const arrivalSelect = document.getElementById('arrivalAirport');
const statusBadge = document.getElementById('statusBadge');
const bookingStatusMsg = document.getElementById('bookingStatusMsg');

// Update destination dropdown
if (bookDestinationSelect) {
  const options = ['Turkey', 'Spain', 'Canada', 'Malaysia', 'Dubai', 'London'];
  bookDestinationSelect.innerHTML = '';
  options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    bookDestinationSelect.appendChild(option);
  });
}

// Generate WhatsApp message - professional format
function getAutoMessage() {
  const departure = departureSelect ? departureSelect.value : "London Heathrow (LHR)";
  const arrival = arrivalSelect ? arrivalSelect.value : "Unknown";
  const destFinal = bookDestinationSelect ? bookDestinationSelect.value : "Turkey";
  const bookDate = bookingDateInput ? bookingDateInput.value : "2026-05-15";
  const retDate = returnDateInput ? returnDateInput.value : "2026-05-22";
  return `TRAVELSUN Booking Request\n\nDeparture: ${departure}\nDestination: ${destFinal} (Arrival: ${arrival})\nDeparture Date: ${bookDate}\nReturn Date: ${retDate}\n\nPlease provide available packages and payment details.`;
}

// WhatsApp booking
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    const msg = getAutoMessage();
    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/447848146969?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
    
    if (statusBadge) {
      statusBadge.innerHTML = 'Status: Booking Confirmed';
      statusBadge.style.borderLeftColor = '#00aa55';
    }
    if (bookingStatusMsg) {
      bookingStatusMsg.innerHTML = 'Request sent. A representative will respond shortly.';
      bookingStatusMsg.style.color = '#888';
    }
  });
}

// Contact button
const contactHero = document.getElementById('contactUsHeroBtn');
if (contactHero) {
  contactHero.addEventListener('click', () => {
    window.location.href = 'tel:02081636893';
  });
}

// Email query
const sendQueryBtn = document.getElementById('sendQueryBtn');
const queryName = document.getElementById('queryName');
const queryEmail = document.getElementById('queryEmail');
const querySubject = document.getElementById('querySubject');
const queryMessage = document.getElementById('queryMessage');
const queryFeedback = document.getElementById('queryFeedback');

if (sendQueryBtn) {
  sendQueryBtn.addEventListener('click', () => {
    const nameVal = queryName.value.trim();
    const emailVal = queryEmail.value.trim();
    const subjectVal = querySubject.value.trim() || "Travel Inquiry";
    const msgVal = queryMessage.value.trim();
    
    if (!nameVal || !emailVal || !msgVal) {
      if (queryFeedback) {
        queryFeedback.innerHTML = "Please complete all fields before submitting.";
        queryFeedback.style.color = "#c9a03d";
      }
      return;
    }
    
    const mailBody = `Name: ${nameVal}%0AEmail: ${emailVal}%0A%0AMessage:%0A${msgVal}`;
    const mailtoLink = `mailto:travelsun06@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${mailBody}`;
    window.location.href = mailtoLink;
    
    if (queryFeedback) {
      queryFeedback.innerHTML = "Your email client has been opened. Please send the message.";
      queryFeedback.style.color = "#888";
    }
    
    queryName.value = '';
    queryEmail.value = '';
    querySubject.value = '';
    queryMessage.value = '';
  });
}

// Date validation
if (returnDateInput && bookingDateInput) {
  bookingDateInput.addEventListener('change', () => {
    if (returnDateInput.value < bookingDateInput.value) {
      returnDateInput.value = bookingDateInput.value;
    }
  });
}

// Initial status
if (statusBadge) statusBadge.innerHTML = 'Status: Available';

const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
if (slides.length) {
  setInterval(() => {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }, 3500);
}

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('.nav-drop-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const wrap = btn.closest('.nav-dropdown');
    const open = wrap.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');
if (revealItems.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('revealed'));
}

// Starter zip-code map data. Replace/add your real service zips here.
const serviceZipData = {
  "32303": {x: 78, y: 18, city: "Tallahassee"},
  "32305": {x: 79, y: 21, city: "Tallahassee"},
  "32346": {x: 83, y: 23, city: "Panacea"},
  "32401": {x: 58, y: 34, city: "Panama City"},
  "32404": {x: 60, y: 35, city: "Panama City"},
  "32405": {x: 57, y: 33, city: "Panama City"},
  "32408": {x: 62, y: 37, city: "Panama City Beach"},
  "32413": {x: 55, y: 35, city: "Panama City Beach"},
  "32428": {x: 47, y: 30, city: "Chipley"},
  "32433": {x: 34, y: 31, city: "DeFuniak Springs"},
  "32439": {x: 29, y: 36, city: "Freeport"},
  "32459": {x: 24, y: 39, city: "Santa Rosa Beach"},
  "32501": {x: 10, y: 46, city: "Pensacola"},
  "32503": {x: 12, y: 44, city: "Pensacola"},
  "32504": {x: 14, y: 43, city: "Pensacola"},
  "32506": {x: 8, y: 49, city: "Pensacola"},
  "32507": {x: 6, y: 51, city: "Pensacola"},
  "32514": {x: 17, y: 41, city: "Pensacola"},
  "32526": {x: 5, y: 42, city: "Pensacola"},
  "32533": {x: 18, y: 38, city: "Cantonment"},
  "32536": {x: 22, y: 33, city: "Crestview"},
  "32539": {x: 24, y: 34, city: "Crestview"},
  "32541": {x: 26, y: 42, city: "Destin"},
  "32547": {x: 28, y: 40, city: "Fort Walton Beach"},
  "32548": {x: 27, y: 41, city: "Fort Walton Beach"},
  "32550": {x: 23, y: 41, city: "Miramar Beach"},
  "32561": {x: 13, y: 48, city: "Gulf Breeze"},
  "32563": {x: 15, y: 47, city: "Gulf Breeze"},
  "32566": {x: 17, y: 46, city: "Navarre"},
  "32569": {x: 31, y: 38, city: "Mary Esther"},
  "32570": {x: 21, y: 39, city: "Milton"},
  "32571": {x: 19, y: 40, city: "Milton"},
  "32578": {x: 30, y: 35, city: "Niceville"},
  "32579": {x: 31, y: 36, city: "Shalimar"},
  "32580": {x: 33, y: 38, city: "Valparaiso"},
  "32583": {x: 20, y: 43, city: "Milton"}
};

const zipInput = document.getElementById('zipInput');
const zipBtn = document.getElementById('zipCheckBtn');
const zipResult = document.getElementById('zipResult');
const mapWrap = document.getElementById('floridaMapWrap');
const mapPin = document.getElementById('mapPin');

function runZipCheck() {
  if (!zipInput || !zipResult || !mapWrap || !mapPin) return;
  const zip = (zipInput.value || '').trim();
  mapWrap.classList.remove('active');
  mapPin.classList.remove('drop');
  if (!/^\d{5}$/.test(zip)) {
    zipResult.textContent = 'Please enter a valid 5-digit zip code.';
    zipResult.className = 'zip-result error';
    return;
  }
  const point = serviceZipData[zip];
  if (point) {
    mapPin.style.left = point.x + '%';
    mapPin.style.top = point.y + '%';
    mapWrap.classList.add('active');
    void mapPin.offsetWidth;
    mapPin.classList.add('drop');
    zipResult.textContent = `Yes — we serve the ${point.city} area.`;
    zipResult.className = 'zip-result success';
  } else {
    zipResult.textContent = 'Contact us to confirm service availability for your area.';
    zipResult.className = 'zip-result error';
  }
}

if (zipBtn) zipBtn.addEventListener('click', runZipCheck);
if (zipInput) zipInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    runZipCheck();
  }
});

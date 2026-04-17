document.querySelectorAll('.slider').forEach((slider) => {
  const slides = slider.querySelectorAll('.slide');
  let slideIndex = 0;
  if (slides.length) {
    setInterval(() => {
      slides.forEach((slide) => slide.classList.remove('active'));
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add('active');
    }, 3500);
  }
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

function closeMobileNav() {
  if (!toggle || !nav) return;
  nav.classList.remove('open');
  document.body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
}

if (toggle && nav) {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const open = nav.classList.toggle('open');
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Dropdown navigation behavior
function closeSiteDropdowns() {
  document.querySelectorAll('.nav-dropdown.open').forEach((drop) => {
    drop.classList.remove('open');
    const trigger = drop.querySelector('.nav-main-toggle, .nav-drop-toggle');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

document.querySelectorAll('.nav-main-toggle, .nav-drop-toggle').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const drop = btn.closest('.nav-dropdown');
    const shouldOpen = !drop.classList.contains('open');
    closeSiteDropdowns();
    if (shouldOpen) {
      drop.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

document.querySelectorAll('.nav-dropdown-menu a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-dropdown') && !e.target.closest('.menu-toggle') && !e.target.closest('.main-nav')) {
    closeSiteDropdowns();
    closeMobileNav();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSiteDropdowns();
    closeMobileNav();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 980) {
    closeMobileNav();
  }
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    closeSiteDropdowns();
    closeMobileNav();
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

const serviceZipData = {
  "32948": {"label": "Treasure Coast area"},
  "32957": {"label": "Treasure Coast area"},
  "32958": {"label": "Treasure Coast area"},
  "32960": {"label": "Treasure Coast area"},
  "32961": {"label": "Treasure Coast area"},
  "32962": {"label": "Treasure Coast area"},
  "32963": {"label": "Treasure Coast area"},
  "32964": {"label": "Treasure Coast area"},
  "32965": {"label": "Treasure Coast area"},
  "32966": {"label": "Treasure Coast area"},
  "32967": {"label": "Treasure Coast area"},
  "32968": {"label": "Treasure Coast area"},
  "32969": {"label": "Treasure Coast area"},
  "32970": {"label": "Treasure Coast area"},
  "32971": {"label": "Treasure Coast area"},
  "32978": {"label": "Treasure Coast area"},
  "33001": {"label": "Broward / Dade service area"},
  "33004": {"label": "Broward / Dade service area"},
  "33008": {"label": "Broward / Dade service area"},
  "33009": {"label": "Broward / Dade service area"},
  "33010": {"label": "Broward / Dade service area"},
  "33011": {"label": "Broward / Dade service area"},
  "33012": {"label": "Broward / Dade service area"},
  "33013": {"label": "Broward / Dade service area"},
  "33014": {"label": "Broward / Dade service area"},
  "33015": {"label": "Broward / Dade service area"},
  "33016": {"label": "Broward / Dade service area"},
  "33017": {"label": "Broward / Dade service area"},
  "33018": {"label": "Broward / Dade service area"},
  "33019": {"label": "Broward / Dade service area"},
  "33020": {"label": "Broward / Dade service area"},
  "33021": {"label": "Broward / Dade service area"},
  "33022": {"label": "Broward / Dade service area"},
  "33023": {"label": "Broward / Dade service area"},
  "33024": {"label": "Broward / Dade service area"},
  "33025": {"label": "Broward / Dade service area"},
  "33026": {"label": "Broward / Dade service area"},
  "33027": {"label": "Broward / Dade service area"},
  "33028": {"label": "Broward / Dade service area"},
  "33029": {"label": "Broward / Dade service area"},
  "33030": {"label": "Broward / Dade service area"},
  "33031": {"label": "Broward / Dade service area"},
  "33032": {"label": "Broward / Dade service area"},
  "33033": {"label": "Broward / Dade service area"},
  "33035": {"label": "Broward / Dade service area"},
  "33036": {"label": "Broward / Dade service area"},
  "33037": {"label": "Broward / Dade service area"},
  "33039": {"label": "Broward / Dade service area"},
  "33040": {"label": "Broward / Dade service area"},
  "33041": {"label": "Broward / Dade service area"},
  "33042": {"label": "Broward / Dade service area"},
  "33043": {"label": "Broward / Dade service area"},
  "33045": {"label": "Broward / Dade service area"},
  "33050": {"label": "Broward / Dade service area"},
  "33051": {"label": "Broward / Dade service area"},
  "33052": {"label": "Broward / Dade service area"},
  "33054": {"label": "Broward / Dade service area"},
  "33055": {"label": "Broward / Dade service area"},
  "33056": {"label": "Broward / Dade service area"},
  "33060": {"label": "Broward / Dade service area"},
  "33061": {"label": "Broward / Dade service area"},
  "33062": {"label": "Broward / Dade service area"},
  "33063": {"label": "Broward / Dade service area"},
  "33064": {"label": "Broward / Dade service area"},
  "33065": {"label": "Broward / Dade service area"},
  "33066": {"label": "Broward / Dade service area"},
  "33067": {"label": "Broward / Dade service area"},
  "33068": {"label": "Broward / Dade service area"},
  "33069": {"label": "Broward / Dade service area"},
  "33070": {"label": "Broward / Dade service area"},
  "33071": {"label": "Broward / Dade service area"},
  "33072": {"label": "Broward / Dade service area"},
  "33073": {"label": "Broward / Dade service area"},
  "33074": {"label": "Broward / Dade service area"},
  "33075": {"label": "Broward / Dade service area"},
  "33076": {"label": "Broward / Dade service area"},
  "33077": {"label": "Broward / Dade service area"},
  "33081": {"label": "Broward / Dade service area"},
  "33082": {"label": "Broward / Dade service area"},
  "33083": {"label": "Broward / Dade service area"},
  "33084": {"label": "Broward / Dade service area"},
  "33090": {"label": "Broward / Dade service area"},
  "33092": {"label": "Broward / Dade service area"},
  "33093": {"label": "Broward / Dade service area"},
  "33097": {"label": "Broward / Dade service area"},
  "33101": {"label": "Broward / Dade service area"},
  "33102": {"label": "Broward / Dade service area"},
  "33106": {"label": "Broward / Dade service area"},
  "33109": {"label": "Broward / Dade service area"},
  "33111": {"label": "Broward / Dade service area"},
  "33112": {"label": "Broward / Dade service area"},
  "33114": {"label": "Broward / Dade service area"},
  "33116": {"label": "Broward / Dade service area"},
  "33119": {"label": "Broward / Dade service area"},
  "33122": {"label": "Broward / Dade service area"},
  "33124": {"label": "Broward / Dade service area"},
  "33125": {"label": "Broward / Dade service area"},
  "33126": {"label": "Broward / Dade service area"},
  "33127": {"label": "Broward / Dade service area"},
  "33128": {"label": "Broward / Dade service area"},
  "33129": {"label": "Broward / Dade service area"},
  "33130": {"label": "Broward / Dade service area"},
  "33131": {"label": "Broward / Dade service area"},
  "33132": {"label": "Broward / Dade service area"},
  "33133": {"label": "Broward / Dade service area"},
  "33134": {"label": "Broward / Dade service area"},
  "33135": {"label": "Broward / Dade service area"},
  "33136": {"label": "Broward / Dade service area"},
  "33137": {"label": "Broward / Dade service area"},
  "33138": {"label": "Broward / Dade service area"},
  "33139": {"label": "Broward / Dade service area"},
  "33140": {"label": "Broward / Dade service area"},
  "33141": {"label": "Broward / Dade service area"},
  "33142": {"label": "Broward / Dade service area"},
  "33143": {"label": "Broward / Dade service area"},
  "33144": {"label": "Broward / Dade service area"},
  "33145": {"label": "Broward / Dade service area"},
  "33146": {"label": "Broward / Dade service area"},
  "33147": {"label": "Broward / Dade service area"},
  "33149": {"label": "Broward / Dade service area"},
  "33150": {"label": "Broward / Dade service area"},
  "33151": {"label": "Broward / Dade service area"},
  "33152": {"label": "Broward / Dade service area"},
  "33153": {"label": "Broward / Dade service area"},
  "33154": {"label": "Broward / Dade service area"},
  "33155": {"label": "Broward / Dade service area"},
  "33156": {"label": "Broward / Dade service area"},
  "33157": {"label": "Broward / Dade service area"},
  "33158": {"label": "Broward / Dade service area"},
  "33160": {"label": "Broward / Dade service area"},
  "33161": {"label": "Broward / Dade service area"},
  "33162": {"label": "Broward / Dade service area"},
  "33163": {"label": "Broward / Dade service area"},
  "33164": {"label": "Broward / Dade service area"},
  "33165": {"label": "Broward / Dade service area"},
  "33166": {"label": "Broward / Dade service area"},
  "33167": {"label": "Broward / Dade service area"},
  "33168": {"label": "Broward / Dade service area"},
  "33169": {"label": "Broward / Dade service area"},
  "33170": {"label": "Broward / Dade service area"},
  "33172": {"label": "Broward / Dade service area"},
  "33173": {"label": "Broward / Dade service area"},
  "33174": {"label": "Broward / Dade service area"},
  "33175": {"label": "Broward / Dade service area"},
  "33176": {"label": "Broward / Dade service area"},
  "33177": {"label": "Broward / Dade service area"},
  "33178": {"label": "Broward / Dade service area"},
  "33179": {"label": "Broward / Dade service area"},
  "33180": {"label": "Broward / Dade service area"},
  "33181": {"label": "Broward / Dade service area"},
  "33182": {"label": "Broward / Dade service area"},
  "33183": {"label": "Broward / Dade service area"},
  "33184": {"label": "Broward / Dade service area"},
  "33185": {"label": "Broward / Dade service area"},
  "33186": {"label": "Broward / Dade service area"},
  "33187": {"label": "Broward / Dade service area"},
  "33188": {"label": "Broward / Dade service area"},
  "33189": {"label": "Broward / Dade service area"},
  "33190": {"label": "Broward / Dade service area"},
  "33193": {"label": "Broward / Dade service area"},
  "33194": {"label": "Broward / Dade service area"},
  "33195": {"label": "Broward / Dade service area"},
  "33196": {"label": "Broward / Dade service area"},
  "33197": {"label": "Broward / Dade service area"},
  "33198": {"label": "Broward / Dade service area"},
  "33199": {"label": "Broward / Dade service area"},
  "33206": {"label": "Broward / Dade service area"},
  "33222": {"label": "Broward / Dade service area"},
  "33231": {"label": "Broward / Dade service area"},
  "33233": {"label": "Broward / Dade service area"},
  "33234": {"label": "Broward / Dade service area"},
  "33238": {"label": "Broward / Dade service area"},
  "33239": {"label": "Broward / Dade service area"},
  "33242": {"label": "Broward / Dade service area"},
  "33243": {"label": "Broward / Dade service area"},
  "33245": {"label": "Broward / Dade service area"},
  "33247": {"label": "Broward / Dade service area"},
  "33255": {"label": "Broward / Dade service area"},
  "33256": {"label": "Broward / Dade service area"},
  "33257": {"label": "Broward / Dade service area"},
  "33261": {"label": "Broward / Dade service area"},
  "33265": {"label": "Broward / Dade service area"},
  "33266": {"label": "Broward / Dade service area"},
  "33269": {"label": "Broward / Dade service area"},
  "33280": {"label": "Broward / Dade service area"},
  "33283": {"label": "Broward / Dade service area"},
  "33296": {"label": "Broward / Dade service area"},
  "33299": {"label": "Broward / Dade service area"},
  "33301": {"label": "Broward / Dade service area"},
  "33302": {"label": "Broward / Dade service area"},
  "33303": {"label": "Broward / Dade service area"},
  "33304": {"label": "Broward / Dade service area"},
  "33305": {"label": "Broward / Dade service area"},
  "33306": {"label": "Broward / Dade service area"},
  "33307": {"label": "Broward / Dade service area"},
  "33308": {"label": "Broward / Dade service area"},
  "33309": {"label": "Broward / Dade service area"},
  "33310": {"label": "Broward / Dade service area"},
  "33311": {"label": "Broward / Dade service area"},
  "33312": {"label": "Broward / Dade service area"},
  "33313": {"label": "Broward / Dade service area"},
  "33314": {"label": "Broward / Dade service area"},
  "33315": {"label": "Broward / Dade service area"},
  "33316": {"label": "Broward / Dade service area"},
  "33317": {"label": "Broward / Dade service area"},
  "33318": {"label": "Broward / Dade service area"},
  "33319": {"label": "Broward / Dade service area"},
  "33320": {"label": "Broward / Dade service area"},
  "33321": {"label": "Broward / Dade service area"},
  "33322": {"label": "Broward / Dade service area"},
  "33323": {"label": "Broward / Dade service area"},
  "33324": {"label": "Broward / Dade service area"},
  "33325": {"label": "Broward / Dade service area"},
  "33326": {"label": "Broward / Dade service area"},
  "33327": {"label": "Broward / Dade service area"},
  "33328": {"label": "Broward / Dade service area"},
  "33329": {"label": "Broward / Dade service area"},
  "33330": {"label": "Broward / Dade service area"},
  "33331": {"label": "Broward / Dade service area"},
  "33332": {"label": "Broward / Dade service area"},
  "33334": {"label": "Broward / Dade service area"},
  "33335": {"label": "Broward / Dade service area"},
  "33336": {"label": "Broward / Dade service area"},
  "33337": {"label": "Broward / Dade service area"},
  "33338": {"label": "Broward / Dade service area"},
  "33339": {"label": "Broward / Dade service area"},
  "33340": {"label": "Broward / Dade service area"},
  "33345": {"label": "Broward / Dade service area"},
  "33346": {"label": "Broward / Dade service area"},
  "33348": {"label": "Broward / Dade service area"},
  "33349": {"label": "Broward / Dade service area"},
  "33351": {"label": "Broward / Dade service area"},
  "33355": {"label": "Broward / Dade service area"},
  "33359": {"label": "Broward / Dade service area"},
  "33388": {"label": "Broward / Dade service area"},
  "33394": {"label": "Broward / Dade service area"},
  "33401": {"label": "Palm Beach County area"},
  "33402": {"label": "Palm Beach County area"},
  "33403": {"label": "Palm Beach County area"},
  "33404": {"label": "Palm Beach County area"},
  "33405": {"label": "Palm Beach County area"},
  "33406": {"label": "Palm Beach County area"},
  "33407": {"label": "Palm Beach County area"},
  "33408": {"label": "Palm Beach County area"},
  "33409": {"label": "Palm Beach County area"},
  "33410": {"label": "Palm Beach County area"},
  "33411": {"label": "Palm Beach County area"},
  "33412": {"label": "Palm Beach County area"},
  "33413": {"label": "Palm Beach County area"},
  "33414": {"label": "Palm Beach County area"},
  "33415": {"label": "Palm Beach County area"},
  "33416": {"label": "Palm Beach County area"},
  "33417": {"label": "Palm Beach County area"},
  "33418": {"label": "Palm Beach County area"},
  "33419": {"label": "Palm Beach County area"},
  "33420": {"label": "Palm Beach County area"},
  "33421": {"label": "Palm Beach County area"},
  "33422": {"label": "Palm Beach County area"},
  "33424": {"label": "Palm Beach County area"},
  "33425": {"label": "Palm Beach County area"},
  "33426": {"label": "Palm Beach County area"},
  "33427": {"label": "Palm Beach County area"},
  "33428": {"label": "Palm Beach County area"},
  "33429": {"label": "Palm Beach County area"},
  "33430": {"label": "Palm Beach County area"},
  "33431": {"label": "Palm Beach County area"},
  "33432": {"label": "Palm Beach County area"},
  "33433": {"label": "Palm Beach County area"},
  "33434": {"label": "Palm Beach County area"},
  "33435": {"label": "Palm Beach County area"},
  "33436": {"label": "Palm Beach County area"},
  "33437": {"label": "Palm Beach County area"},
  "33438": {"label": "Palm Beach County area"},
  "33440": {"label": "Palm Beach County area"},
  "33441": {"label": "Palm Beach County area"},
  "33442": {"label": "Palm Beach County area"},
  "33443": {"label": "Palm Beach County area"},
  "33444": {"label": "Palm Beach County area"},
  "33445": {"label": "Palm Beach County area"},
  "33446": {"label": "Palm Beach County area"},
  "33448": {"label": "Palm Beach County area"},
  "33449": {"label": "Palm Beach County area"},
  "33454": {"label": "Palm Beach County area"},
  "33455": {"label": "Palm Beach County area"},
  "33458": {"label": "Palm Beach County area"},
  "33459": {"label": "Palm Beach County area"},
  "33460": {"label": "Palm Beach County area"},
  "33461": {"label": "Palm Beach County area"},
  "33462": {"label": "Palm Beach County area"},
  "33463": {"label": "Palm Beach County area"},
  "33464": {"label": "Palm Beach County area"},
  "33465": {"label": "Palm Beach County area"},
  "33466": {"label": "Palm Beach County area"},
  "33467": {"label": "Palm Beach County area"},
  "33468": {"label": "Palm Beach County area"},
  "33469": {"label": "Palm Beach County area"},
  "33470": {"label": "Palm Beach County area"},
  "33472": {"label": "Palm Beach County area"},
  "33473": {"label": "Palm Beach County area"},
  "33474": {"label": "Palm Beach County area"},
  "33476": {"label": "Palm Beach County area"},
  "33477": {"label": "Palm Beach County area"},
  "33478": {"label": "Palm Beach County area"},
  "33480": {"label": "Palm Beach County area"},
  "33481": {"label": "Palm Beach County area"},
  "33482": {"label": "Palm Beach County area"},
  "33483": {"label": "Palm Beach County area"},
  "33484": {"label": "Palm Beach County area"},
  "33486": {"label": "Palm Beach County area"},
  "33487": {"label": "Palm Beach County area"},
  "33488": {"label": "Palm Beach County area"},
  "33493": {"label": "Palm Beach County area"},
  "33496": {"label": "Palm Beach County area"},
  "33497": {"label": "Palm Beach County area"},
  "33498": {"label": "Palm Beach County area"},
  "33499": {"label": "Palm Beach County area"},
  "33825": {"label": "Central Florida service area"},
  "33826": {"label": "Central Florida service area"},
  "33852": {"label": "Central Florida service area"},
  "33857": {"label": "Central Florida service area"},
  "33862": {"label": "Central Florida service area"},
  "33870": {"label": "Central Florida service area"},
  "33871": {"label": "Central Florida service area"},
  "33872": {"label": "Central Florida service area"},
  "33875": {"label": "Central Florida service area"},
  "33876": {"label": "Central Florida service area"},
  "33901": {"label": "Southwest Florida area"},
  "33903": {"label": "Southwest Florida area"},
  "33904": {"label": "Southwest Florida area"},
  "33905": {"label": "Southwest Florida area"},
  "33907": {"label": "Southwest Florida area"},
  "33908": {"label": "Southwest Florida area"},
  "33909": {"label": "Southwest Florida area"},
  "33912": {"label": "Southwest Florida area"},
  "33913": {"label": "Southwest Florida area"},
  "33914": {"label": "Southwest Florida area"},
  "33916": {"label": "Southwest Florida area"},
  "33917": {"label": "Southwest Florida area"},
  "33919": {"label": "Southwest Florida area"},
  "33920": {"label": "Southwest Florida area"},
  "33922": {"label": "Southwest Florida area"},
  "33928": {"label": "Southwest Florida area"},
  "33931": {"label": "Southwest Florida area"},
  "33936": {"label": "Southwest Florida area"},
  "33946": {"label": "Southwest Florida area"},
  "33947": {"label": "Southwest Florida area"},
  "33948": {"label": "Southwest Florida area"},
  "33950": {"label": "Southwest Florida area"},
  "33952": {"label": "Southwest Florida area"},
  "33953": {"label": "Southwest Florida area"},
  "33954": {"label": "Southwest Florida area"},
  "33955": {"label": "Southwest Florida area"},
  "33956": {"label": "Southwest Florida area"},
  "33957": {"label": "Southwest Florida area"},
  "33960": {"label": "Southwest Florida area"},
  "33966": {"label": "Southwest Florida area"},
  "33967": {"label": "Southwest Florida area"},
  "33971": {"label": "Southwest Florida area"},
  "33972": {"label": "Southwest Florida area"},
  "33973": {"label": "Southwest Florida area"},
  "33974": {"label": "Southwest Florida area"},
  "33976": {"label": "Southwest Florida area"},
  "33980": {"label": "Southwest Florida area"},
  "33981": {"label": "Southwest Florida area"},
  "33982": {"label": "Southwest Florida area"},
  "33983": {"label": "Southwest Florida area"},
  "33990": {"label": "Southwest Florida area"},
  "33991": {"label": "Southwest Florida area"},
  "33993": {"label": "Southwest Florida area"},
  "34102": {"label": "Southwest Florida area"},
  "34103": {"label": "Southwest Florida area"},
  "34104": {"label": "Southwest Florida area"},
  "34105": {"label": "Southwest Florida area"},
  "34108": {"label": "Southwest Florida area"},
  "34109": {"label": "Southwest Florida area"},
  "34110": {"label": "Southwest Florida area"},
  "34112": {"label": "Southwest Florida area"},
  "34113": {"label": "Southwest Florida area"},
  "34114": {"label": "Southwest Florida area"},
  "34116": {"label": "Southwest Florida area"},
  "34117": {"label": "Southwest Florida area"},
  "34119": {"label": "Southwest Florida area"},
  "34120": {"label": "Southwest Florida area"},
  "34134": {"label": "Southwest Florida area"},
  "34135": {"label": "Southwest Florida area"},
  "34141": {"label": "Southwest Florida area"},
  "34142": {"label": "Southwest Florida area"},
  "34145": {"label": "Southwest Florida area"},
  "34224": {"label": "Southwest Florida area"},
  "34265": {"label": "Southwest Florida area"},
  "34266": {"label": "Southwest Florida area"},
  "34267": {"label": "Southwest Florida area"},
  "34268": {"label": "Southwest Florida area"},
  "34269": {"label": "Southwest Florida area"},
  "34946": {"label": "Treasure Coast area"},
  "34947": {"label": "Treasure Coast area"},
  "34949": {"label": "Treasure Coast area"},
  "34950": {"label": "Treasure Coast area"},
  "34952": {"label": "Treasure Coast area"},
  "34953": {"label": "Treasure Coast area"},
  "34956": {"label": "Treasure Coast area"},
  "34957": {"label": "Treasure Coast area"},
  "34972": {"label": "Treasure Coast area"},
  "34973": {"label": "Treasure Coast area"},
  "34974": {"label": "Treasure Coast area"},
  "34981": {"label": "Treasure Coast area"},
  "34982": {"label": "Treasure Coast area"},
  "34983": {"label": "Treasure Coast area"},
  "34984": {"label": "Treasure Coast area"},
  "34986": {"label": "Treasure Coast area"},
  "34987": {"label": "Treasure Coast area"},
  "34990": {"label": "Treasure Coast area"},
  "34994": {"label": "Treasure Coast area"},
  "34996": {"label": "Treasure Coast area"},
  "34997": {"label": "Treasure Coast area"},
  "32303": {"label": "Tallahassee / Wakulla service area"},
  "32305": {"label": "Tallahassee / Wakulla service area"},
  "32346": {"label": "Tallahassee / Wakulla service area"},
  "32401": {"label": "Panhandle / Bay County service area"},
  "32402": {"label": "Panhandle / Bay County service area"},
  "32403": {"label": "Panhandle / Bay County service area"},
  "32404": {"label": "Panhandle / Bay County service area"},
  "32405": {"label": "Panhandle / Bay County service area"},
  "32406": {"label": "Panhandle / Bay County service area"},
  "32407": {"label": "Panhandle / Bay County service area"},
  "32408": {"label": "Panhandle / Bay County service area"},
  "32409": {"label": "Panhandle / Bay County service area"},
  "32410": {"label": "Panhandle / Bay County service area"},
  "32411": {"label": "Panhandle / Bay County service area"},
  "32412": {"label": "Panhandle / Bay County service area"},
  "32413": {"label": "Panhandle / Bay County service area"},
  "32417": {"label": "Panhandle / Bay County service area"},
  "32422": {"label": "Panhandle / Bay County service area"},
  "32425": {"label": "Panhandle / Bay County service area"},
  "32428": {"label": "Panhandle / Bay County service area"},
  "32433": {"label": "Panhandle / Bay County service area"},
  "32434": {"label": "Panhandle / Bay County service area"},
  "32435": {"label": "Panhandle / Bay County service area"},
  "32437": {"label": "Panhandle / Bay County service area"},
  "32438": {"label": "Panhandle / Bay County service area"},
  "32439": {"label": "Panhandle / Bay County service area"},
  "32444": {"label": "Panhandle / Bay County service area"},
  "32452": {"label": "Panhandle / Bay County service area"},
  "32455": {"label": "Panhandle / Bay County service area"},
  "32459": {"label": "Panhandle / Bay County service area"},
  "32461": {"label": "Panhandle / Bay County service area"},
  "32462": {"label": "Panhandle / Bay County service area"},
  "32464": {"label": "Panhandle / Bay County service area"},
  "32466": {"label": "Panhandle / Bay County service area"},
  "32501": {"label": "Pensacola / Emerald Coast service area"},
  "32502": {"label": "Pensacola / Emerald Coast service area"},
  "32503": {"label": "Pensacola / Emerald Coast service area"},
  "32504": {"label": "Pensacola / Emerald Coast service area"},
  "32505": {"label": "Pensacola / Emerald Coast service area"},
  "32506": {"label": "Pensacola / Emerald Coast service area"},
  "32507": {"label": "Pensacola / Emerald Coast service area"},
  "32508": {"label": "Pensacola / Emerald Coast service area"},
  "32509": {"label": "Pensacola / Emerald Coast service area"},
  "32511": {"label": "Pensacola / Emerald Coast service area"},
  "32512": {"label": "Pensacola / Emerald Coast service area"},
  "32513": {"label": "Pensacola / Emerald Coast service area"},
  "32514": {"label": "Pensacola / Emerald Coast service area"},
  "32516": {"label": "Pensacola / Emerald Coast service area"},
  "32520": {"label": "Pensacola / Emerald Coast service area"},
  "32521": {"label": "Pensacola / Emerald Coast service area"},
  "32522": {"label": "Pensacola / Emerald Coast service area"},
  "32523": {"label": "Pensacola / Emerald Coast service area"},
  "32524": {"label": "Pensacola / Emerald Coast service area"},
  "32526": {"label": "Pensacola / Emerald Coast service area"},
  "32530": {"label": "Pensacola / Emerald Coast service area"},
  "32531": {"label": "Pensacola / Emerald Coast service area"},
  "32533": {"label": "Pensacola / Emerald Coast service area"},
  "32534": {"label": "Pensacola / Emerald Coast service area"},
  "32535": {"label": "Pensacola / Emerald Coast service area"},
  "32536": {"label": "Pensacola / Emerald Coast service area"},
  "32537": {"label": "Pensacola / Emerald Coast service area"},
  "32538": {"label": "Pensacola / Emerald Coast service area"},
  "32539": {"label": "Pensacola / Emerald Coast service area"},
  "32540": {"label": "Pensacola / Emerald Coast service area"},
  "32541": {"label": "Pensacola / Emerald Coast service area"},
  "32542": {"label": "Pensacola / Emerald Coast service area"},
  "32544": {"label": "Pensacola / Emerald Coast service area"},
  "32547": {"label": "Pensacola / Emerald Coast service area"},
  "32548": {"label": "Pensacola / Emerald Coast service area"},
  "32549": {"label": "Pensacola / Emerald Coast service area"},
  "32550": {"label": "Pensacola / Emerald Coast service area"},
  "32559": {"label": "Pensacola / Emerald Coast service area"},
  "32560": {"label": "Pensacola / Emerald Coast service area"},
  "32561": {"label": "Pensacola / Emerald Coast service area"},
  "32562": {"label": "Pensacola / Emerald Coast service area"},
  "32563": {"label": "Pensacola / Emerald Coast service area"},
  "32564": {"label": "Pensacola / Emerald Coast service area"},
  "32565": {"label": "Pensacola / Emerald Coast service area"},
  "32566": {"label": "Pensacola / Emerald Coast service area"},
  "32567": {"label": "Pensacola / Emerald Coast service area"},
  "32568": {"label": "Pensacola / Emerald Coast service area"},
  "32569": {"label": "Pensacola / Emerald Coast service area"},
  "32570": {"label": "Pensacola / Emerald Coast service area"},
  "32571": {"label": "Pensacola / Emerald Coast service area"},
  "32572": {"label": "Pensacola / Emerald Coast service area"},
  "32577": {"label": "Pensacola / Emerald Coast service area"},
  "32578": {"label": "Pensacola / Emerald Coast service area"},
  "32579": {"label": "Pensacola / Emerald Coast service area"},
  "32580": {"label": "Pensacola / Emerald Coast service area"},
  "32583": {"label": "Pensacola / Emerald Coast service area"},
  "32588": {"label": "Pensacola / Emerald Coast service area"},
  "32591": {"label": "Pensacola / Emerald Coast service area"},
  "36421": {"label": "Alabama Gulf Coast service area"},
  "36426": {"label": "Alabama Gulf Coast service area"},
  "36427": {"label": "Alabama Gulf Coast service area"},
  "36441": {"label": "Alabama Gulf Coast service area"},
  "36480": {"label": "Alabama Gulf Coast service area"},
  "36483": {"label": "Alabama Gulf Coast service area"},
  "36502": {"label": "Alabama Gulf Coast service area"},
  "36503": {"label": "Alabama Gulf Coast service area"},
  "36504": {"label": "Alabama Gulf Coast service area"},
  "36505": {"label": "Alabama Gulf Coast service area"},
  "36507": {"label": "Alabama Gulf Coast service area"},
  "36509": {"label": "Alabama Gulf Coast service area"},
  "36511": {"label": "Alabama Gulf Coast service area"},
  "36512": {"label": "Alabama Gulf Coast service area"},
  "36521": {"label": "Alabama Gulf Coast service area"},
  "36522": {"label": "Alabama Gulf Coast service area"},
  "36523": {"label": "Alabama Gulf Coast service area"},
  "36525": {"label": "Alabama Gulf Coast service area"},
  "36526": {"label": "Alabama Gulf Coast service area"},
  "36527": {"label": "Alabama Gulf Coast service area"},
  "36528": {"label": "Alabama Gulf Coast service area"},
  "36530": {"label": "Alabama Gulf Coast service area"},
  "36532": {"label": "Alabama Gulf Coast service area"},
  "36533": {"label": "Alabama Gulf Coast service area"},
  "36535": {"label": "Alabama Gulf Coast service area"},
  "36536": {"label": "Alabama Gulf Coast service area"},
  "36541": {"label": "Alabama Gulf Coast service area"},
  "36542": {"label": "Alabama Gulf Coast service area"},
  "36543": {"label": "Alabama Gulf Coast service area"},
  "36544": {"label": "Alabama Gulf Coast service area"},
  "36547": {"label": "Alabama Gulf Coast service area"},
  "36549": {"label": "Alabama Gulf Coast service area"},
  "36550": {"label": "Alabama Gulf Coast service area"},
  "36551": {"label": "Alabama Gulf Coast service area"},
  "36555": {"label": "Alabama Gulf Coast service area"},
  "36559": {"label": "Alabama Gulf Coast service area"},
  "36560": {"label": "Alabama Gulf Coast service area"},
  "36561": {"label": "Alabama Gulf Coast service area"},
  "36562": {"label": "Alabama Gulf Coast service area"},
  "36564": {"label": "Alabama Gulf Coast service area"},
  "36567": {"label": "Alabama Gulf Coast service area"},
  "36568": {"label": "Alabama Gulf Coast service area"},
  "36571": {"label": "Alabama Gulf Coast service area"},
  "36572": {"label": "Alabama Gulf Coast service area"},
  "36574": {"label": "Alabama Gulf Coast service area"},
  "36575": {"label": "Alabama Gulf Coast service area"},
  "36576": {"label": "Alabama Gulf Coast service area"},
  "36577": {"label": "Alabama Gulf Coast service area"},
  "36578": {"label": "Alabama Gulf Coast service area"},
  "36579": {"label": "Alabama Gulf Coast service area"},
  "36580": {"label": "Alabama Gulf Coast service area"},
  "36582": {"label": "Alabama Gulf Coast service area"},
  "36585": {"label": "Alabama Gulf Coast service area"},
  "36587": {"label": "Alabama Gulf Coast service area"},
  "36590": {"label": "Alabama Gulf Coast service area"},
  "36601": {"label": "Alabama Gulf Coast service area"},
  "36602": {"label": "Alabama Gulf Coast service area"},
  "36603": {"label": "Alabama Gulf Coast service area"},
  "36604": {"label": "Alabama Gulf Coast service area"},
  "36605": {"label": "Alabama Gulf Coast service area"},
  "36606": {"label": "Alabama Gulf Coast service area"},
  "36607": {"label": "Alabama Gulf Coast service area"},
  "36608": {"label": "Alabama Gulf Coast service area"},
  "36609": {"label": "Alabama Gulf Coast service area"},
  "36610": {"label": "Alabama Gulf Coast service area"},
  "36611": {"label": "Alabama Gulf Coast service area"},
  "36612": {"label": "Alabama Gulf Coast service area"},
  "36613": {"label": "Alabama Gulf Coast service area"},
  "36615": {"label": "Alabama Gulf Coast service area"},
  "36616": {"label": "Alabama Gulf Coast service area"},
  "36617": {"label": "Alabama Gulf Coast service area"},
  "36618": {"label": "Alabama Gulf Coast service area"},
  "36619": {"label": "Alabama Gulf Coast service area"},
  "36628": {"label": "Alabama Gulf Coast service area"},
  "36633": {"label": "Alabama Gulf Coast service area"},
  "36640": {"label": "Alabama Gulf Coast service area"},
  "36641": {"label": "Alabama Gulf Coast service area"},
  "36644": {"label": "Alabama Gulf Coast service area"},
  "36652": {"label": "Alabama Gulf Coast service area"},
  "36660": {"label": "Alabama Gulf Coast service area"},
  "36663": {"label": "Alabama Gulf Coast service area"},
  "36670": {"label": "Alabama Gulf Coast service area"},
  "36671": {"label": "Alabama Gulf Coast service area"},
  "36675": {"label": "Alabama Gulf Coast service area"},
  "36685": {"label": "Alabama Gulf Coast service area"},
  "36688": {"label": "Alabama Gulf Coast service area"},
  "36689": {"label": "Alabama Gulf Coast service area"},
  "36691": {"label": "Alabama Gulf Coast service area"},
  "36693": {"label": "Alabama Gulf Coast service area"},
  "36695": {"label": "Alabama Gulf Coast service area"},
};

const zipInput = document.getElementById('zipInput');
const zipBtn = document.getElementById('zipCheckBtn');
const zipResult = document.getElementById('zipResult');
const mapWrap = document.getElementById('floridaMapWrap');
const mapOverlayText = document.getElementById('mapOverlayText');

function runZipCheck() {
  if (!zipInput || !zipResult || !mapWrap) return;
  const zip = (zipInput.value || '').trim();
  mapWrap.classList.remove('active');
  if (mapOverlayText) {
    mapOverlayText.classList.remove('show', 'success', 'error');
  }

  if (!/^\d{5}$/.test(zip)) {
    zipResult.textContent = 'Please enter a valid 5-digit zip code.';
    zipResult.className = 'zip-result error';
    if (mapOverlayText) {
      mapOverlayText.textContent = 'Please enter a valid 5-digit zip code.';
      mapOverlayText.classList.add('show', 'error');
    }
    return;
  }

  const point = serviceZipData[zip];
  if (point) {
    mapWrap.classList.add('active');
    const message = `Yes — we currently serve this area: ${point.label}.`;
    zipResult.textContent = message;
    zipResult.className = 'zip-result success';
    if (mapOverlayText) {
      mapOverlayText.textContent = message;
      mapOverlayText.classList.add('show', 'success');
    }
  } else {
    const message = 'No — this zip is not in the current service-area list.';
    zipResult.textContent = message + ' Call us to confirm live availability.';
    zipResult.className = 'zip-result error';
    if (mapOverlayText) {
      mapOverlayText.textContent = message;
      mapOverlayText.classList.add('show', 'error');
    }
  }
}

if (zipBtn) zipBtn.addEventListener('click', runZipCheck);
if (zipInput) zipInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    runZipCheck();
  }
});

// Estimate form AJAX submit with in-page thank-you message
const estimateForm = document.getElementById('estimateForm');
const formStatus = document.getElementById('formStatus');

if (estimateForm) {
  estimateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!formStatus) return;

    formStatus.className = 'form-status pending';
    formStatus.textContent = 'Sending your request...';

    try {
      const formData = new FormData(estimateForm);
      const response = await fetch(estimateForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        estimateForm.reset();
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thanks for your submission. A Cinergy team member will contact you soon.';
      } else {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'We could not send your form right now. Please try again or call us directly.';
      }
    } catch (err) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'We could not send your form right now. Please try again or call us directly.';
    }
  });
}

// Close mobile nav when a link is tapped
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('.menu-toggle');
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.querySelectorAll('[data-before-after-card]').forEach((card) => {
  const range = card.querySelector('.before-after-range');
  const afterClip = card.querySelector('.after-clip');
  const handle = card.querySelector('.before-after-handle');

  if (!range || !afterClip || !handle) return;

  const syncBeforeAfterCard = () => {
    const value = `${range.value}%`;
    afterClip.style.width = value;
    handle.style.left = value;

    const isAfterActive = Number(range.value) >= 50;
    card.classList.toggle('after-highlighted', isAfterActive);
    afterClip.classList.toggle('is-active', isAfterActive);
  };

  range.addEventListener('input', syncBeforeAfterCard);
  syncBeforeAfterCard();
});

// Completed work popup gallery
(() => {
  const workLightbox = document.getElementById('workLightbox');
  if (!workLightbox) return;

  const workCards = Array.from(document.querySelectorAll('[data-lightbox-src]'));
  const workImage = workLightbox.querySelector('.lightbox-image');
  const workClose = workLightbox.querySelector('.lightbox-close');
  const workPrev = workLightbox.querySelector('.lightbox-prev');
  const workNext = workLightbox.querySelector('.lightbox-next');
  const workCounter = workLightbox.querySelector('.lightbox-counter');
  let currentIndex = 0;

  function renderWorkLightbox() {
    if (!workCards.length) return;
    const current = workCards[currentIndex];
    workImage.src = current.getAttribute('data-lightbox-src');
    workImage.alt = current.getAttribute('aria-label') || 'Expanded completed project photo';
    if (workCounter) workCounter.textContent = `${currentIndex + 1} / ${workCards.length}`;
  }

  function openWorkLightbox(index) {
    currentIndex = index;
    renderWorkLightbox();
    workLightbox.classList.add('open');
    workLightbox.setAttribute('aria-hidden', 'false');
  }

  function closeWorkLightbox() {
    workLightbox.classList.remove('open');
    workLightbox.setAttribute('aria-hidden', 'true');
    workImage.src = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + workCards.length) % workCards.length;
    renderWorkLightbox();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % workCards.length;
    renderWorkLightbox();
  }

  workCards.forEach((card, index) => {
    card.addEventListener('click', () => openWorkLightbox(index));
  });

  workClose?.addEventListener('click', closeWorkLightbox);
  workPrev?.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
  workNext?.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

  workLightbox.addEventListener('click', (e) => {
    if (e.target === workLightbox) closeWorkLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!workLightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeWorkLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
})();


function ensureStormPreparednessLink() {
  const servicesMenu = document.querySelector('.nav-dropdown-services .nav-dropdown-menu');
  if (!servicesMenu) return;

  const desiredLinks = [
    ['catastrophic-response.html', '24/7 Catastrophic Response'],
    ['water-damage.html', 'Water Damage Restoration'],
    ['fire-damage.html', 'Fire Damage Restoration'],
    ['mold-remediation.html', 'Mold Remediation'],
    ['construction.html', 'Construction and Remodeling'],
    ['roof-tarp.html', 'Roof Tarp Services'],
    ['storm-preparedness.html', 'Storm Preparedness'],
    ['biohazard-cleanup.html', 'Biohazard Cleanup'],
    ['board-up.html', 'Board Up Services'],
    ['packout-services.html', 'Packout Services']
  ];

  servicesMenu.innerHTML = '';
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  desiredLinks.forEach(([href, text]) => {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    if (currentPage === href.toLowerCase()) {
      link.classList.add('active');
    }
    servicesMenu.appendChild(link);
  });
}

function pinFloatingCtasToBody() {
  const callBtn = document.querySelector('.floating-call');
  const estimateBtn = document.querySelector('.floating-estimate');

  [callBtn, estimateBtn].forEach((btn) => {
    if (!btn) return;
    if (btn.parentElement !== document.body) {
      document.body.appendChild(btn);
    }
  });
}

window.addEventListener('load', () => {
  ensureStormPreparednessLink();
  pinFloatingCtasToBody();
});

ensureStormPreparednessLink();
pinFloatingCtasToBody();

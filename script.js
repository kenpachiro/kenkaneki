document.getElementById('explore-btn').addEventListener('click', function () { 
  window.location.href = 'explorepage.html'; 
}); 

function showModal(element, siteUrl) {
  const title = element.querySelector('.modal-content h2').innerText;
  const subtitle = element.querySelector('.modal-content h3').innerText;
  const modalGridContent = element.querySelector('.modal-content .modal-grid').innerHTML;
  const modalDescriptionContent = element.querySelector('.modal-content .modal-description-grid').innerHTML;

  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalSubtitle').innerText = subtitle;
  document.getElementById('modalImages').innerHTML = modalGridContent;
  document.getElementById('modalDescriptionGrid').innerHTML = modalDescriptionContent;
  document.getElementById('visitSiteButton').setAttribute('onclick', `visitSite('${siteUrl}')`);
  document.getElementById('portfolioModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('portfolioModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('portfolioModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

function toggleMenu() {
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}

function visitSite(url) {
  const iframeContainer = document.getElementById('iframeContainer');
  const iframe = document.getElementById('siteIframe');
  iframe.src = url;
  iframeContainer.style.display = 'flex';
  document.getElementById('portfolioModal').style.display = 'none';
}

function closeIframe() {
  const iframeContainer = document.getElementById('iframeContainer');
  const iframe = document.getElementById('siteIframe');
  iframe.src = '';
  iframeContainer.style.display = 'none';
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.getElementById('explore-btn').addEventListener('click', function () { 
  window.location.href = 'explorepage.html'; 
}); 

function toggleMenu() {
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}
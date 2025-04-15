// Dynamic Conversion Functions
const conversions = {
    temperature: {
      "Celsius → Fahrenheit": c => (c * 9/5) + 32,
      "Fahrenheit → Celsius": f => (f - 32) * 5/9,
      "Celsius → Kelvin": c => c + 273.15,
      "Kelvin → Celsius": k => k - 273.15,
      "Fahrenheit → Kelvin": f => (f - 32) * 5/9 + 273.15,
      "Kelvin → Fahrenheit": k => (k - 273.15) * 9/5 + 32,
    },
    length: {
      "Km → Mil": km => km * 0.621371,
      "Mil → Km": mi => mi / 0.621371,
    },
    weight: {
      "Kg → Pon": kg => kg * 2.20462,
      "Pon → Kg": lb => lb / 2.20462,
    },
    time: {
        "Menit → Jam": m => m / 60,
        "Jam → Menit": h => h * 60,
        "Detik → Menit": s => s / 60,
        "Menit → Detik": m => m * 60,
      },
      speed: {
        "Km/jam → m/detik": kmh => kmh / 3.6,
        "m/detik → Km/jam": ms => ms * 3.6,
      }
  };
  
  const categorySelect = document.getElementById('category');
  const conversionSelect = document.getElementById('conversion');
  const inputValue = document.getElementById('inputValue');
  const resultDiv = document.getElementById('result');
  
  // Navbar scroll behavior
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('visible');
    } else {
      navbar.classList.remove('visible');
    }
  });
  
  function updateConversionOptions() {
    const selectedCategory = categorySelect.value;
    const options = conversions[selectedCategory];
    conversionSelect.innerHTML = '';
    for (let key in options) {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = key;
      conversionSelect.appendChild(option);
    }
    calculate();
  }
  
  function calculate() {
    const category = categorySelect.value;
    const conversionType = conversionSelect.value;
    const value = parseFloat(inputValue.value);
    if (isNaN(value)) {
      resultDiv.textContent = "Masukkan angka yang valid.";
      return;
    }
    const func = conversions[category][conversionType];
    const result = func(value);
    resultDiv.textContent = `Hasil: ${result.toFixed(2)}`;
  }
  
  categorySelect.addEventListener('change', updateConversionOptions);
  conversionSelect.addEventListener('change', calculate);
  inputValue.addEventListener('input', calculate);
  
  // Scroll to converter
  function scrollToConverter() {
    document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Init
  updateConversionOptions();

  // Navbar scroll effect untuk semua halaman
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});
  
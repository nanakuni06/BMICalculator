document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-submit").addEventListener("click", (event) => { event.preventDefault();
        response();
      },
      false
    );
  });
  
//function mengecek data inputan dan memberi pesan ke HTML dari hasil yang sudah dihitung
  function response() {
    const formId = document.getElementById("form-id");
    const message = document.getElementById("message");
    const formData = handleGetFormData();
    const bmiValue = bmiCalculator(formData).toFixed(1);
    const bmiCategory = bmiCategories(bmiValue);
  
//menggunakan loop untuk melihat data lalu validasi datanya
    for (const i in formData) {
      if (formData.weight === "" || formData.height === "") {
        return (message.innerText = "Please check your data again");
  
        // mengecek isi input agar sesuai batasan berat dan tinggi
      } else if (formData.weight < 2.1 || formData.weight > 1400 || formData.height < 122 || formData.height > 272) {
        return (message.innerText = "Please enter valid weight and height values");
      }
    }

//merefresh form inputan
    setTimeout(() => {
      formId.reset();
    }, 1500);

    
    //muncul pesan hasil hitungan
    message.innerHTML = `Your BMI is <b>${bmiValue}</b> which means You are <b>${bmiCategory}</b>`;
}

//merefresh kembali pesan
    setTimeout(() => {
        message.innerText = "";
    },3000);

//function untuk mengakses value dari inputan dari HTML
function handleGetFormData() {
    return {
        weight: document.getElementById("weight").value,
        height: document.getElementById("height").value,
    };
}

// function menghting BMI
function bmiCalculator(formData) {
    const weight = formData.weight;
    const height = formData.height;
  
    const bmi = weight / Math.pow(height / 100, 2);
  
    return bmi;
  }
  
// function kategori BMI
  function bmiCategories(bmiValue) {
    if (bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue <= 24.9) {
      return "Normal weight";
    } else if (bmiValue <= 29.9) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  }
  
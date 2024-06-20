// IIFE
(function (massa, tinggiBadan) {
    let indeksMassaTubuh = massa / (tinggiBadan ** 2);
    let klasifikasi;
    if (indeksMassaTubuh < 18.5) {
        klasifikasi = "Underweight";
    } else if (indeksMassaTubuh >= 18.5 && indeksMassaTubuh <= 24.9) {
        klasifikasi = "Normal Range";
    } else if (indeksMassaTubuh >= 25 && indeksMassaTubuh <= 29.9) {
        klasifikasi = "Preobese";
    } else {
        klasifikasi = "Obese";
    }
    console.log("BMI Anda = " + indeksMassaTubuh + ", Kategori Anda = " + klasifikasi);
})(50, 1.67);

//Callback
function hitungIndeksMassaTubuh(massa, tinggiBadan) {
    let indeksMassaTubuh = massa / (tinggiBadan ** 2);
    let klasifikasi;
    if (indeksMassaTubuh < 18.5) {
        klasifikasi = "Underweight";
    } else if (indeksMassaTubuh >= 18.5 && indeksMassaTubuh <= 24.9) {
        klasifikasi = "Normal Range";
    } else if (indeksMassaTubuh >= 25 && indeksMassaTubuh <= 29.9) {
        klasifikasi = "Preobese";
    } else {
        klasifikasi = "Obese";
    }
    console.log("BMI Anda = " + indeksMassaTubuh + ", Kategori Anda = " + klasifikasi);
}

function cetakOutput(callback) {
    callback(50, 1.67);
}

cetakOutput(hitungIndeksMassaTubuh);

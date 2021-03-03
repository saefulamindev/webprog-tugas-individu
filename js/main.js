// JS Form Validation
function errorMessage(message, errorLocation, color) {
    document.getElementById(errorLocation).innerHTML = message;
    document.getElementById(errorLocation).style.color = color;
}

// validateName
function validateName() {
    var name = document.getElementById("inputName").value;
    if (name.length == 0) {
        errorMessage("Username harus diisi", "errorName", "red");
        return false;
    }
    if (name.length < 6 || name.length > 10) {
        errorMessage("6-10 karakter", "errorName", "red");
        return false;
    }
    if (!name.match(/^[A-Za-z0-9]*$/)) {
        errorMessage("huruf & angka", "errorName", "red");
        return false;
    }
    errorMessage("Sesuai", "errorName", "green");
    return true;
}
// Akhir validateName


// validatePassword
function validatePassword() {
    var password = document.getElementById("inputPassword").value;
    if (password.length == 0) {
        errorMessage("Password harus diisi", "errorPassword", "red");
        return false;
    }
    if (password.length < 6) {
        errorMessage("minimal 6 karakter", "errorPassword", "red");
        return false;
    }
    if (!password.match(/^[A-Za-z0-9]*$/)) {
        errorMessage("huruf & angka", "errorPassword", "red");
        return false;
    }
    errorMessage("Sesuai", "errorPassword", "green");
    return true;
}
// Akhir validatePassword

// validateNamaLengkap
function validateNamaLengkap() {
    var namalengkap = document.getElementById("inputNamaLengkap").value;
    if (namalengkap.length == 0) {
        errorMessage("Nama harus diisi", "errorNamaLengkap", "red");
        return false;
    }
    if (namalengkap.length > 25) {
        errorMessage("maximal 25 karakter", "errorNamaLengkap", "red");
        return false;
    }
    if (!namalengkap.match(/^[A-Za-z\s]*$/)) {
        errorMessage("huruf & spasi", "errorNamaLengkap", "red");
        return false;
    }
    errorMessage("Sesuai", "errorNamaLengkap", "green");
    return true;
}
// Akhir validateNamaLengkap

// validateTahunLulus
function validateTahunLulus() {
    var tahunlulus = document.getElementById("inputTahunLulus").value;
    if (tahunlulus.length == 0) {
        errorMessage("Tahun Lulus harus diisi", "errorTahunLulus", "red");
        return false;
    }
    if (!tahunlulus.match(/^(201[1-7])$/)) {
        errorMessage("2011-2017", "errorTahunLulus", "red");
        return false;
    }
    errorMessage("Sesuai", "errorTahunLulus", "green");
    return true;
}
// Akhir validateTahunLulus

// validateAlamat
function validateAlamat() {
    var alamat = document.getElementById("inputAlamat").value;
    if (alamat.length == 0) {
        errorMessage("Alamat harus diisi", "errorAlamat", "red");
        return false;
    }
    if (alamat.length > 50) {
        errorMessage("maximal 50 karakter", "errorAlamat", "red");
        return false;
    }
    if (!alamat.match(/^[A-Za-z0-9\s]*$/)) {
        errorMessage("huruf & angka", "errorAlamat", "red");
        return false;
    }
    errorMessage("Sesuai", "errorAlamat", "green");
    return true;
}
// Akhir validateAlamat

// validateAlasan
function validateAlasan() {
    var alasan = document.getElementById("inputAlasan").value;
    if (alasan.length == 0) {
        errorMessage("Alasan harus diisi", "errorAlasan", "red");
        return false;
    }
    if (alasan.length < 50 || alasan.length > 256) {
        errorMessage("50-256 karakter", "errorAlasan", "red");
        return false;
    }
    if (!alasan.match(/^[A-Za-z\s]*$/)) {
        errorMessage("huruf & spasi", "errorAlasan", "red");
        return false;
    }
    errorMessage("Sesuai", "errorAlasan", "green");
    return true;
}
// Akhir validateAlasan

// validateAll
function validateAll() {
    if (!validateName() || !validatePassword() || !validateNamaLengkap() || !validateTahunLulus() || !validateAlamat() || !validateAlasan()) {
        return false;
    }
    return true;
}
// Akhir validateAll


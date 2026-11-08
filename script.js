const tarihFormu = document.querySelector(".tarih-form");

const tarihKutusu = document.getElementById("tarih");

const donemSecimi = document.getElementById("donem");

const sonucAlani = document.getElementById("tarih-sonucu")
    
function donemAdiGetir(donemKodu) {

    if (donemKodu === "BCE") {
        return "Milattan Önce";
    }
    else {
        return "Milattan Sonra";
    }

}

tarihFormu.addEventListener("submit", function(event) {

    event.preventDefault();

    const secilenYil = Number(tarihKutusu.value);

    const yuzyil = Math.ceil(secilenYil / 100);
    
    const secilenDonem = donemSecimi.value;

    const donemYazisi = donemAdiGetir(secilenDonem);

    sonucAlani.textContent =
    "Seçilen tarih: " + secilenYil + " " + donemYazisi +
    " (" + yuzyil + ". yüzyıl)";
});

const tarihFormu = document.querySelector(".tarih-form");

const tarihKutusu = document.getElementById("tarih");

const donemSecimi = document.getElementById("donem");

const sonucAlani = document.getElementById("tarih-sonucu");

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


const harita = document.getElementById("dunya-haritasi");

window.addEventListener("load", function() {

    const svgBelgesi = harita.contentDocument;

    const yollar = svgBelgesi.querySelectorAll("path");

    const ulkeBilgisi = document.getElementById("ulke-bilgisi");

    for (let i = 0; i < yollar.length; i++) {

        const yol = yollar[i];

        const eskiRenk = yol.style.fill;

        // fare kısmı
        yol.addEventListener("mouseenter", function() {

            console.log("Hover algılandı:", yol.getAttribute("id"));

            yol.style.setProperty("fill", "#77C7B7", "important");

        });

        yol.addEventListener("mouseleave", function() {
            yol.style.fill = eskiRenk;
        });

        yol.addEventListener("click", function() {

            
            const bolgeId = yol.getAttribute("id");

         
            ulkeBilgisi.textContent = "Seçilen ülke: " + bolgeId;

        });
    }
});
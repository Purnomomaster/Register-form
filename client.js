var loadFile1 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output1");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile2 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output2");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

const { jsPDF } = window.jspdf;

const g1 = document.getElementById("output1");
const g2 = document.getElementById("output2");
const img = document.getElementById("ttd");
g1.style.display = "none";
g2.style.display = "none";
img.style.display = "none";
var d = new Date();
const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
var day = d.getDate().toString();
var month = months[d.getMonth()];
var year = d.getFullYear().toString();
const date = day + " " + month + " " + year;

var doc = new jsPDF({
  orientation: "potrait",
  unit: "mm",
  format: [297, 210],
});
function pageOne(nama, alamat, kodePos, nomorHp, email) {
  doc.text("SURAT KUASA", 90, 10);
  doc.setFontSize(11);
  doc.text("Yang bertanda tangan di bawah ini", 30, 20);
  doc.text("Nama Pemberi Kuasa/Pemohon", 32, 30);
  doc.text("Alamat", 32, 38);
  doc.text("Kode Pos", 32, 54);
  doc.text("Nomor Hp", 32, 62);
  doc.text("E-mail", 32, 70);
  doc.text("Memberi kuasa kepada", 32, 86);
  doc.text(":", 90, 30);
  doc.text(":", 90, 38);
  doc.text(":", 90, 54);
  doc.text(":", 90, 62);
  doc.text(":", 90, 70);
  doc.text(":", 90, 86);
  doc.text(nama, 100, 30);
  doc.text(alamat, 100, 38);
  doc.text(kodePos, 100, 54);
  doc.text(nomorHp, 100, 62);
  doc.text(email, 100, 70);
  const a1 = "EKO BUDI SANTOSO,S.F.";
  const textWidth1 = doc.getTextWidth(a1);
  doc.line(100, 87, 100 + textWidth1, 87);

  const a2 = "Konsultan Kekayaan Intelektual Nomor 821-2015";
  doc.text(a1, 100, 86);
  doc.text(a2, 100, 94);

  const z =
    "untuk bertindak untuk dan atas nama penandatanganan dalam memasukkan surat-surat permohonan mengajukan dan mengurus kepada Direktorat Jenderal Kekayaan Intelektual, Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia untuk Permohonan Pendaftaran / Perpanjangan / Tanggapan Usulan Penolakan / Sanggahan / Keberatan / Pencatatan Pengalihan Hak / Pencatatan Perubahan Nama atau Alamat / Penarikan Kembali / Pencatatan Perubahan Kuasa / Pencatatan Perjanjian Lisensi / Memperbaiki Permohonan / Permohonan Banding / Pengambilan Sertifikat, sehubungan dengan merek sebagai berikut :";
  doc.text(z, 30, 100, {
    maxWidth: 160,
    align: "justify",
    lineHeightFactor: 1.15,
  });
  //x,y mulai dan x,y akhir
  doc.line(30, 130, 30, 180);
  doc.line(190, 130, 190, 180);
  doc.line(110, 130, 110, 180);
  doc.line(30, 130, 190, 130);
  doc.line(30, 180, 190, 180);
  //text in middle
  doc.text("Kelas 3 0", 112, 155);
  //logo kiri
  // doc.addImage(g1, "JPEG", 35, 135, 70, 40);

  const y =
    "Pemberi Kuasa/Pemohon menyatakan merek di atas ini adalah orisinal milik Pemberi Kuasa/Pemohon dan tidak meniru merek pihak lain, termasuk tidak meniru merek terkenal, baik di dalam negeri maupun di luar negeri. Apabila di kemudian hari, Pemerintah menyatakan bahwa merek tersebut meniru merek pihak lain, maka Pemberi Kuasa/Pemohon bersedia menerima segala konsekuensinya.";
  doc.text(y, 30, 190, {
    maxWidth: 160,
    align: "justify",
    lineHeightFactor: 1.15,
  });

  doc.text("Pemberi Kuasa/Pemohon memilih berkedudukan hukum di: ", 30, 215);
  doc.text("EKO BUDI SANTOSO, S.F.", 30, 220);
  doc.text("Konsultan Kekayaan Intelektual Nomor 821-2015", 30, 225);
  doc.text(
    "PT. Paten Online Indonesia, Epicentrum Walk Building Lt. 3 Unit A-306, ",
    30,
    230
  );
  doc.text(
    "Kawasan Taman Rasuna, Jl. H.R. Rasuna Said Kuningan Jakarta Selatan 12940",
    30,
    235
  );

  doc.text("Jakarta,", 90, 245);
  doc.text(date, 110, 245);
  doc.text("Penerima Kuasa", 30, 250);
  doc.text("Pemberi Kuasa", 90, 250);
  doc.text("EKO BUDI SANTOSO, S.F.", 30, 280);
  doc.text(nama, 90, 280);

  doc.addImage(img, "JPEG", 30, 255, 40, 20); //ttd fix
} //end pageOne
// doc.addImage(g2, "JPEG", 90, 255, 30, 20);
// start func addpage
function addPage(nama, alamat) {
  doc.addPage();

  doc.setFontSize(10);
  doc.text("Lampiran I", 80, 30);
  doc.text("Keputusan Direktorat Jenderal Kekayaan Intelektual ", 80, 35);
  doc.text("Nomor: HKI-02.HI.06.10 Tahun 2017", 80, 40);
  doc.text("Tentang Formulir Pendaftaran Merek", 80, 45);
  doc.text("Tanggal: 03 Maret 2017", 80, 50);

  doc.setFontSize(12);
  const b1 = "SURAT PERNYATAAN PERMOHONAN PENDAFTARAN MEREK";
  doc.text(b1, 40, 60);
  const textWidth2 = doc.getTextWidth(b1);
  doc.line(40, 61, 43 + textWidth2, 61);
  doc.text("Merek:", 30, 65);
  doc.text("Label Merek", 80, 80);

  // doc.addImage(g1, "JPEG", 35, 90, 130, 70);

  doc.line(30, 70, 190, 70);
  doc.line(30, 170, 190, 170);
  doc.line(30, 70, 30, 170);
  doc.line(190, 70, 190, 170);

  doc.text("Yang diajukan untuk permohonan pendaftaran merek oleh:", 30, 185);
  doc.text("Nama Pemohon", 35, 195);
  doc.text("Alamat", 35, 200);
  doc.text(":", 80, 196);
  doc.text(":", 80, 200);
  doc.text(nama, 90, 195);
  doc.text(alamat, 90, 200);
  doc.text(
    "Dengan ini menyatakan bahwa merek tersebut merupakan milik pemohon dan tidak meniru pihak lain.",
    30,
    215,
    {
      maxWidth: 160,
      align: "justify",
      lineHeightFactor: 1.15,
    }
  );
  doc.text("Jakarta,", 120, 235);
  doc.text(date, 140, 235);

  doc.addImage(img, "JPEG", 120, 245, 40, 20); //ttd fix
  const b2 = "Eko Budi Santoso, S.F.";
  doc.text(b2, 120, 265);
  const textWidth3 = doc.getTextWidth(b2);
  doc.line(120, 266, 120 + textWidth3, 266);
  doc.text("Kuasa Pemohon", 120, 270);
} // end func addpage
var form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const kodePos = document.getElementById("kodePos").value;
  const nomorHp = document.getElementById("nomorPonsel").value;
  const email = document.getElementById("email").value;
  pageOne(nama, alamat, kodePos, nomorHp, email);
  doc.addImage(g1, "JPEG", 35, 135, 70, 40);
  doc.addImage(g2, "JPEG", 90, 255, 30, 20);
  addPage(nama, alamat);
  doc.addImage(g1, "JPEG", 35, 90, 130, 70);
  var formData = new FormData();
  formData.append("file", doc.output("datauristring").split("base64,")[1]);
  fetch("http://127.0.0.1:2024/img", {
    method: "POST",
    body: formData, // Payload is formData object
  });
});

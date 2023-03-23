let qrText = document.getElementById("qrText");
const QRElement = document.getElementById("QR-output");
function generateQR() {
  new QRCode(QRElement, qrText.value);
}

// შექმენი input ველი
// როცა დატოვებს input-ი, ფონური ფერი ვარდისფრად უნდა შეიცვალოს
// ტექსტის ფერი უნდა გახდეს თეთრი

const input5 = document.getElementById("input5");

input5.addEventListener("blur", () => {
  input5.style.backgroundColor = "pink";
  input5.style.color = "white";
});
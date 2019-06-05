import jsPDF from 'jspdf';
// import jsPDF from 'jspdf/dist/jspdf.debug';

function createPDF(signaturePad) {
	let coding = document.querySelector("input[name='coding']");
	let swag = document.querySelector("input[name='swag']");
	let hipster = document.querySelector("input[name='hipster']");
	let spiritual = document.querySelector("input[name='spiritual']");

	let firstName = document.querySelector("input[name='firstName']").value;
	let lastName = document.querySelector("input[name='lastName']").value;
	let username = document.querySelector("input[name='username']").value;

	let image = signaturePad.toDataURL(); // save image as JPEG
	let signature = (document.querySelector("input[name='signature']").value = image);

	getValue([coding, swag, hipster, spiritual]);

	var doc = new jsPDF();



	doc.text('First Name:', 10, 10);
	doc.text(firstName, 50, 10);

	doc.text('Last Name:', 10, 30);
	doc.text(lastName, 50, 30);

	doc.text('Username:', 10, 50);
	doc.text(username, 50, 50);

	doc.text('Coding:', 10, 70);
	doc.text(coding.value, 35, 70);

	doc.text('Swag:', 90, 70);
	doc.text(swag.value, 115, 70);

	doc.text('hipster:', 10, 90);
	doc.text(hipster.value, 35, 90);

	doc.text('spiritual:', 90, 90);
	doc.text(spiritual.value, 115, 90);

	doc.text('Signature: ', 10, 115);
	doc.addImage(signature, 'PNG', 10, 125, 100, 40);
	doc.save(`${firstName}-${lastName}.pdf`);

  sendPDF(doc)
}
let sendPDF = async function(pdf){
  const url = document.querySelector("[name='submit-to-google-sheets']").dataset.url;
  let formData = new FormData();
  const formattedPDF = pdf.output('datauristring')
  formData.append('pdf', formattedPDF)
  const res = await fetch(url, {
    headers: {
      'X-CSRF-Token': getMetaValue('csrf-token')
    },
    method: 'POST',
    dataType: 'script',
    credentials: 'include',
    body: formData,
  }).catch(err => alert(err.message))
  let data = await res.json();

  console.log(data)
}
function getValue(inputs) {
 inputs.forEach(input => {
  if (input.checked) return input;

  return (input.value = `not-${input.name}`);
});
}

function getMetaValue(name) {
  const element = document.head.querySelector(`meta[name="${name}"]`);
  return element.getAttribute('content');
}
export default createPDF;

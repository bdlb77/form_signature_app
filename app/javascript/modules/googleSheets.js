import signaturePad from 'signature_pad';

async function googleSheets(signaturePad, form) {
	let image = signaturePad.toDataURL(); // save image as JPEG
  document.querySelector("input[name='signature']").value = image  ? "signed" : "not signed";
	const url = 'https://script.google.com/macros/s/AKfycbw4FIig6VxvFDQRMRPqa4opEnVMiLpYaVbSaHNYZbpHwItsW5U/exec';
	await fetch(url, { method: 'POST', body: new FormData(form) })
		// .then(response => console.log('Success!', response))
    .then(() => alert('Successfuly sent to Goggle Sheets.'))
		.catch(error => console.error('Error!', error.message));

}

export default googleSheets;

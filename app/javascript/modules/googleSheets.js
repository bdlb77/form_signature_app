import signaturePad from 'signature_pad';

function googleSheets(signaturePad, form) {
	let image = signaturePad.toDataURL(); // save image as JPEG
	document.querySelector("input[name='signature']").value = image;
	const url = 'https://script.google.com/macros/s/AKfycbw4FIig6VxvFDQRMRPqa4opEnVMiLpYaVbSaHNYZbpHwItsW5U/exec';
	fetch(url, { method: 'POST', body: new FormData(form) })
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message));
}

export default googleSheets;

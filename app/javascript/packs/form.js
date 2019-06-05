import SignaturePad from 'signature_pad';
import googleSheets from '../modules/googleSheets';
import createPDF from '../modules/createPDF';
function form() {
	const canvas = document.querySelector('.signature canvas');
	const signaturePad = new SignaturePad(canvas, {
		backgroundColor: 'rgba(255, 255, 255, 0)',
		penColor: 'rgb(0, 0, 0)',
	});

	var ratio = Math.max(window.devicePixelRatio || 1, 1);

	// This part causes the canvas to be cleared
	canvas.width = canvas.offsetWidth * ratio;
	canvas.height = canvas.offsetHeight * ratio;
	canvas.getContext('2d').scale(ratio, ratio);

	const form = document.querySelector('.signature__form');

	form.addEventListener('submit', e => {
		// let scriptURL = 'https://script.google.com/macros/s/AKfycbw4FIig6VxvFDQRMRPqa4opEnVMiLpYaVbSaHNYZbpHwItsW5U/exec'
		e.preventDefault();
		if (signaturePad.isEmpty()) {
			alert('Please fill in signature.');
			return;
		}
		googleSheets(signaturePad, form);
		createPDF(signaturePad);
    signaturePad.clear();
    form.reset();
	});
}
form();

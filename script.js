function binaryToText(binary) {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

function updateHeading(radio) {
    const selectedText = radio.nextElementSibling.getAttribute('data-txt');
    const heading = document.getElementById('converter-heading');
    heading.textContent = selectedText + " Converter";
}

function convert() {
    const inputField = document.getElementById('input-field');
    const outputCard = document.getElementById('output-card');
    const output = document.getElementById('output');
    const selectedOption = document.querySelector('.options input[type="radio"]:checked');

    if (!selectedOption || !inputField.value) {
        alert('Please select an option and enter a value.');
        return;
    }

    if (selectedOption.value === 'binary-to-text') {
        output.textContent = binaryToText(inputField.value);
    } else if (selectedOption.value === 'text-to-binary') {
        output.textContent = textToBinary(inputField.value);
    }

    outputCard.style.display = 'block';
}

function copyToClipboard() {
    const output = document.getElementById('output').textContent;
    navigator.clipboard.writeText(output).then(() => {
        alert('Successfully copied!');
    }, () => {
        alert('Failed to copy!');
    });
}

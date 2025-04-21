const input = document.getElementById('input');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copy');
// const downloadBtn = document.getElementById('download');

function bratify(text) {
  return text.split('').map((char, i) => {
    if (Math.random() > 0.9) return char.toUpperCase();
    return i % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

input.addEventListener('input', () => {
  output.textContent = bratify(input.value);
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(output.textContent);
  alert('Copied!');
});

// downloadBtn.addEventListener('click', () => {
//   const blob = new Blob([output.textContent], { type: 'text/plain' });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'dratify.txt';
//   a.click();
// });
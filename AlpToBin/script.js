const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  const charCode = event.key.charCodeAt(0);
  const binaryCharCode = charCode.toString(2).padStart(8, '0'); 
  
  insert.innerHTML = `
  <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>key</small>
  </div>

  <div class="key">
    ${binaryCharCode} <!-- Converts Unicode to binary with leading zeros -->
    <small>Binary</small>
  </div>

  <div class="key">
    ${event.code}
    <small>code</small>
  </div>
  `;
});

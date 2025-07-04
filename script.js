async function nextStep(isYes) {
  try {
    if (isYes) {
      await document.getElementById('yesSound').play();
      document.getElementById('question').textContent = 'Danışaq?';
      
      const container = document.getElementById('firstOptions');
      container.innerHTML = '';  // temizle
      
      const btnYes = document.createElement('button');
      btnYes.textContent = 'Danışaq';
      btnYes.addEventListener('click', () => alert('Çox sevindim ❤️ Danışaq!'));
      
      const btnNo = document.createElement('button');
      btnNo.textContent = 'Yox';
      btnNo.addEventListener('click', () => alert('Başa düşdüm, sağ ol'));
      
      container.appendChild(btnYes);
      container.appendChild(btnNo);
      
    } else {
      await document.getElementById('noSound').play();
      document.getElementById('question').textContent = 'Küsdüm 😢';
      document.getElementById('firstOptions').style.display = 'none';
    }
  } catch (err) {
    console.log('Ses çalma hatası:', err);
  }
}

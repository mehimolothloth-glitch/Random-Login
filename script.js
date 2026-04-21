const VALID_EMAIL = "pokokiso@gmail.com";
    const VALID_PASSWORD = "cobatebak";
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginButton');
    const btnContainer = document.getElementById('buttonContainer');
    const messageBox = document.getElementById('messageBox');

    let isMovingMode = false;

    function moveButtonRandom() {
      if (!btnContainer || !loginBtn) return;
      
      if (!isMovingMode) {
        loginBtn.classList.add('moving-mode');
        isMovingMode = true;
      }
      
      const maxLeft = 85;
      const minLeft = 5;
      const maxTop = 75;
      const minTop = 5;
      
      const randomLeft = minLeft + Math.random() * (maxLeft - minLeft);
      const randomTop = minTop + Math.random() * (maxTop - minTop);
      
      loginBtn.style.left = randomLeft + '%';
      loginBtn.style.top = randomTop + '%';
    }

    function resetButtonPosition() {
      loginBtn.classList.remove('moving-mode');
      loginBtn.style.left = '';
      loginBtn.style.top = '';
      loginBtn.style.position = '';
      isMovingMode = false;
    }
    
    function showMessage(text, isError = true) {
      messageBox.innerHTML = text;
      messageBox.classList.remove('error-msg', 'succes-msg');
      if (isError) {
        messageBox.classList.add('error-msg');
      } else {
        messageBox.classList.add('succes-msg');
      }
      
      setTimeout(() => {
        if (messageBox.innerHTML === text) {
          messageBox.innerHTML = '';
        }
      }, 2500);
    }

    function shakeInputs() {
      const inputs = [emailInput, passwordInput];
      inputs.forEach(input => {
        input.style.transform = 'translateX(4px)';
        setTimeout(() => input.style.transform = 'translateX(-4px)', 50);
        setTimeout(() => input.style.transform = 'translateX(3px)', 100);
        setTimeout(() => input.style.transform = 'translateX(-3px)', 150);
        setTimeout(() => input.style.transform = 'translateX(2px)', 200);
        setTimeout(() => input.style.transform = 'translateX(0)', 250);
      });
    }
    
    function handleLogin() {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        showMessage("Oke, Masok Bos!", false);
        resetButtonPosition();
        setTimeout(() => {
          alert("Selamat datang, Administrator! ");
        }, 300);
      } else {
        showMessage("Salah Woi", true);
        shakeInputs();
        moveButtonRandom();
      }
    }

    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      handleLogin();
    });

    const inputs = [emailInput, passwordInput];
    inputs.forEach(input => {
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleLogin();
        }
      });
    });

    console.log("Oke Bos, Ndang Dijajal~");
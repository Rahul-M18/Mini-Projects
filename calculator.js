const display = document.getElementById('display');
    let currentInput = '';

    function appendNumber(num) {
      if (currentInput === '0' && num !== '.') {
        currentInput = num;
      } else {
        currentInput += num;
      }
      updateDisplay();
    }

    function appendOperator(operator) {
      const lastChar = currentInput.slice(-1);
      if ("+-*/".includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
      } else {
        currentInput += operator;
      }
      updateDisplay();
    }

    function clearDisplay() {
      currentInput = '';
      updateDisplay();
    }

    function calculate() {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
      updateDisplay();
    }

    function updateDisplay() {
      display.textContent = currentInput || '0';
    }
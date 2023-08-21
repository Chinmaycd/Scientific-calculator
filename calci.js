
    function appendValue(value) {
        document.getElementById('display').value += value;
      }
      
      function clearDisplay() {
        document.getElementById('display').value = '';
      }
      
      function deleteChar() {
        let display = document.getElementById('display').value;
        document.getElementById('display').value = display.slice(0, -1);
      }
      
      function calculate() {
        let display = document.getElementById('display').value;
        let result;
        try {
          display = display.replace(/sin/g, 'Math.sin');
        //   console.log(display)
          display = display.replace(/cos/g, 'Math.cos');
          display = display.replace(/tan/g, 'Math.tan');
          display = display.replace(/log/g, 'Math.log10');
          display = display.replace(/ln/g, 'Math.log');
          display = display.replace(/sqrt/g, 'Math.sqrt');
          display = display.replace(/%/g, '/100');
          display = display.replace(/pi/g, 'Math.PI');
          display = display.replace(/factorial/g, 'factorial');
          display = display.replace(/\^/g, '**');
     // Handle parentheses as multiplication
            display = display.replace(/(\d+)\(/g, '$1*(');
            display = display.replace(/\)(\d+)/g, ')*$1');
            // Replace consecutive parentheses with multiplication
    display = display.replace(/\)\(/g, ')*(');

          result = eval(display);
        } catch (error) {
          result = 'Error';
        }
        document.getElementById('display').value = result;
      }
      
      function factorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
      }
      
  
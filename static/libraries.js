document.addEventListener('DOMContentLoaded', function () {
    var libResult = document.getElementById('lib-result');
    var libTrace = document.getElementById('lib-trace');

    document.querySelectorAll('[data-lib]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lib = btn.getAttribute('data-lib');
            var message = '';
            var trace = '';

            if (lib === 'math') {
                message = '📐 Math library loaded! Square root of 144 = ' + Math.sqrt(144);
                trace = '>>> import math\n>>> math.sqrt(144)\n12.0';
            } else if (lib === 'random') {
                message = '🎲 Random number (1-100): ' + Math.floor(Math.random() * 100 + 1);
                trace = '>>> import random\n>>> random.randint(1, 100)';
            } else if (lib === 'datetime') {
                message = '📅 Today is ' + new Date().toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                trace = '>>> from datetime import date\n>>> date.today()';
            } else {
                message = '🎨 Turtle graphics ready! Draw shapes with code.';
                trace = '>>> import turtle\n>>> turtle.forward(100)\n>>> turtle.left(90)';
            }

            libResult.textContent = message;
            libTrace.textContent = trace;
        });
    });
});

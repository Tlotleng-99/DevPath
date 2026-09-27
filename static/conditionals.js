document.addEventListener('DOMContentLoaded', function () {
    var condResult = document.getElementById('cond-result');
    var condTrace = document.getElementById('cond-trace');

    document.querySelectorAll('[data-cond]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var choice = btn.getAttribute('data-cond');
            var message = '';
            var trace = '';

            if (choice === 'taxi') {
                message = '🚐 You take the taxi — R25 well spent!';
                trace = '>>> if money >= 25:\n...     take_taxi()  # You ride in style!';
            } else if (choice === 'walk') {
                message = '🚶 You walk — free exercise, eish!';
                trace = '>>> else:\n...     walk()  # No cash, no problem';
            } else {
                message = '🚌 You take the bus — R12, the smart middle ground!';
                trace = '>>> elif money >= 12:\n...     take_bus()  # The sharp move';
            }

            condResult.textContent = message;
            condTrace.textContent = trace;
        });
    });
});

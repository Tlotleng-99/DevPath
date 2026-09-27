document.addEventListener('DOMContentLoaded', function () {
    var excResult = document.getElementById('exc-result');
    var excTrace = document.getElementById('exc-trace');

    document.querySelectorAll('[data-exc]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var action = btn.getAttribute('data-exc');
            var message = '';
            var trace = '';

            if (action === 'plug') {
                message = '⚡ The socket sparked! You caught it and switched to battery power.';
                trace = '>>> try:\n...     plug_in()\nexcept SparkError:\n...     use_battery()  # Plan B, sharp!';
            } else if (action === 'surge') {
                message = '🔌 Power surge! Your surge protector saved the day.';
                trace = '>>> try:\n...     charge_phone()\nexcept SurgeError:\n...     surge_protector.activate()  # Saved!';
            } else {
                message = '💡 Load shedding hit! Generator kicked in automatically.';
                trace = '>>> try:\n...     use_main_power()\nexcept LoadShedding:\n...     start_generator()  # Amandla!';
            }

            excResult.textContent = message;
            excTrace.textContent = trace;
        });
    });
});

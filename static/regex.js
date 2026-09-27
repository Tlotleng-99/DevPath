document.addEventListener('DOMContentLoaded', function () {
    var regexResult = document.getElementById('regex-result');
    var regexTrace = document.getElementById('regex-trace');

    document.querySelectorAll('[data-pattern]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var pattern = btn.getAttribute('data-pattern');
            var message = '';
            var trace = '';

            if (pattern === 'email') {
                message = '📧 Email pattern: <code>[\\w.]+@[\\w.]+\\.\\w+</code><br>Matches: <code>thabo@example.com</code>';
                trace = '>>> import re\n>>> re.findall(r"[\\w.]+@[\\w.]+\\.\\w+", text)';
            } else if (pattern === 'phone') {
                message = '📱 SA Phone pattern: <code>0\\d{9}</code><br>Matches: <code>0821234567</code>';
                trace = '>>> re.findall(r"0\\d{9}", text)  # SA cell numbers';
            } else if (pattern === 'id') {
                message = '🪪 SA ID pattern: <code>\\d{6} \\d{4} \\d{3}</code><br>Matches: <code>900101 5009 081</code>';
                trace = '>>> re.findall(r"\\d{6} \\d{4} \\d{3}", text)';
            } else {
                message = '💰 Price pattern: <code>R\\d+</code><br>Matches: <code>R150</code>';
                trace = '>>> re.findall(r"R\\d+", text)  # Find all prices';
            }

            regexResult.innerHTML = message;
            regexTrace.textContent = trace;
        });
    });
});

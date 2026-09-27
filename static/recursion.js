document.addEventListener('DOMContentLoaded', function () {
    var recResult = document.getElementById('rec-result');
    var recTrace = document.getElementById('rec-trace');

    document.querySelectorAll('[data-rec]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var depth = parseInt(btn.getAttribute('data-rec'), 10);
            var output = [];
            var trace = [];

            function openDoll(n) {
                trace.push('openDoll(' + n + ') — opening doll...');
                if (n === 0) {
                    trace.push('openDoll(0) — base case! Smallest doll reached.');
                    return '🪆';
                }
                var inner = openDoll(n - 1);
                trace.push('openDoll(' + n + ') — closed, returning inner doll.');
                return '🪆(' + inner + ')';
            }

            var result = openDoll(depth);
            recResult.textContent = 'Result: ' + result;
            recTrace.textContent = trace.join('\n');
        });
    });
});

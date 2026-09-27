document.addEventListener('DOMContentLoaded', function () {
    var loopPot = document.getElementById('loop-pot');
    var loopTrace = document.getElementById('loop-trace');
    var frying = false;

    document.querySelectorAll('[data-fry]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (frying) return;
            frying = true;

            var count = parseInt(btn.getAttribute('data-fry'), 10);
            var fried = 0;
            loopPot.innerHTML = '';
            loopTrace.textContent = '>>> while pot_not_empty:\n...     fry_fatcake()';

            var interval = setInterval(function () {
                if (fried >= count) {
                    clearInterval(interval);
                    loopTrace.textContent = '>>> # All ' + count + ' fatcakes fried! Pot is empty.';
                    frying = false;
                    return;
                }
                fried++;
                loopPot.insertAdjacentHTML('beforeend', '<span class="fatcake">🥟</span>');
            }, 300);
        });
    });
});

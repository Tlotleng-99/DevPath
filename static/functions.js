document.addEventListener('DOMContentLoaded', function () {
    var fnBowls = document.getElementById('fn-bowls');
    var fnTrace = document.getElementById('fn-trace');
    var fnLine2 = document.getElementById('fn-line2');

    function make_pap(people) {
        var water = people * 1.0;
        var mealie = people * 0.5;
        fnBowls.innerHTML = '';
        for (var i = 0; i < people && i < 80; i++) {
            fnBowls.insertAdjacentHTML('beforeend', '<span class="bowl">🥣</span>');
        }
        fnLine2.textContent = '    # ' + water + ' cups water + ' + mealie + ' cups mealie meal';
        fnTrace.textContent = '>>> make_pap(people=' + people + ')\n' +
                              '... ' + people + ' servings of pap ready 🍽️ (returned)';
    }

    document.querySelectorAll('[data-p]').forEach(function (b) {
        b.addEventListener('click', function () {
            make_pap(parseInt(b.getAttribute('data-p'), 10));
        });
    });

    make_pap(4);
});

document.addEventListener('DOMContentLoaded', function () {
    var varGrid = document.getElementById('var-grid');
    var varTrace = document.getElementById('var-trace');
    var stock = { coke: 15, bread: 12, wipes: 22 };
    var names = { coke: '🥤 Coke', bread: '🍞 Bread', wipes: '🧻 Wipes' };

    function renderVars() {
        varGrid.innerHTML = '';
        Object.keys(stock).forEach(function (key) {
            var card = document.createElement('div');
            card.className = 'var-card';
            card.innerHTML =
                '<div class="var-name">' + names[key] + '</div>' +
                '<div class="var-value">R' + stock[key] + '</div>';
            varGrid.appendChild(card);
        });
    }

    document.querySelectorAll('[data-var]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var key = btn.getAttribute('data-var');
            stock[key] = stock[key] + 2;
            renderVars();
            varTrace.textContent = '>>> ' + key + ' = ' + key + ' + 2\n' +
                '# ' + key + ' is now R' + stock[key];
        });
    });

    renderVars();
});

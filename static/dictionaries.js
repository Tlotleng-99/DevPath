document.addEventListener('DOMContentLoaded', function () {
    var dictResult = document.getElementById('dict-result');
    var dictTrace = document.getElementById('dict-trace');
    var prices = { coke: 15, bread: 12, wipes: 22 };
    var names = { coke: '🥤 Coke', bread: '🍞 Bread', wipes: '🧻 Wipes' };

    document.querySelectorAll('[data-dict]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var action = btn.getAttribute('data-dict');

            if (action === 'all') {
                var allItems = Object.keys(prices).map(function (key) {
                    return names[key] + ' → R' + prices[key];
                });
                dictResult.innerHTML = allItems.join('<br>');
                dictTrace.textContent = '>>> for item, price in prices.items():\n...     print(item, price)\n# ' + Object.keys(prices).length + ' items in price list';
            } else {
                var price = prices[action];
                dictResult.innerHTML = names[action] + ' costs <strong>R' + price + '</strong>';
                dictTrace.textContent = '>>> prices["' + action + '"]  // Look up "' + action + '"\n' + price;
            }
        });
    });
});

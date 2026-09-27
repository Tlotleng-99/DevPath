document.addEventListener('DOMContentLoaded', function () {
    var fileResult = document.getElementById('file-result');
    var fileTrace = document.getElementById('file-trace');
    var sales = [];

    document.querySelectorAll('[data-sale]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.getAttribute('data-sale');
            var price = parseInt(btn.getAttribute('data-price'), 10);
            sales.push({ item: item, price: price });
            renderSales();
            fileTrace.textContent = '>>> write_to_notebook("sales.txt", "' + item + ' R' + price + '")\n' +
                '# Saved! Total sales: ' + sales.length + ' items, R' + sales.reduce(function (s, x) { return s + x.price; }, 0);
        });
    });

    function renderSales() {
        fileResult.innerHTML = '';
        sales.forEach(function (sale) {
            fileResult.insertAdjacentHTML('beforeend',
                '<div class="sale-row"><span>' + sale.item + '</span><span>R' + sale.price + '</span></div>');
        });
    }
});

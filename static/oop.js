document.addEventListener('DOMContentLoaded', function () {
    var row = document.getElementById('oop-row');
    var code = document.getElementById('oop-code');
    var kombis = [];
    var nameIdx = 0;
    var classicNames = ['Jaws of Life', 'Amukelani', 'No Sweat', 'Da Yung Raw'];

    function buildKombi() {
        var colour = document.getElementById('oop-colour').value;
        var route = document.getElementById('oop-route').value;
        var name = classicNames[nameIdx % classicNames.length];
        nameIdx = nameIdx + 1;
        var k = { name: name, colour: colour, route: route };
        kombis.push(k);
        renderKombis();
        code.textContent = 'kombi = Kombi(colour="' + colour + '", route="' + route + '")';
    }

    function renderKombis() {
        row.innerHTML = '';
        kombis.forEach(function (k, idx) {
            var card = document.createElement('div');
            card.className = 'kombi-card';
            card.style.setProperty('--kc', k.colour);
            card.innerHTML =
                '<div class="kombi-emoji">🚐</div>' +
                '<div class="kombi-name">' + k.name + '</div>' +
                '<div class="kombi-attr">route: <b>' + k.route + '</b></div>' +
                '<div class="kombi-attr">colour: <b>' + k.colour + '</b></div>' +
                '<div class="kf" id="kf-' + idx + '"></div>' +
                '<div class="controls klein">' +
                '  <button class="yellow" id="hoot-' + idx + '">hooter()</button>' +
                '  <button class="blue" id="drv-' + idx + '">drive()</button>' +
                '</div>';
            row.appendChild(card);
            document.getElementById('hoot-' + idx).addEventListener('click', function () {
                var f = document.getElementById('kf-' + idx);
                f.textContent = 'Phiphi! 🚐';
                f.classList.remove('flash');
                void f.offsetWidth;
                f.classList.add('flash');
            });
            document.getElementById('drv-' + idx).addEventListener('click', function () {
                var e = card.querySelector('.kombi-emoji');
                e.classList.remove('drive');
                void e.offsetWidth;
                e.classList.add('drive');
                card.querySelector('.kf').textContent = 'ka-chow, moving!';
            });
        });
    }

    document.getElementById('oop-build').addEventListener('click', buildKombi);
    buildKombi();
});

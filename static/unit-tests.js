document.addEventListener('DOMContentLoaded', function () {
    var testResult = document.getElementById('test-result');
    var testTrace = document.getElementById('test-trace');

    document.querySelectorAll('[data-test]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var test = btn.getAttribute('data-test');
            var message = '';
            var trace = '';

            if (test === 'salt') {
                message = '✅ Salt test PASSED — perfect seasoning!';
                trace = '>>> assert potjie.salt == "perfect"\n# ✓ Test passed';
            } else if (test === 'gravy') {
                message = '✅ Gravy test PASSED — thick and rich!';
                trace = '>>> assert potjie.gravy_thickness > 0.8\n# ✓ Test passed';
            } else if (test === 'meat') {
                message = '✅ Meat test PASSED — tender and cooked through!';
                trace = '>>> assert potjie.meat_tenderness == "soft"\n# ✓ Test passed';
            } else {
                message = '⚠️ Veg test FAILED — needs more carrots! Fixing...';
                trace = '>>> assert potjie.carrots >= 3\n# ✗ Test failed\n# Fixed: added 5 more carrots';
            }

            testResult.textContent = message;
            testTrace.textContent = trace;
        });
    });
});

function cuaca() {
    document.getElementById('loader').style.display = 'block';

    document.getElementById('result').style.display = 'none';

    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';

        document.getElementById('result').style.display = 'block';
    }, 2000);
}
const footer = document.querySelector('#footer');
    fetch('./asset/footer.html')
        .then(res => res.text())
        .then(data => {
            nav.innerHTML = data
        })
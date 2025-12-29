

    var load = document.getElementById('loader');
    var main = document.getElementById('main');

    load.style.display = 'block';
    main.style.display = 'none';
    load.style.alignItems = 'center';
    
    setTimeout(function() {
    
      main.style.display = 'block';
      load.style.display = 'none'
    }, 4000);


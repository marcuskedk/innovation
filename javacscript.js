    var button1 = document.querySelector('.btn1');
    var button2 = document.querySelector('.btn2');
    var button3 = document.querySelector('.btn3');
    var button4 = document.querySelector('.btn4');
    var video1 = document.querySelector('.video1');
    var video2 = document.querySelector('.video2');
    var video3 = document.querySelector('.video3');
    var video4 = document.querySelector('.video4');
    var docmunt1 = document.querySelector('.docmunt1');
    var docmunt2 = document.querySelector('.docmunt2');
    var docmunt3 = document.querySelector('.docmunt3');
    var docmunt4 = document.querySelector('.docmunt4');
    var close1 = document.querySelector('.close1');
    var close2 = document.querySelector('.close2');
    var close3 = document.querySelector('.close3');
    var close4 = document.querySelector('.close4');
    
    button1.onclick = function(ba) {
        video1.play();
        button1.style.opacity = "0";
        button1.style.zIndex = "-1";
    }
    
    close1.onclick = function() {
        docmunt1.style.opacity = "0";
        docmunt1.style.zIndex = "0";
        close1.style.zIndex = "-1";
        video2.play();
    }
    
    button2.onclick = function(bb) {
        close1.style.zIndex = "1";
        docmunt1.classList.add('trans');
        docmunt1.style.opacity = "1";
        docmunt1.style.zIndex = "1";
        button1.style.opacity = "0";
        button1.style.zIndex = "-1";
        button2.style.opacity = "0";
        button2.style.zIndex = "-1";
    }
    
    close2.onclick = function() {
        docmunt2.style.opacity = "0";
        docmunt2.style.zIndex = "0";
        close2.style.zIndex = "-1";
        video3.play();
    }
    
    button3.onclick = function(bc) {
        close2.style.zIndex = "1";
        docmunt2.classList.add('trans');
        docmunt2.style.opacity = "1";
        docmunt2.style.zIndex = "1";
        button2.style.opacity = "0";
        button2.style.zIndex = "-1";
        button3.style.opacity = "0";
        button3.style.zIndex = "-1";
    }
    
    close3.onclick = function() {
        docmunt3.style.opacity = "0";
        docmunt3.style.zIndex = "0";
        close3.style.zIndex = "-1";
        video4.play();
    }
    
    button4.onclick = function(bc) {
        close4.style.zIndex = "1";
        docmunt4.classList.add('trans');
        docmunt4.style.opacity = "1";
        docmunt4.style.zIndex = "1";
        button3.style.opacity = "0";
        button3.style.zIndex = "-1";
        button4.style.opacity = "0";
        button4.style.zIndex = "-1";
    }
    
    close4.onclick = function() {
        docmunt4.style.opacity = "0";
        docmunt4.style.zIndex = "0";
        close4.style.zIndex = "-1";
        video4.play();
    }

    video1.onended = function(va) {
        video1.style.opacity = "0";
        video2.style.opacity = "1";
        button2.style.opacity = "1";
        button2.style.zIndex = "1";
    };

    video2.onended = function(vb) {
        video1.style.opacity = "0";
        video2.style.opacity = "0";
        video3.style.opacity = "1";
        button3.style.opacity = "1";
        button3.style.zIndex = "1";
    };

    video3.onended = function(vc) {
        video1.style.opacity = "0";
        video2.style.opacity = "0";
        video3.style.opacity = "0";
        video4.style.opacity = "1";
        button4.style.opacity = "1";
        button4.style.zIndex = "1";
    };

    video4.onended = function(vd) {
        location.reload();
    };
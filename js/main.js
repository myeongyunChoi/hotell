window.addEventListener("scroll", function () {

    // const cont = document.getElementById("introduce");

    const txt_line = document.querySelector(".text_line");
    const menu_txt = document.getElementById("meun_txt")
    let win_top = window.scrollY;
    
    if (win_top > 100){
        txt_line.style.opacity="0";
    }else{
        txt_line.style.opacity="1";
    }

    // if(win_top > $he){
        
    // }

    const slide_wrap = document.getElementById("hotell_more");
    const slide = document.querySelector(".slide");
    const s_wid = slide.offsetWidth;
    const s_top = slide_wrap.offsetTop;
    const s_hei = slide_wrap.clientHeight;
    const s_li = slide.children;
    const room_top = document.querySelector("#room").offsetTop;


    let mov = 0;
    let win_wid = window.innerWidth;
    let s_move_max = (s_wid - win_wid) * -1;

    let ratio = s_wid / s_hei;
    //높이와 넓이의 비율


    //가로스크롤 생성
    if (win_top > s_top) {
        slide.classList.add("fix");

        let mov = -(win_top - s_top) * ratio;

        if (mov < s_move_max) {
            mov = s_move_max;
        }
        slide.style.transform = `translateX(${mov}px)`;
    } else {
        slide.classList.remove("fix");
        mov=0;
        slide.style.transform = `translateX(${mov}px)`;
    }

    if (win_top >= room_top) {
        slide.classList.remove("fix");
    }

})
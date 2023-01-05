const boxEvent = document.querySelector('.box-slider-event')
        const image_event = document.querySelectorAll('.box-slider-event .item-slider-event')
        const imageLength = image_event.length
        const perView = 4
        let totalScroll = 0
        const delay = 2000
        /* setProperty: đặt giá trị mới cho thuộc tính trên đối tượng khai báo kiểu CSS.*/ 
        boxEvent.style.setProperty('--per-view', perView)
        for(let i = 0; i < perView ; i++) {
          /*insertAdjacentHTML: chèn node vào các vị trí được chỉ định bởi tham số của hàm*/ 
            boxEvent.insertAdjacentHTML('beforeend', image_event[i].outerHTML)
        }
        /* setInterval: Hai hàm này cho phép bạn thực hiện một đoạn mã Javascript tại một thời điểm nào đó trong tương lai. */ 
        let autoScroll = setInterval(scrolling, delay)

        function scrolling() {
            totalScroll++
            if(totalScroll == imageLength + 1) {
                clearInterval(autoScroll)
                totalScroll = 1
                boxEvent.style.transition = '0s'
                boxEvent.style.left = '0'
                autoScroll = setInterval(scrolling, delay)
            }
            const widthEl = document.querySelector('.box-slider-event > :first-child').offsetWidth + 20
            boxEvent.style.left = `-${totalScroll * widthEl}px`
            /*cái dấu `` này dùng để chạy tự động*/ 
            boxEvent.style.transition = '.3s'
        }
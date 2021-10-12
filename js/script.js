for (let y = 1; y <= 100; y++) {
    const rowCols = document.querySelector(".row-cols-7")
    let bgColor = "bg-primary"
    const div3 = y % 3 === 0
    let text = y

    if (div3) {
        bgColor = "bg-success"
        text = "fizz"
    }

    const div5 =  y % 5 === 0

    if (div5) {
        bgColor = "bg-warning"
        text = "buzz"
    }
    
    if (div3 && div5) {
        bgColor = "bg-danger"
        text = "fizzbuzz" 
    }

    rowCols.innerHTML +=   ` <div class="g-3">
                                <div class="ratio ratio-1x1 ${bgColor}">
                                    <div class="testo text-uppercase">${text}</div>
                                </div>
                            </div> `
                            
}

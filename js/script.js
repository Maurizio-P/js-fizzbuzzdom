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
































// for (let i = 1; i <= 7; i++) {
//     const row = document.createElement("div") 
//     row.classList.add("row")
//     containerScacchiera.append(row);
    
//     for (let x = 1; x <= 7; x++) {
//         let bgColor = ""
        
//         for (let y = 1; y <= 100; y++) {
            
//             const div3 = y % 2 === 0
            
            
//             if (!div3) {
//                 bgColor = "bg-danger"
//             }
            
            
//         }

//         row.innerHTML += `  <div class="col g-3">
//         <div class="ratio ratio-1x1 border ${bgColor}">
//         </div>
//         </div>`;
//     }
// }



// for (let i = 1; i <= 100; i++){
//     const rowCols = document.querySelector(".row-cols-7")
//     const divisibiliPer3 = i % 3 === 0;
//     let bgColor = "";
  
//   if(divisibiliPer3){
//       bgColor = "bg-danger"
//     } 
//     rowCols.innerHTML += <div class="col g-4">
//                             <div class="ratio ratio-1x1 border ${bgColor}">
//                              <div></div>
//                             </div>
//                         </div>;
  
//   }
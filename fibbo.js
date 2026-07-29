// 0,1,1,2,3,5,8,13

function fibbo(n) {
    // if (n == 1) { return 1 }
    let n1 = 0;
    let n2 = 1;
    console.log(n1, n2)
    for (let i = 0; i < n; i++) {


        let newfib = n1 + n2

        console.log(newfib)
        n1 = n2;
        n2 = newfib
    }
}

fibbo(10)


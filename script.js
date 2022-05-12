function proses() {
    alert("haloo");
    console.log("iyaaa");
    
    var data , ulang;
    var hasil = 1;
    
    data = document.getElementById("data1").value;
    ulang = document.getElementById("data2").value;
    for (var i = 1; i<=ulang; i++) {
        hasil = hasil * data ;
        alert(hasil)
        console.log("hasil "+ hasil);
    }

    document.getElementById("hasil").value = hasil;
    
}
// ganjil genap
function ganjil_genap(){
    var awal,akhir;

    awal=document.getElementById("nilai1").value;
    akhir = document.getElementById("nilai2").value;
    for(var i=0; i<=akhir; i++){
        if(i%2==0){
            console.log("nilai "+i+" = Genap");
        }else{
            console.log("nilai "+i+" = ganjil");
        }
    }
}
// bintang
function bintangKanan() {
    var awal, akhir;			
    var bintang="",bintang2="";
    awal  = document.getElementById("bintang1").value;
    akhir = document.getElementById("bintang2").value;

    for (let i = 0; i < akhir; i++) {
        for (let j = 0; j <= i; j++) {
            bintang += '* ';
        }
        bintang += '\n';
    }
    return bintang;
    
}
function bintangBawah(){
    var awal, akhir;			
    var bintang="",bintang2="";
    awal  = document.getElementById("bintang1").value;
    akhir = document.getElementById("bintang2").value;

    for (let i = 0; i <= akhir; i++) {
        for (let j = akhir; j >= i; j--) {
            bintang += '* ';
        }
        bintang += '\n';
    }
    return bintang;
}
function hasil(){
    console.log("DENGAN PERULANGAN FOR");
    console.log(bintangKanan(document.getElementById("bintang1").value,document.getElementById("bintang2").value));
    console.log(bintangBawah(document.getElementById("bintang1").value,document.getElementById("bintang2").value));
}
function bintangPanah1(){
    var awal, akhir;			
    var bintang="",bintang2="";
    var i = 0; 
    awal  = document.getElementById("bintang1").value;
    akhir = document.getElementById("bintang2").value;

    while (i <= akhir ) {
        var j = 0;
        while (j <= i) {
            bintang += "*";
            j++;
        }
        i++;
        bintang += '\n';
    }
    return bintang;
}
function bintangPanah2(){
    var awal, akhir;			
    var bintang="",bintang2="";
    var i = 0; 
    awal  = document.getElementById("bintang1").value;
    akhir = document.getElementById("bintang2").value;

    while (i <= akhir ) {
        var j = akhir;
        while (j >=i) {
            bintang += "*";
            j--;
        }
        i++;
        bintang += '\n';
    }
    return bintang;
}
function hasil2(){
    console.log("DENGAN PERULANGAN WHILE");
    console.log(bintangPanah1(document.getElementById("bintang1").value,document.getElementById("bintang2").value));
    console.log(bintangPanah2(document.getElementById("bintang1").value,document.getElementById("bintang2").value));
}

function bintangDo1(){
    var awal, akhir;			
    var bintang="",bintang2="";
    var i = 0; 
    awal  = document.getElementById("bintang1").value;
    akhir = document.getElementById("bintang2").value;

    do{
        var j = 0;
        do{
            bintang += "*";
            j++;
        }while (j <=i) ;
        i++;
        bintang += '\n';
    }while(i <= akhir );
    return bintang;
}
function bintangDo2(){
    var awal, akhir;			
    var bintang="",bintang2="";
    var i = 0; 
    awal  = document.getElementById("bintang1").value;
    akhir = document.getElementById("bintang2").value;

    do{
        var j = akhir;
        do{
            bintang += "*";
            j--;
        }while (j >=i) ;
        i++;
        bintang += '\n';
    }while(i <= akhir );
    return bintang;
}
function hasil3(){
    console.log("DENGAN PERULANGAN DO WHILE");
    console.log(bintangDo1(document.getElementById("bintang1").value,document.getElementById("bintang2").value));
    console.log(bintangDo2(document.getElementById("bintang1").value,document.getElementById("bintang2").value));
}


function belajarArray2() {
    var arr = [5,4,20,7,12,9,2];
    
    var hasil =0;
    for (var i = 0; i<7; i++) {
        hasil = hasil + arr[i] ;	
    }
    rerata = hasil/arr.length;
    console.log(" hasil = " + hasil);
    console.log(" jumlah Array = " + arr.length);
    console.log(" rerata = " + rerata);

    console.log(" =====Selisih Array=====");
    for (var i = 0; i<arr.length-1; i++) {
        hasil = arr[i] - arr[i+1] ;	
        console.log(" selisih ke- " + i + " = " + Math.abs(hasil) );
        
    }

}
function belajarArray() {
    var arr = [5,4,6,7,8,9,2];
    //console.log(arr[0]);
    //console.log(arr[1]);
    for (var i = 0; i<7; i++) {
        console.log(arr[i]);	
    }
    
    var hasil =0;
    for (var i = 0; i<7; i++) {
        hasil = hasil + arr[i] ;	
    }
    console.log(hasil);	
}
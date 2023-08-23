// ilk önce Body Margin : 0 , padding: 0 verelim !
const bodyElement = document.body;
bodyElement.setAttribute("style","margin:0;padding:0;")


// Wrapper mızı Ortaya Alalım.
const wrapper = document.getElementById('w');
wrapper.setAttribute("style","display:flex;flex-direction:column;align-items:center;"); 

// ------- TARİH GETİRME..
 function TarihGuncelle(){
    const simdi = new Date();
const aylar = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];
const Index = simdi.getMonth();
const ayAdi = aylar[Index];
const tarih = simdi.toLocaleDateString();
const saat = simdi.toLocaleTimeString();
const tamTrh =`${ayAdi} ${tarih} ${saat}`;
  const Tarih =document.getElementById("trh");
  Tarih.innerHTML=tamTrh;
  Tarih.style.background=RenkAta();
 }
 TarihGuncelle();

// -----------ul ayarlama.
const ul = document.getElementById("ul");
ul.setAttribute("style","margin-top:1px;display:flex; flex-direction:column; padding: 0;");

// ---------wrapper> ul> li'mizi Düzenleyelim.
const li = document.querySelectorAll("li");

li.forEach(a=>{
    a.setAttribute("style"," list-style: none; padding:0.5rem; margin-bottom:0.3rem;")
});

li.forEach((item,index)=>{
    if(index === 0){
       item.style.background='green'
    }
    else if(index ===1){
        item.style.background='yellow';

    }
    else {
        item.style.background='Aqua'
    }

});

//--------------
const sonKelime = document.getElementById("son");
sonKelime.setAttribute("style","font-size:5rem;");

// renk Dizesi Fonksiyonu;
function RenkAta()
{
  const s  ="0123456789ABCDEF";
  let  isaret ="#"
  for(let i = 0; i<6; i++){
    isaret +=s[Math.floor(Math.random() * 16)];
  }
  return isaret;

}

function renkDegistir()
{
    sonKelime.style.color=RenkAta();
   
}
setInterval(renkDegistir,1000);
setInterval(TarihGuncelle,1000);


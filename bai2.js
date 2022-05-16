function kiemtra(){

    //masv
   
    var masv1 =/[PH][0-9][0-9][0-9][0-9][0-9]/;
    var masv=document.getElementById("masv").value;
    if(masv==''){
        alert('không được để trống mã SV');
        document.getElementById("masv").style.background='yellow';
    }
    else if(masv1.test(masv)){
        document.getElementById("masv").style.boxShadow='1px 1px 1px 1px green';
        document.getElementById("masv").style.background='white'
        
    }
    else{
        alert('mã SV không hợp lệ');
        document.getElementById("masv").style.background='yellow';


    }
    // họ tên
    var hoten=document.getElementById("hoten").value;
    if(hoten==''){
        alert('không được để trống Họ tên');
        document.getElementById("hoten").style.background='yellow';
    }
    else{
        document.getElementById("hoten").style.boxShadow='1px 1px 1px 1px green';
    }
 
    // email
        var email1 =/[A-Za-z][\w$.]*@[gmail]+\.\w+$/;
        var email = document.getElementById("email").value;
        if(email==''){
            alert('không được để trống Email');
            document.getElementById("email").style.background='yellow';
        }
        else if (email1.test(email)) {
            document.getElementById("email").style.boxShadow='1px 1px 1px 1px green';
        }
          else {
              alert('email không hợp lệ!');
              document.getElementById("email").style.background='yellow';

          }
//giới tính
          var gt=document.getElementsByName("gioitinh");
          if(!gt[0].checked && !gt[1].checked&& !gt[2].checked){
              alert("Bạn phải chọn giới tính")
              document.getElementById("check").focus;
              document.getElementById("check").style.backgroundColor='yellow';
          }
          else{  
        document.getElementById("check").style.backgroundColor='white';
        document.getElementById("check").style.boxShadow='1px 1px 1px 1px green';

          }

 //sothich
 var sothich=document.getElementsByName("sothich");
 if(!sothich[0].checked && !sothich[1].checked&& !sothich[3].checked&&!sothich[4].checked){
  alert("bạn phải chọn sở thích");
  document.getElementById("checksothich").focus;
  document.getElementById("checksothich").style.backgroundColor='yellow';
 }
 else{
     document.getElementById("checksothich").style.backgroundColor='white';
 }

 //quoctich
 var qt =document.getElementById("quoctich");
 if(qt.value=="chọn quốc tịch"){
 alert("Bạn chưa chọn quốc tịch");
 qt.focus;
 qt.style.backgroundColor='yellow'
 }
 else{
     qt.style.backgroundColor='white'
     
 }
    // ghi chú
var Ghichu=document.getElementById("Ghichu").value;
if(Ghichu==''){
    alert('không được để trống Ghi chú');
    document.getElementById("Ghichu").style.background='yellow';
}
if(Ghichu.length<10){
document.getElementById("Ghichu").style.background='yellow';

}

if(Ghichu.length>10){
    document.getElementById("Ghichu").style.boxShadow='1px 1px 1px 1px green';
    document.getElementById("Ghichu").style.background='white'
    
}
if(Ghichu.length<10){
    alert("Bạn đang kí không thành công vì kí tự < 10")
}

else if(masv1.test(masv) &&email1.test(email) &&Ghichu.length > 10 && gt[0].checked || gt[1].checked || gt[2].checked)
if(sothich[0].checked ||sothich[1].checked ||sothich[3].checked ||sothich[4].checked)
{

    alert("Bạn đã đăng kí thành công")
}

}





  
   btn_dangky = document.getElementById('dangKy');
console.log(btn_dangky)
dangKy.addEventListener('click', function(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const masv = document.getElementById('id_sv');
  const hoten = document.getElementById('id_hoten');
  const email = document.getElementById('id_mail');
  const checkbox = document.querySelectorAll('.form-check-input[type="checkbox"]');
  const quoctich = document.querySelector('#quocTich');
  const note = document.getElementById('note');
  note.maxLength = 200;
  
  if (masv.value == ''){
    alert("mã sinh viên không được để trống");
    masv.style.backgroundColor = 'yellow';
  }
  if (hoten.value == ''){
    alert("Họ tên không được để trống");
    // hoten.classList.add('bg-danger')
    hoten.style.backgroundColor = 'yellow';

  }
  if (email.value == ''){
    alert("Email không được để trống");
    email.style.backgroundColor = 'yellow';
  }
  if(!(email.value.match(mailformat))){
    alert("Email phải đúng định dạng");
    email.style.backgroundColor = 'yellow';
  }
  if(!(checkbox[0].checked || checkbox[1].checked || checkbox[2].checked || checkbox[3].checked || checkbox[4].checked  )){
    alert("chọn ít nhất một sở thích");
    checkbox.style.backgroundColor = 'yellow';
  }
  if(quoctich.selectedIndex == 0){
    alert("mời bạn chọn quốc gia");
    quoctich.style.backgroundColor = 'yellow';
  }
  if(quoctich.selectedIndex !=0){
    quoctich.style.backgroundColor = 'white';
  }
  if(note.value.length >= note.maxLength){
    alert("Độ dài nhỏ hơn 200 kí tự");
    note.style.backgroundColor = 'yellow';
    note.value = '';
    note.value.maxLength = 2;
  }
  })

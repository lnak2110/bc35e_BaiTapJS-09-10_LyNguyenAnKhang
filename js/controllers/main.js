var ds = new DSNV();
var validation = new Validation();

function getEleId(id) {
  return document.getElementById(id);
}

getLS();

// Lấy thông tin nhân viên
function layThongTinNV() {
  var taiKhoan = getEleId('tknv').value;
  var hoTen = getEleId('name').value;
  var email = getEleId('email').value;
  var matKhau = getEleId('password').value;
  var ngayLam = getEleId('datepicker').value;
  var luongCoBan = getEleId('luongCB').value;
  var chucVu = getEleId('chucvu').value;
  var gioLam = getEleId('gioLam').value;

  /**
   * Check validation
   */

  var isValid = true;

  // Tài khoản
  isValid &=
    validation.kiemTraRong(taiKhoan, 'tbTKNV', 'Vui lòng nhập tài khoản') &&
    validation.kiemTraDoDai(
      taiKhoan,
      'tbTKNV',
      'Vui lòng nhập từ 4 - 6 ký số',
      4,
      6
    ) &&
    validation.kiemTraKySo(taiKhoan, 'tbTKNV', 'Vui lòng nhập ký số');

  // Họ tên
  isValid &=
    validation.kiemTraRong(hoTen, 'tbTen', 'Vui lòng nhập họ tên') &&
    validation.kiemTraChu(hoTen, 'tbTen', 'Vui lòng nhập chữ');

  // Email
  isValid &=
    validation.kiemTraRong(email, 'tbEmail', 'Vui lòng nhập email') &&
    validation.kiemTraEmail(
      email,
      'tbEmail',
      'Vui lòng nhập đúng định dạng email'
    );

  // Mật khẩu
  isValid &=
    validation.kiemTraRong(matKhau, 'tbMatKhau', 'Vui lòng nhập mật khẩu') &&
    validation.kiemTraDoDai(
      matKhau,
      'tbMatKhau',
      'Vui lòng nhập từ 6 - 10 ký tự',
      6,
      10
    ) &&
    validation.kiemTraMK(
      matKhau,
      'tbMatKhau',
      'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt'
    );

  // Ngày làm
  isValid &=
    validation.kiemTraRong(ngayLam, 'tbNgay', 'Vui lòng nhập ngày làm') &&
    validation.kiemTraNgay(
      ngayLam,
      'tbNgay',
      'Vui lòng nhập định dạng mm/dd/yyyy'
    );

  // Lương cơ bản
  isValid &=
    validation.kiemTraRong(
      luongCoBan,
      'tbLuongCB',
      'Vui lòng nhập lương cơ bản'
    ) &&
    validation.kiemTraKySo(luongCoBan, 'tbLuongCB', 'Vui lòng nhập số') &&
    validation.kiemTraLuongCB(
      luongCoBan,
      'tbLuongCB',
      'Vui lòng nhập từ 1000000 - 20000000',
      1000000,
      20000000
    );

  // Chức vụ
  isValid &= validation.kiemTraRongChucVu(
    'chucvu',
    'tbChucVu',
    'Vui lòng chọn chức vụ'
  );

  // Giờ làm
  isValid &=
    validation.kiemTraRong(gioLam, 'tbGiolam', 'Vui lòng nhập giờ làm') &&
    validation.kiemTraKySo(gioLam, 'tbGiolam', 'Vui lòng nhập số') &&
    validation.kiemTraGioLam(
      gioLam,
      'tbGiolam',
      'Vui lòng nhập từ 80 - 200',
      80,
      200
    );

  if (isValid) {
    var nv = new NhanVien(
      taiKhoan,
      hoTen,
      email,
      matKhau,
      ngayLam,
      luongCoBan,
      chucVu,
      gioLam
    );

    nv.tinhTongLuong();

    nv.xepLoai();

    return nv;
  }

  return null;
}

// Thêm nhân viên
getEleId('btnThemNV').addEventListener('click', function () {
  var nv = layThongTinNV();

  if (nv) {
    ds.themNV(nv);

    hienThiDS(ds.mang);

    getEleId('formInfo').reset();
    getEleId('datepicker').value = new Date().toLocaleDateString('vn-VN');

    setLS();
  }
});

// Hiển thị danh sách nhân viên
function hienThiDS(ds) {
  var noiDungDS = '';

  ds.forEach(function (nv) {
    noiDungDS += `
      <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNV.loai}</td>
        <td>
          <button class="btn btn-info" onclick="suaNV('${nv.taiKhoan}')">Sửa thông tin</button>
          <button class="btn btn-danger" onclick="xoaNV('${nv.taiKhoan}')">Xóa</button>
        </td>
      </tr>
    `;
  });

  getEleId('tableDanhSach').innerHTML = noiDungDS;
}

// Xóa nhân viên
function xoaNV(tk) {
  ds.xoaNV(tk);

  hienThiDS(ds.mang);

  setLS();
}

// Tìm nhân viên theo loại dựa trên từ khóa
getEleId('searchName').addEventListener('keyup', function () {
  var mangTimKiem = ds.timNV(getEleId('searchName').value);

  hienThiDS(mangTimKiem);
});

// Sửa thông tin của nhân viên
function suaNV(tk) {
  getEleId('btnThem').click();
  getEleId('btnCapNhat').disabled = false;
  xoaTBLoi();

  var nv = ds.layThongTinChiTietNV(tk);

  if (nv) {
    getEleId('tknv').value = nv.taiKhoan;
    getEleId('name').value = nv.hoTen;
    getEleId('email').value = nv.email;
    getEleId('password').value = nv.matKhau;
    getEleId('datepicker').value = nv.ngayLam;
    getEleId('luongCB').value = nv.luongCoBan;
    getEleId('chucvu').value = nv.chucVu;
    getEleId('gioLam').value = nv.gioLam;
  }
}

// Cập nhật thông tin của nhân viên
getEleId('btnCapNhat').addEventListener('click', function () {
  var nv = layThongTinNV();

  if (nv) {
    var index = ds.timViTriNV(nv.taiKhoan);

    // Nếu tài khoản nhân viên tồn tại => cập nhật
    if (index === -1) {
      getEleId('tbTKNV').innerHTML = 'Tài khoản không tồn tại để cập nhật';
      getEleId('tbTKNV').style.display = 'block';
    } else {
      getEleId('tbTKNV').style.display = 'none';

      ds.capNhatNV(nv);

      hienThiDS(ds.mang);

      setLS();
    }
  }
});

// Setting khi click thêm nhân viên
getEleId('btnThem').addEventListener('click', function () {
  getEleId('formInfo').reset();
  getEleId('datepicker').value = new Date().toLocaleDateString('vn-VN');
  getEleId('btnCapNhat').disabled = true;
  xoaTBLoi();
});

// Xóa thông báo lỗi
function xoaTBLoi() {
  var ids = document.querySelectorAll(
    '#tbTKNV, #tbTen, #tbEmail, #tbMatKhau, #tbNgay, #tbLuongCB, #tbChucVu, #tbGiolam'
  );

  ids.forEach(function (id) {
    id.innerHTML = '';
    id.style.display = 'none';
  });
}

// Lưu danh sách nhân viên vào localStorage
function setLS() {
  var data = JSON.stringify(ds.mang);
  localStorage.setItem('DSNV', data);
}

// Lấy danh sách nhân viên từ localStorage
function getLS() {
  if (localStorage.getItem('DSNV')) {
    var data = localStorage.getItem('DSNV');
    ds.mang = JSON.parse(data);
    hienThiDS(ds.mang);
  }
}

function NhanVien(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCoBan = +luongCoBan;
  this.chucVu = chucVu;
  this.gioLam = +gioLam;
  this.tongLuong = 0;
  this.loaiNV = {};

  // Tính tổng lương nhân viên
  this.tinhTongLuong = function () {
    if (this.chucVu === 'Sếp') {
      this.tongLuong = this.luongCoBan * 3;
    } else if (this.chucVu === 'Trưởng phòng') {
      this.tongLuong = this.luongCoBan * 2;
    } else if (this.chucVu === 'Nhân viên') {
      this.tongLuong = this.luongCoBan;
    }
  };

  // Xếp loại nhân viên
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      this.loaiNV = {
        loai: 'Xuất sắc',
        loaiKhongDau: 'xuat sac',
      };
    } else if (this.gioLam >= 176) {
      this.loaiNV = {
        loai: 'Giỏi',
        loaiKhongDau: 'gioi',
      };
    } else if (this.gioLam >= 160) {
      this.loaiNV = {
        loai: 'Khá',
        loaiKhongDau: 'kha',
      };
    } else {
      this.loaiNV = {
        loai: 'Trung bình',
        loaiKhongDau: 'trung binh',
      };
    }
  };
}

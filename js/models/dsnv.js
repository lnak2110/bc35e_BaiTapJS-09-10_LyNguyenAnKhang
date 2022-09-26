function DSNV() {
  this.mang = [];

  // Tìm index nhân viên trong mảng
  this.timViTriNV = function (tk) {
    var index = -1;

    this.mang.forEach(function (nv, i) {
      if (nv.taiKhoan === tk) {
        index = i;
      }
    });

    return index;
  };

  // Lấy thông tin chi tiết của nhân viên
  this.layThongTinChiTietNV = function (tk) {
    var index = this.timViTriNV(tk);

    if (index !== -1) {
      return this.mang[index];
    }
  };

  // Thêm nhân viên vào mảng
  this.themNV = function (nv) {
    this.mang.push(nv);
  };

  // Xóa nhân viên trong mảng
  this.xoaNV = function (tk) {
    var index = this.timViTriNV(tk);

    if (index !== -1) {
      this.mang.splice(index, 1);
    }
  };

  // Cập nhật thông tin của nhân viên
  this.capNhatNV = function (nv) {
    var index = this.timViTriNV(nv.taiKhoan);

    if (index !== -1) {
      this.mang[index] = nv;
    }
  };

  // Tìm nhân viên theo loại dựa trên từ khóa
  this.timNV = function (tuKhoa) {
    var mangTimKiem = [];

    this.mang.forEach(function (nv) {
      var loaiNV = nv.loaiNV.loaiKhongDau;

      if (loaiNV.indexOf(tuKhoa.toLowerCase()) !== -1) {
        mangTimKiem.push(nv);
      }
    });

    return mangTimKiem;
  };
}

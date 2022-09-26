function Validation() {
  // Kiểm tra rỗng
  this.kiemTraRong = function (value, errorId, mess) {
    if (value.trim() === '') {
      getEleId(errorId).innerHTML = mess;
      getEleId(errorId).style.display = 'block';
      return false;
    }

    getEleId(errorId).innerHTML = '';
    getEleId(errorId).style.display = 'none';
    return true;
  };

  // Kiểm tra rỗng (chức vụ)
  this.kiemTraRongChucVu = function (selectId, errorId, mess) {
    if (getEleId(selectId).selectedIndex !== 0) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };

  // Kiểm tra độ dài
  this.kiemTraDoDai = function (value, errorId, mess, min, max) {
    if (value.length >= min && value.length <= max) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };

  // Kiểm tra ký số
  this.kiemTraKySo = function (value, errorId, mess) {
    var regex = /^[0-9]+$/;

    if (value.match(regex)) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };

  // Kiểm tra chữ
  this.kiemTraChu = function (value, errorId, mess) {
    var regex =
      '^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ' +
      'ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ' +
      'ụủứừỬỮỰỲỴÝỶỸửữựýỳỵỷỹ\\s]+$';

    if (value.match(regex)) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };

  // Kiểm tra định dạng email
  this.kiemTraEmail = function (value, errorId, mess) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(regex)) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };

  // Kiểm tra mật khẩu
  this.kiemTraMK = function (value, errorId, mess) {
    var regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

    if (value.match(regex)) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };

  // Kiểm tra định dạng ngày
  this.kiemTraNgay = function (value, errorId, mess) {
    var regex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

    if (value.match(regex)) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };

  // Kiểm tra lương cơ bản
  this.kiemTraLuongCB = function (value, errorId, mess, min, max) {
    if (value >= min && value <= max) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };

  // Kiểm tra số giờ làm
  this.kiemTraGioLam = function (value, errorId, mess, min, max) {
    if (value >= min && value <= max) {
      getEleId(errorId).innerHTML = '';
      getEleId(errorId).style.display = 'none';
      return true;
    }

    getEleId(errorId).innerHTML = mess;
    getEleId(errorId).style.display = 'block';
    return false;
  };
}

// Lấy tất cả các club_card
const club_cards = document.querySelectorAll('.club_card');

// Lấy phần chi tiết CLB
const club_details = document.querySelector('.club_details');

// Lấy phần hình ảnh trong club_details__image
const clubDetailsImage = document.querySelector('.club_details__image');

// Lấy các phần tên CLB và liên hệ trong club_details
const clubDetailsName = document.querySelector('.club_details__contect__name');
const clubDetailsDescription = document.querySelector('.club_details__contet__chitiet');
const clubDetailsCellPhone = document.querySelector('.club_details__contact__inffo__cell_phone');
const clubDetailsEmail = document.querySelector('.club_details__contact__inffo__email');
const clubDetailsLink = document.querySelector('.club_details__contact__inffo__link');

// Lặp qua tất cả các club_card và thêm sự kiện click
club_cards.forEach(club_card => {
  club_card.addEventListener('click', (event) => {

    event.stopPropagation(); // Ngừng lan truyền sự kiện click

    // Lấy số lớp 'num_X' của thẻ club_card
    const classNum = Array.from(club_card.classList).find(className => className.startsWith('num_'));

    // Lấy số X từ lớp num_X (ví dụ: 'num_1', 'num_2', ...)
    const clubNumber = classNum ? classNum.split('_')[1] : '';

    // Kiểm tra nếu có số X hợp lệ
    if (clubNumber) {
      // Cập nhật hình ảnh trong club_details__image
      const imageSrc = `../../assets/img/club/list_clubs/img (${clubNumber}).jpg`;
      clubDetailsImage.setAttribute('src', imageSrc);  // Cập nhật hình ảnh
    }

    // Cập nhật tên và mô tả trong phần chi tiết
    const clubName = club_card.querySelector('.club_card__content__name').innerText;
    const clubDescription = club_card.querySelector('.card__content__position').innerText;

    // Cập nhật tên và mô tả trong phần chi tiết
    clubDetailsName.innerText = clubName;
    clubDetailsDescription.innerText = clubDescription;

    // Cập nhật thông tin liên hệ trong phần chi tiết
    const cellPhone = club_card.querySelector('.club_card__info__num_cell_phone').innerText;
    const email = club_card.querySelector('.club_card__info_email').innerText;
    const link = club_card.querySelector('.club_card__info__num_office_phone').innerText;

    clubDetailsCellPhone.innerText = cellPhone;
    clubDetailsEmail.innerText = email;
    clubDetailsLink.innerText = link;

    // Hiển thị phần chi tiết CLB
    club_details.classList.add('show');
  });
});

// Thêm sự kiện click cho phần chi tiết để ẩn khi nhấn ngoài vùng nội dung
club_details.addEventListener('click', (event) => {
  // Nếu người dùng click vào vùng ngoài của club_details, ẩn nó
  if (event.target === club_details) {
    club_details.classList.remove('show'); // Ẩn phần chi tiết
  }
});

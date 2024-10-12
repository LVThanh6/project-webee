const input = document.getElementById('searchbar');

    // Thay đổi nội dung placeholder khi focus
    input.addEventListener('focus', () => {
        input.placeholder = "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _";
    });

    // Khôi phục nội dung placeholder khi không còn focus
    input.addEventListener('blur', () => {
        input.placeholder = "Tiềm kiếm";
    });
$(document).ready(function () {
  const subjects = ["Cat", "Dog", "Sun", "Moon", "Car", "Bird", "City", "Tree", "Flower", "Bike"];
  const gallery = $("#gallery");

  subjects.forEach((subject, index) => {
    const imageUrl = `https://dummyimage.com/300x200/000/fff&text=${encodeURIComponent(subject)}`;
    const id = `img-${index}`;


    const card = `
      <div class="card" id="${id}" data-id="${index}" data-subject="${subject}">
        <img src="${imageUrl}" alt="${subject}">
        <div class="title">${subject}</div>
        <button class="delete-btn">حذف</button>
      </div>
    `;
    gallery.append(card);
  });


  $("#gallery").on("click", ".delete-btn", function () {
    const card = $(this).closest(".card");
    const subject = card.data("subject");
    const id = card.data("id");


    const fakeDeleteUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    $.ajax({
      url: fakeDeleteUrl,
      method: "DELETE",
      success: function () {
        card.fadeOut(300, function () {
          $(this).remove();
        });
      },
      error: function () {
        alert("خطا در حذف تصویر!");
      }
    });
  });
});

const images = [
  {
    imageUrl:
      "https://st.depositphotos.com/1899425/1623/i/600/depositphotos_16232649-stock-photo-moraine-lake-sunrise-colorful-landscape.jpg",
    title: "Mountain Lake",
  },
  {
    imageUrl:
      "https://st.depositphotos.com/1005145/2341/i/600/depositphotos_23418410-stock-photo-pink-flowers-in-the-mountains.jpg",
    title: "Pink sunrise",
  },

  {
    imageUrl:
      "https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpeg",
    title: "River in the mountains",
  },
  {
    imageUrl: "https://7oom.ru/wp-content/uploads/peizaji-22.jpg",
    title: "Evening in the desert",
  },
  {
    imageUrl: "https://7oom.ru/wp-content/uploads/peizaji-26.jpg",
    title: "Sunset in the mountains",
  },
];

const imageContainer = document.getElementById("imageContainer");
images.forEach((imgData, index) => {
  const div = document.createElement("div");
  div.classList.add("imageItem");

  const img = document.createElement("img");
  img.classList.add("img");
  if (index === 0) img.classList.add("active");
  img.src = imgData.imageUrl;
  img.alt = imgData.title;

  const title = document.createElement("p");
  title.innerText = imgData.title;

  div.appendChild(img);
  div.appendChild(title);
  imageContainer.appendChild(div);

  div.addEventListener("click", function () {
    document
      .querySelectorAll(".img")
      .forEach((item) => item.classList.remove("active"));
    img.classList.add("active");
  });
});

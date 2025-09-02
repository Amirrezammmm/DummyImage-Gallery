# DummyImage Gallery 🖼️

A simple gallery project using **[DummyImage](https://dummyimage.com/)** and **jQuery**.  
It generates placeholder images with custom text (subjects) and allows users to **delete images** with a simulated DELETE request via **JSONPlaceholder API**.

---

## ✨ Features

- Generates a gallery of placeholder images from **DummyImage**
- Each image shows a **title** and a **delete button**
- Clicking **Delete**:
  - Sends a fake **DELETE request** to `https://jsonplaceholder.typicode.com/posts/{id}`
  - Smoothly removes the card from the gallery
- Error handling for failed requests
- Clean, card-based UI

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (jQuery)**
- **DummyImage**
- **JSONPlaceholder API** (for fake delete requests)

---

## 📂 Project Structure

project/
│
├── index.html # Main HTML file
│
├── assets/
│ ├── css/
│ │ └── style.css # Custom styles for gallery
│ │
│ └── js/
│ └── main.js # jQuery logic (create + delete)
│
└── README.md


---

## 🚀 How to Use

1. Clone or download the project.
2. Open `index.html` in your browser.
3. The app will generate a gallery of 10 images with random subjects (e.g., Cat, Dog, Car).
4. Click **Delete** on any card to remove it.
   - A fake DELETE request will be sent to JSONPlaceholder.
   - On success, the card will fade out and disappear.

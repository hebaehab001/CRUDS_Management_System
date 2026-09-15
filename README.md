# CRUDS System

A simple product management dashboard built with HTML, CSS, Bootstrap, Font Awesome, and JavaScript.

This project helps users manage a product list by adding new items, searching, updating, and deleting them directly in the browser. All data is stored in the browser with localStorage, so no backend is needed.

## Preview

This is a frontend-only project intended to run locally in the browser.

![Project Preview](https://via.placeholder.com/1200x600?text=CRUDS+System+Preview)

## Features

- Add products with a name, price, category, description, and image
- Validate input before saving data
- Display items in a responsive product grid
- Search products by name in real time
- Highlight matching search text
- Update existing products
- Delete individual items
- Delete all products at once
- Save product data in localStorage

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

## Project Structure

```text
CRUD/
├── index.html                # Main application page
├── README.md                 # Project overview and setup guide
├── css/
│   ├── all.min.css           # Font Awesome styles
│   ├── bootstrap.min.css     # Bootstrap layout and styling
│   └── index.css             # Custom project styles
├── images/
│   ├── devices.jpg           # Example product image
│   └── favicon.ico           # Website favicon
├── js/
│   └── index.js              # CRUD logic, validation, filtering, and storage
├── webfonts/
│   └── ...                   # Font files used by Font Awesome
└── .gitignore                # Optional ignore file for Git
```

## How It Works

1. Fill in the product form.
2. Validate the entered information before saving.
3. Product cards appear immediately in the display section.
4. Use the search box to filter products by name.
5. Matching letters are highlighted in the result list.
6. Product data stays saved in the browser through localStorage.

## Run Locally

No installation is required.

1. Download or clone the repository.
2. Open the project folder.
3. Open index.html in a browser, or run it with Live Server in VS Code.

## Notes

- Data is stored only in the browser on the current device.
- Clearing browser storage will remove all saved products.
- The app saves the image file name, not the file itself.
- If the image file is removed from the images folder, it may not display after refresh.
- This is a frontend-only project and does not include a backend, API, or database.

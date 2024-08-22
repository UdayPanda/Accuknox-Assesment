# React Dashboard Project

This project is a React-based dashboard application that allows you to manage categories and widgets, with features like persistent data storage and a built-in search functionality.

## Features

- **Add and Remove Widgets**: Add new widgets to categories and remove them as needed.
- **Persistent Data**: Data is stored using `localStorage` to maintain state across sessions.
- **Search Functionality**: Search across categories and widgets to quickly find what you need.
- **Responsive Design**: Styled using Tailwind CSS for a modern and responsive UI.
- **Routing**: React Router is used for breadcrumb navigation.

## Installation

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Steps to Install and Run

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/UdayPanda/Accuknox-Assesment.git
    cd Accuknox-Assesment
    ```

    or

    Unzip the repository provided in drive
     ```bash
    cd Accuknox-Assesment
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Application**:
    ```bash
    npm run dev
    ```
    The application will launch in your default browser at `http://localhost:5173/dashboard/`.

## Usage

### Adding Widgets

- Use the form provided in the dashboard to add new widgets to specific categories.
- Widgets can include data in JSON format and are categorized for easy management.
- Add data value as below format for seamless experience - 
(eg.: {
    "labels": ["January", "February", "March", "April"],
    "values": [65, 59, 80, 81],
    "label": "Monthly Sales",
    "title": "Sales Over Time"
}
)

### Searching

- The search bar in the header allows you to search for categories and widgets.
- Results will dynamically update based on your search term.

### Breadcrumb Navigation

- The header includes a breadcrumb navigation that reflects the current path within the application, helping you to track your location within the dashboard.

## Customization

- **Context API**: The application uses React's Context API to manage state across the dashboard.
- **FontAwesome**: Icons are provided by FontAwesome, which you can customize further as needed.
- **Tailwind CSS**: The UI is built with Tailwind CSS, making it easy to customize the appearance of components.



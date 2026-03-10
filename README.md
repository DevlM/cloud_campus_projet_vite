# Mon Restaurant - Restaurant Website

A modern, responsive restaurant website built with React, Vite, and TailwindCSS. Features a dark theme, interactive product filtering, and smooth animations.

## Features

- **Dark Theme**: Custom dark theme using TailwindCSS @theme directive with oklch colors
- **Product Filtering**: Filter products by category, price range, and keywords
- **Responsive Design**: Mobile-first design with TailwindCSS
- **Animations**: Smooth transitions and entrance animations using Motion/React
- **Mock Data**: Comprehensive mock data for products, categories, and keywords
- **Components**:
  - Header with full-screen background image and dark overlay
  - Navbar with navigation links
  - Sidebar with interactive filters
  - ProductCard with hover effects and keyword badges
  - Footer with copyright information

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom theme
- **Fonts**: Google Fonts (Playfair Display)
- **Icons**: Lucide React
- **Animations**: Motion/React
- **Linting**: ESLint

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd vite-project
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Full-screen header with background image
│   ├── Navbar.jsx          # Navigation bar
│   ├── Footer.jsx          # Footer component
│   ├── Sidebar.jsx         # Filter sidebar with categories, price, keywords
│   ├── ProductCard.jsx     # Product display card with animations
│   └── KeywordBadge.jsx    # Reusable keyword badge component
├── mocks/
│   ├── products.jsx        # Product mock data
│   ├── categories.jsx      # Category mock data
│   └── keywords.jsx        # Keyword mock data
├── pages/
│   └── home.jsx            # Main home page with filtering logic
├── globals.css             # Global styles, theme variables, font imports
└── main.jsx               # App entry point
```

## Usage

- Browse products by category (Pizza, Burger, Pasta, etc.)
- Filter by price range using the slider
- Select keywords to filter products by ingredients or features
- View product details with images and badges

## Contributing

Feel free to submit issues and pull requests.

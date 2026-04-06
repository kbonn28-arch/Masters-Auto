# Master's Auto Detail - Professional Auto Detailing Website

A modern, fully functional website for Master's Auto Detailing company in Chico, CA, built with React and featuring a clean, professional design that appeals to car enthusiasts.

## Features

### 🚗 Customer-Facing Features
- **Modern Design**: Clean, professional red and black color scheme tailored for car enthusiasts
- **Responsive Layout**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive Hero Section**: Engaging animations and call-to-action elements
- **Service Showcase**: Detailed information about all detailing services
- **Dynamic Pricing**: Interactive pricing tables with vehicle size selection
- **Quote Request System**: Easy-to-use form for customers to request quotes
- **Ceramic Coating Information**: Dedicated section explaining ceramic coating benefits
- **Vehicle Sizing Guide**: Helps customers determine their vehicle size for accurate pricing
- **Customer Reviews**: Testimonials and ratings from satisfied customers
- **FAQ Section**: Answers to common customer questions
- **Contact Information**: Complete business details with map integration

### 👨‍💼 Admin Backend Features
- **Simple Admin Panel**: User-friendly interface for non-technical owners
- **Quote Management**: View, update status, and manage customer quote requests
- **Service Management**: Add, edit, and remove services
- **Pricing Control**: Update pricing for different vehicle sizes
- **Customer Communication**: Built-in email notifications for new quotes
- **Appointment Management**: Schedule and track customer appointments

### 🛠 Technical Features
- **React 18**: Modern React with hooks and functional components
- **Framer Motion**: Smooth animations and transitions
- **TailwindCSS**: Utility-first CSS framework for consistent styling
- **Express.js Backend**: RESTful API for data management
- **Email Integration**: Automatic email notifications (configurable)
- **SEO Optimized**: Meta tags, semantic HTML, and search-friendly structure
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Start the backend server** (in a separate terminal):
   ```bash
   npm run server
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

### Production Build

1. **Build the React app**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run server
   ```

## Admin Access

For demonstration purposes, the admin panel can be accessed with:
- **Username**: `admin`
- **Password**: `masters2024`

## Configuration

### Email Setup
To enable email notifications, configure the following environment variables:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Business Information
Update the following files with your specific business details:
- `src/components/Header.js` - Phone number and navigation
- `src/components/Contact.js` - Address and contact information
- `src/components/Footer.js` - Footer links and business hours

## Customization

### Colors and Branding
The color scheme is defined in `src/index.css`. Modify the CSS variables to change colors:
- `--color-red`: Primary red accent
- `--color-red-dark`: Darker red for hover states
- `--color-black`: Background color
- `--color-gray`: Secondary gray tones

### Services and Pricing
Update services and pricing in:
- `src/components/Pricing.js` - Service packages and pricing tables
- `src/components/Services.js` - Individual add-on services
- `server.js` - Backend API data (or connect to database)

### Content Sections
Each section of the website is a separate React component:
- `Hero.js` - Main landing section
- `About.js` - Company information and mission
- `CeramicCoating.js` - Ceramic coating details
- `Reviews.js` - Customer testimonials
- `FAQ.js` - Frequently asked questions

## Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables for email configuration
4. Deploy

### Option 2: Traditional Hosting
1. Build the React app: `npm run build`
2. Upload the `build` folder to your hosting provider
3. Configure the backend server on your hosting environment

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "server"]
```

## File Structure

```
masters-auto-detailing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── CeramicCoating.js
│   │   ├── Pricing.js
│   │   ├── SizingGuide.js
│   │   ├── QuoteForm.js
│   │   ├── Reviews.js
│   │   ├── FAQ.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── AdminPanel.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── server.js
├── package.json
├── tailwind.config.js
└── README.md
```

## Support

This website is designed to be easily maintainable by non-technical users. The admin panel provides a simple interface for:

- Managing quote requests
- Updating services and pricing
- Viewing customer information
- Basic content management

For technical support or customizations, the code is well-documented and follows React best practices.

## License

This project is proprietary to Master's Auto Detail. All rights reserved.

---

**Built with ❤️ for Master's Auto Detail in Chico, CA**

🛍️ Smolstore - A Modern E-commerce Experience
🌟 Overview
Smolstore is a modern, responsive e-commerce platform built with Next.js, offering a seamless shopping experience for tech enthusiasts and productivity seekers. The store features a beautiful UI, smooth animations, and an intuitive user interface.

✨ Features
🎨 Beautiful UI/UX

Smooth scroll animations
High-resolution image loading with low-res placeholders
Responsive design for all devices
Modern and clean interface
🛒 Shopping Experience

Product browsing with high-quality images
Interactive product previews
Easy-to-use shopping cart
Smooth checkout process
🎯 Product Categories

Tech Stickers Collection
Medieval Dragon Month Planner
More products coming soon!
🛠️ Technical Features

Client-side state management
Optimized image loading
Smooth scroll-to-section functionality
Responsive navigation
🚀 Tech Stack
Frontend Framework: Next.js
Styling: CSS Modules & Custom CSS
State Management: React Context API
Payment Processing: Stripe
Deployment: AWS Amplify
Image Optimization: Next.js Image Optimization
📦 Installation
Clone the repository:

git clone [your-repo-url]
Install dependencies:

npm install
Create a .env file and add your environment variables:

STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Run the development server:

npm run dev
Open http://localhost:3000 in your browser.

🏗️ Project Structure
online_store/
├── app/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── EmailInput.jsx
│   │   ├── ImageBanner.jsx
│   │   ├── Portal.jsx
│   │   ├── Products.jsx
│   │   └── ScrollToTop.jsx
│   ├── context/
│   │   └── ProductContext.jsx
│   ├── globals.css
│   └── layout.js
├── public/
│   ├── low_res/
│   └── med_res/
└── README.md
🎨 Design System
The project uses a custom design system with:

Colors: Clean, modern color palette
Typography: Readable and accessible fonts
Spacing: Consistent spacing system
Components: Reusable UI components
Animations: Smooth transitions and hover effects
🔧 Development
Running Tests
npm test
Building for Production
npm run build
Linting
npm run lint
🚀 Deployment
This project is configured for deployment on AWS Amplify. See DEPLOYMENT.md for detailed deployment instructions.

Quick Deployment Steps
Push your code to a Git repository
Connect your repository to AWS Amplify
Configure environment variables in the Amplify Console
Deploy your application
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Oluwaseun Familusi - Obafunshy
🙏 Acknowledgments
Built with Next.js
Styled with FantaCSS
Icons by Font Awesome
Made with ❤️ by Obafunshy
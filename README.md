# QR Scanner - QR Code Generator & Reader

A modern, mobile-ready QR code generator and scanner application built with React, TypeScript, and Capacitor. Create QR codes for text, URLs, and contact information, and scan QR codes using your device's camera.

## Features

### 🎯 QR Code Generator
- **Text QR Codes**: Convert any text into QR codes
- **URL QR Codes**: Generate QR codes for websites and links
- **Contact QR Codes**: Create vCard QR codes with contact information
- **Download & Share**: Save QR codes as images or share directly
- **Copy to Clipboard**: Quick copy functionality for generated QR codes

### 📷 QR Code Scanner
- **Live Camera Scanning**: Real-time QR code detection using device camera
- **Image Scanning**: Upload and scan QR codes from gallery images
- **Flashlight Support**: Toggle device flashlight for better scanning in low light
- **Multiple Format Support**: Automatically detects URLs, text, contact cards, and more
- **Smart Result Display**: Formatted display based on QR code content type

## 🖼️ Project Screenshots

### Main Interface
![SwiftNote Studio Interface](/images/arayüz1.png)

### 📱 Mobile Features
- **Native Camera Access**: Uses Capacitor for native camera functionality
- **Responsive Design**: Optimized for mobile and desktop devices
- **Offline Capable**: Works without internet connection
- **Cross-Platform**: Runs on iOS, Android, and web browsers

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Tailwind CSS + shadcn/ui components
- **Mobile**: Capacitor for native device features
- **QR Libraries**: qrcode (generation) + qr-scanner (detection)
- **Build Tool**: Vite
- **State Management**: React hooks

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- For mobile development: Android Studio (Android) or Xcode (iOS)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Can-Ozan/Qr-Code-Generator-And-Reader.git
   cd Qr-Code-Generator-And-Reader
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Mobile Development

To run on mobile devices:

1. **Export to GitHub** using the "Export to GitHub" button in the Lovable interface

2. **Clone your repository locally**
   ```bash
   git clone https://github.com/Can-Ozan/Qr-Code-Generator-And-Reader.git
   cd Qr-Code-Generator-And-Reader
   npm install
   ```

3. **Add mobile platforms**
   ```bash
   # For Android
   npx cap add android
   
   # For iOS (macOS only)
   npx cap add ios
   ```

4. **Build and sync**
   ```bash
   npm run build
   npx cap sync
   ```

5. **Run on device/emulator**
   ```bash
   # Android
   npx cap run android
   
   # iOS
   npx cap run ios
   ```

## Usage Guide

### Generating QR Codes

1. **Text QR Codes**
   - Select "Text" tab
   - Enter your text content
   - Click "Generate QR Code"
   - Download, copy, or share the result

2. **URL QR Codes**
   - Select "URL" tab
   - Enter the website URL (include https://)
   - Generate and share your QR code

3. **Contact QR Codes**
   - Select "Contact" tab
   - Fill in contact information (name, phone, email, organization)
   - Generate a vCard QR code for easy contact sharing

### Scanning QR Codes

1. **Camera Scanning**
   - Click "Start Scanning"
   - Point camera at QR code
   - Results appear automatically when detected
   - Use flashlight toggle for low-light conditions

2. **Image Scanning**
   - Click "Scan from Image"
   - Select image from gallery
   - View detected QR code content

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── AppNavigation.tsx   # Main navigation
│   ├── QRGenerator.tsx     # QR code generation
│   └── QRScanner.tsx       # QR code scanning
├── hooks/
│   └── use-toast.ts        # Toast notifications
├── lib/
│   └── utils.ts           # Utility functions
└── pages/
    └── Index.tsx          # Main application page
```

## Configuration

### Capacitor Configuration
The app is configured for mobile deployment with:
- App ID: `app.lovable.b639fbb0672b41beb85348d802d757f7`
- App Name: `Qr-Code-Generator-And-Reader`
- Hot-reload enabled for development

### Camera Permissions
The app requests camera permissions automatically. Ensure your device/browser allows camera access for full functionality.

## Browser Compatibility

- **Chrome/Edge**: Full support including camera access
- **Firefox**: Full support including camera access
- **Safari**: Full support on iOS/macOS
- **Mobile Browsers**: Native camera integration via Capacitor

## Security & Privacy

- **No Data Storage**: QR codes and scan results are not stored permanently
- **Local Processing**: All QR generation and scanning happens locally
- **No Analytics**: No user tracking or data collection
- **Camera Access**: Only used for QR scanning, not stored or transmitted

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Check the [Capacitor documentation](https://capacitorjs.com/docs) for mobile-specific issues
- Review [Lovable documentation](https://docs.lovable.dev/) for deployment questions

## Acknowledgments

- [QRCode.js](https://github.com/davidshimjs/qrcodejs) for QR code generation
- [QR Scanner](https://github.com/nimiq/qr-scanner) for QR code detection
- [Capacitor](https://capacitorjs.com/) for native mobile features
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Lucide React](https://lucide.dev/) for icons

---

Built with ❤️ using Yusuf Can Ozan

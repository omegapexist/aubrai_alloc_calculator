# 🧬 $AUBRAI Allocation Calculator

Allocation calculator for participating in launches with BioXP loyalty points on Bio Protocol V2 Launchpad.

## ✨ Features

- **Dynamic Calculation**: Adjust total pledge amount between 50M-500M range
- **Real-time Results**: Get your allocation instantly by entering your BioXP points
- **Detailed Analysis**: Normal calculation, maximum limit and potential return information
- **Responsive Design**: Perfect appearance on mobile and desktop devices

## 🚀 Usage

1. **Select Total Pledge Amount**: Use slider to adjust between 50M-500M range (default: 150M)
2. **Enter Your BioXP Points**: Type your BioXP points
3. **Calculate**: See results instantly

## 📊 Calculation Formula

```
user_allocation = min(
   (user_points / total_points_pledged) * tokens_for_sale,
   0.005 * tokens_for_sale
)
```

- **First part**: Normal right based on your points
- **Second part**: Maximum 0.5% limit
- **Result**: The smaller of the two values

## 🎯 Launch Details

- **Target**: $77k worth of $BIO tokens
- **Total Supply**: 2,000,000 $AUBRAI
- **Token Distribution**:
  - Ignition Sale: 400,000 (20%)
  - Liquidity Pool: 120,000 (6%)
  - Treasury: 300,000 (15%)
  - Initial Funders: 402,000 (20.1%)
  - LEVF: 200,000 (10%)
  - VitaDAO: 440,000 (22%)
  - Bio Protocol: 138,000 (6.9%)
- **FDV**: Initial $385k, potential $20M, $5M, $10M, $50M, $100M

## 🛠️ Technical Details

- **HTML5**: Modern semantic markup
- **CSS3**: Gradient backgrounds, responsive grid, modern animations
- **JavaScript**: ES6+ syntax, event handling, calculation logic
- **Responsive**: Mobile-first approach

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Installation

1. Download the files
2. Open `index.html` in your browser
3. Start calculating!

## 📝 License

This project is developed as open source.

---

**Bio Protocol** - Shaping the future of DeSci with $AUBRAI! 🚀

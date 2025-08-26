# $AUBRAI Allocation Calculator

Bio Protocol tabanlı $AUBRAI token dağıtım hesaplayıcısı.

## 🚀 Canlı BIO Fiyat Sistemi

Sistem artık **$BIO token fiyatını canlı olarak** CoinGecko API'den çekiyor ve fiyata göre tüm değerleri dinamik olarak hesaplıyor.

### 📊 Dinamik Hesaplama Parametreleri

- **$0.2 BIO fiyatında**: 
  - TOKENS_FOR_SALE = 46,800
  - INITIAL_FDV = 234,000
- **Fiyat değiştiğinde**: Değerler otomatik oranlanıyor

### 🔄 Canlı Fiyat Entegrasyonu

- **CoinGecko API** ile gerçek zamanlı BIO fiyatı
- **Sayfa yüklendiğinde** otomatik fiyat güncelleme
- **Hata durumunda** varsayılan $0.2 ile devam
- **Header'da canlı fiyat göstergesi**

### 🧮 Oran Hesaplama Formülü

```javascript
// $0.2 = 46,800 TOKENS_FOR_SALE, 234,000 INITIAL_FDV
const tokenRatio = 234000; // 46,800/0.2
const fdvRatio = 1170000;  // 234,000/0.2

TOKENS_FOR_SALE = Math.round(tokenRatio * bioPrice);
INITIAL_FDV = Math.round(fdvRatio * bioPrice);
```

### 🎯 Sistem Özellikleri

- **Başlangıç değeri**: 300M BioXP (güncellendi)
- **Range slider**: 50M - 500M arası
- **BioXP puanlarına göre** adil dağıtım
- **Maksimum 0.5% limiti** (whale koruması)
- **Gerçek zamanlı dolar karşılığı** hesaplama
- **Potansiyel FDV senaryoları** (5M, 10M, 20M, 50M, 100M)

### 💻 Teknik Özellikler

- **Async/await** ile API çağrısı
- **Error handling** ile güvenli çalışma
- **Console logging** ile debug bilgisi
- **Otomatik yeniden hesaplama**
- **Responsive tasarım**

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

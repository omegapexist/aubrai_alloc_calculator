document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const totalPledgeSlider = document.getElementById('totalPledge');
    const totalPledgeValue = document.getElementById('totalPledgeValue');
    const userBioXPInput = document.getElementById('userBioXP');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsSection = document.getElementById('resultsSection');
    
    // Constants - Dinamik hesaplanacak
    let TOKENS_FOR_SALE = 46800; // $0.2 BIO fiyatına göre
    let INITIAL_FDV = 234000; // $0.2 BIO fiyatına göre
    const MAX_ALLOCATION_PERCENT = 0.005; // 0.5%
    const POTENTIAL_FDVS = [20000000, 5000000, 10000000, 50000000, 100000000]; // $20M, $5M, $10M, $50M, $100M
    
    // BIO fiyatını canlı olarak çek
    async function fetchBioPrice() {
        try {
            // CoinGecko API'den BIO fiyatını çek
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bio-protocol&vs_currencies=usd');
            const data = await response.json();
            const bioPrice = data['bio-protocol'].usd;
            
            // Fiyata göre değerleri güncelle
            updateValuesByPrice(bioPrice);
            
            // Fiyat bilgisini göster
            document.getElementById('bioPrice').textContent = `$${bioPrice.toFixed(4)}`;
            
        } catch (error) {
            console.error('BIO fiyatı çekilemedi:', error);
            // Varsayılan değerlerle devam et
            updateValuesByPrice(0.2);
        }
    }
    
    // Fiyata göre değerleri güncelle
    function updateValuesByPrice(bioPrice) {
        // $0.2 = 46800 TOKENS_FOR_SALE, 234000 INITIAL_FDV
        // Oran: 46800/0.2 = 234000, 234000/0.2 = 1170000
        const tokenRatio = 234000; // 46800/0.2
        const fdvRatio = 1170000; // 234000/0.2
        
        TOKENS_FOR_SALE = Math.round(tokenRatio * bioPrice);
        INITIAL_FDV = Math.round(fdvRatio * bioPrice);
        
        console.log(`BIO Fiyatı: $${bioPrice}, TOKENS_FOR_SALE: ${TOKENS_FOR_SALE}, INITIAL_FDV: ${INITIAL_FDV}`);
    }
    
    // Sayfa yüklendiğinde BIO fiyatını çek
    fetchBioPrice();
    
    // Range slider value update
    totalPledgeSlider.addEventListener('input', function() {
        const value = parseInt(this.value);
        totalPledgeValue.textContent = formatNumber(value);
    });
    
    // Set initial value
    totalPledgeValue.textContent = formatNumber(300000000);
    
    // Calculate button
    calculateBtn.addEventListener('click', function() {
        calculateAllocation();
    });
    
    // Calculate with Enter key
    userBioXPInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateAllocation();
        }
    });
    
    // Main calculation function
    function calculateAllocation() {
        const totalPledge = parseInt(totalPledgeSlider.value);
        const userBioXP = parseInt(userBioXPInput.value);
        
        // Validation
        if (!userBioXP || userBioXP < 0) {
            alert('Please enter a valid BioXP score');
            return;
        }
        
        // Allocation calculation formula
        const normalCalculation = (userBioXP / totalPledge) * TOKENS_FOR_SALE;
        const maxLimit = MAX_ALLOCATION_PERCENT * INITIAL_FDV; // 0.5% of Total FDV
        const userAllocation = Math.min(normalCalculation, maxLimit);
        
        // BioXP ratio
        const bioXPRatio = (userBioXP / totalPledge) * 100;
        
        // Potential return calculation - for all FDV levels
        const potentialValues = POTENTIAL_FDVS.map(fdv => (userAllocation / INITIAL_FDV) * fdv);
        
        // Multiplier calculation (how many x)
        const multipliers = POTENTIAL_FDVS.map(fdv => (fdv / INITIAL_FDV).toFixed(1));
        
        // Display results
        displayResults({
            allocation: userAllocation,
            bioXPRatio: bioXPRatio,
            maxLimit: maxLimit,
            normalCalculation: normalCalculation,
            potentialValues: potentialValues,
            multipliers: multipliers
        });
        
        // Make results visible
        resultsSection.style.display = 'block';
        
        // Smooth scroll
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Display results
    function displayResults(results) {
        document.getElementById('allocationResult').textContent = formatCurrency(results.allocation);
        document.getElementById('bioXPRatio').textContent = results.bioXPRatio.toFixed(4) + '%';
        document.getElementById('maxLimit').textContent = formatCurrency(results.maxLimit);

        
        // Display all potential values and multipliers
        document.getElementById('potentialValue20M').textContent = formatCurrency(results.potentialValues[0]);
        document.getElementById('multiplier20M').textContent = results.multipliers[0] + 'x';
        
        document.getElementById('potentialValue5M').textContent = formatCurrency(results.potentialValues[1]);
        document.getElementById('multiplier5M').textContent = results.multipliers[1] + 'x';
        
        document.getElementById('potentialValue10M').textContent = formatCurrency(results.potentialValues[2]);
        document.getElementById('multiplier10M').textContent = results.multipliers[2] + 'x';
        
        document.getElementById('potentialValue50M').textContent = formatCurrency(results.potentialValues[3]);
        document.getElementById('multiplier50M').textContent = results.multipliers[3] + 'x';
        
        document.getElementById('potentialValue100M').textContent = formatCurrency(results.potentialValues[4]);
        document.getElementById('multiplier100M').textContent = results.multipliers[4] + 'x';
    }
    
    // Number formatting (1,000,000)
    function formatNumber(num) {
        return num.toLocaleString('en-US');
    }
    
    // Currency formatting ($1,234.56)
    function formatCurrency(amount) {
        return '$' + amount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    

    

    

});

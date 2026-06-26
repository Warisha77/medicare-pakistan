document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling bindings
    const navCta = document.getElementById('navCtaBtn');
    const heroCta = document.getElementById('heroCtaBtn');
    const targetSection = document.getElementById('checker');

    const scrollToForm = () => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    };

    if(navCta) navCta.addEventListener('click', scrollToForm);
    if(heroCta) heroCta.addEventListener('click', scrollToForm);

    // Dynamic Form Submission Handling
    const form = document.getElementById('medicareForm');
    const resultBox = document.getElementById('resultBox');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Extract values
            const ageInput = parseInt(document.getElementById('age').value, 10);
            const disabilityStatus = document.getElementById('disability').value;
            const healthCondition = document.getElementById('condition').value;

            // Reset box classes
            resultBox.className = 'result-box';
            resultBox.style.display = 'block';

            // Algorithmic evaluation processing
            if (ageInput >= 65) {
                resultBox.classList.add('result-success');
                resultBox.innerHTML = `<strong>🎉 Eligible by Age Target:</strong> You meet standard age requirements (65+) for national Medicare enrollment options. Your standard initial coverage roadmap window opens 3 months prior to your target birth month.`;
            } else if (healthCondition === 'yes') {
                resultBox.classList.add('result-success');
                resultBox.innerHTML = `<strong>📋 Special Condition Route Match:</strong> Individuals with verified diagnoses of ALS or End-Stage Renal Disease (ESRD) typically qualify for accelerated or immediate configurations beneath age 65.`;
            } else if (disabilityStatus === 'yes') {
                resultBox.classList.add('result-success');
                resultBox.innerHTML = `<strong>⏳ Disability Window Standard:</strong> Having collected Social Security Disability Insurance (SSDI) parameters for over 24 continuous months validates coverage assignment entry by month 25.`;
            } else {
                resultBox.classList.add('result-notice');
                resultBox.innerHTML = `<strong>🔍 Alternative Pathway Required:</strong> Parameters do not signal a standard initial profile. General pathways stipulate cross-boundary matches including 65+ age benchmarks or 24-month duration parameters on SSDI cycles.`;
            }
        });
    }
});
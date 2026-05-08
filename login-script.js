document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const card = document.getElementById('loginCard');
    const content = document.getElementById('loginContent');
    const errorMsg = document.getElementById('errorMsg');

    // شرط بسيط: يجب أن يحتوي البريد على علامة @
    if (email.includes('@')) {
        // إخفاء المحتوى القديم وإظهار رسالة تحميل
        content.innerHTML = `
            <h2 style="color: #10b981;">تم التحقق بنجاح!</h2>
            <div class="success-loader"></div>
            <p>جاري توجيهك إلى صفحة المشاريع...</p>
        `;

        // الانتقال بعد ثانية ونصف
        setTimeout(() => {
     
            window.location.href = "../index.html"; 
        }, 1500);

    } else {
        // إذا كان الإيميل خطأ
        errorMsg.style.display = "block";
        card.classList.add('shake');
        
        
        setTimeout(() => {
            card.classList.remove('shake');
        }, 400);
    }
});
const banner = document.querySelector('.banner');
if (banner) {
    banner.addEventListener('click', () => {
        alert('Bem-vindo à Plenitude!');
    });
}

const googleBtn = document.querySelector('.google-btn');
if (googleBtn) {
    googleBtn.addEventListener('click', () => {
        alert('Entrar com Google ainda não implementado.');
    });
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        sessionStorage.setItem('plenitudeLoggedIn', 'true');
        window.location.href = 'index.html';
    });
}

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = 'login.html';
    });
}

const isDashboardPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
const isLoggedIn = sessionStorage.getItem('plenitudeLoggedIn') === 'true';

if (isDashboardPage && !isLoggedIn) {
    window.location.href = 'login.html';
}

const tabButtons = document.querySelectorAll('.settings-tab');
const tabPanes = document.querySelectorAll('.settings-tab-pane');

if (tabButtons.length && tabPanes.length) {
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            tabButtons.forEach((btn) => btn.classList.remove('active'));
            tabPanes.forEach((pane) => pane.classList.remove('active'));

            button.classList.add('active');
            const activePane = document.getElementById(`tab-${tabId}`);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });
}

const profileAvatarInput = document.getElementById('profile-avatar-input');
const profileAvatarPreview = document.getElementById('profile-avatar-preview');

if (profileAvatarInput && profileAvatarPreview) {
    profileAvatarInput.addEventListener('change', (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            profileAvatarPreview.innerHTML = `<img src="${e.target.result}" alt="Avatar" />`;
        };
        reader.readAsDataURL(file);
    });
}

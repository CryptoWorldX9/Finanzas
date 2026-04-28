// layout.js - Carga dinámica del layout común
export async function cargarLayout() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    // Inyectar header y eventos si no existen
    if (!document.querySelector('.top-bar')) {
        const headerHTML = `
            <header class="top-bar">
                <button class="menu-toggle" id="menuToggle">
                    <span class="material-symbols-outlined">menu</span>
                </button>
                <div class="flex items-center gap-3">
                    <span class="text-xs font-bold text-slate-400 uppercase">QuantyA Premium</span>
                </div>
            </header>
        `;
        mainContent.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Inicializar eventos del menú
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar-modern');
    const overlay = document.querySelector('.overlay');

    if (menuToggle) {
        menuToggle.onclick = () => {
            sidebar?.classList.toggle('open');
            overlay?.classList.toggle('active');
        };
    }

    if (overlay) {
        overlay.onclick = () => {
            sidebar?.classList.remove('open');
            overlay.classList.remove('active');
        };
    }

    // Marcar enlace activo según la URL actual
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-item').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

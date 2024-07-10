window.addEventListener('DOMContentLoaded', () => {
    
    var theme = localStorage.getItem('theme');  
    
    if (theme != 'light' && theme != 'dark') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    }
    
    document.documentElement.setAttribute('data-bs-theme', theme);
})

function toggleTheme() {
    
    var currentTheme = document.documentElement.getAttribute('data-bs-theme');
    
    var newTheme = currentTheme == 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', newTheme);
    
    document.documentElement.setAttribute('data-bs-theme', newTheme);
}

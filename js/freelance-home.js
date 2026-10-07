(function () {
    'use strict';
    var services = {
        analysis: {title: 'Entiende qué está pasando en tu negocio.', description: 'Dashboards en Power BI y Looker Studio para explorar ventas, productos y desempeño con indicadores claros.', tools: 'Power BI · Looker Studio · SQL', cta: 'Quiero un dashboard', message: 'Hola Frank, necesito un dashboard o análisis de datos para mi negocio.'},
        engineering: {title: 'Dale una base sólida a tus datos.', description: 'Integra tus fuentes, organiza la información y construye procesos ETL y Data Marts para alimentar tus análisis.', tools: 'SQL · Python · ETL · Data Marts', cta: 'Conversemos sobre mis datos', message: 'Hola Frank, necesito integrar y organizar mis datos con procesos ETL o un Data Mart.'},
        automation: {title: 'Dedica menos tiempo a reportes manuales.', description: 'Automatiza la preparación y validación de información para que tu equipo pueda enfocarse en analizar y decidir.', tools: 'Python · SQL · Reportes', cta: 'Quiero automatizar un proceso', message: 'Hola Frank, quiero automatizar un reporte o proceso de preparación de datos.'}
    };
    var tabs = Array.from(document.querySelectorAll('[data-service]'));
    function select(tab) {
        var data = services[tab.dataset.service];
        tabs.forEach(function (item) { var active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
        document.getElementById('hero-service-title').textContent = data.title;
        document.getElementById('hero-service-description').textContent = data.description;
        document.getElementById('hero-service-tools').textContent = data.tools;
        document.getElementById('hero-service-panel').setAttribute('aria-labelledby', tab.id);
        var contact = document.getElementById('hero-service-contact');
        contact.textContent = data.cta + ' →';
        contact.href = 'https://wa.me/51992148036?text=' + encodeURIComponent(data.message);
    }
    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () { select(tab); });
        tab.addEventListener('keydown', function (event) {
            var next;
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
            if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
            if (event.key === 'Home') next = 0;
            if (event.key === 'End') next = tabs.length - 1;
            if (next !== undefined) { event.preventDefault(); select(tabs[next]); tabs[next].focus(); }
        });
    });
    document.addEventListener('click', function (event) {
        var link = event.target.closest('a[href="#section-main"]');
        if (!link) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        if (document.querySelector('header.hm-open')) document.getElementById('menu-btn').click();
        document.getElementById('btn-exit').click();
        history.replaceState(null, '', '#section-main');
        window.scrollTo(0, 0);
    }, true);
}());

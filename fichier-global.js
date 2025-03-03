document.addEventListener('DOMContentLoaded', function() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.sitewebproduction.com",
        "logo": "https://www.sitewebproduction.com/image/Site web 2.png"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
});

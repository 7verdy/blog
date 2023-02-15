if ((window.location.pathname === '/' ||
    window.location.pathname.includes('/tags/')) && window.innerWidth < 800) {
    $('.articles .summary').each(function () {
        var text = $(this).text();
        if (text.length > 250) {
            $(this).text(text.substring(0, 250) + '...');
        }
    });
}
function goToPage(path, openInNewTab) {
    if (typeof path === 'string' && path.trim() !== '') {
        if (openInNewTab) {
            window.open(path, '_blank');
        } else {
            window.location.href = path;
        }
    } else {
        console.error('Invalid page path provided.');
    }
}

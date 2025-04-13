window.onload = async () => {
    await loadSlider();
    await loadCategories();
    await loadProducts(null, 'Popular');
}

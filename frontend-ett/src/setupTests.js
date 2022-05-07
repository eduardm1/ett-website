window.matchMedia = window.matchMedia || function(query) {
    return {
        matches : false,
        media: query,
        onchange: null,
        addListener : () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
    };
};
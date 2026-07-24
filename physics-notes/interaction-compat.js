(() => {
  const enhanceInteractiveAnchors = (root = document) => {
    root.querySelectorAll?.("a[onclick]:not([href])").forEach((anchor) => {
      anchor.setAttribute("href", "#");
      anchor.setAttribute("role", "button");
      if (!anchor.hasAttribute("tabindex")) anchor.tabIndex = 0;
    });
  };

  enhanceInteractiveAnchors();

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        if (node.matches?.("a[onclick]:not([href])")) {
          node.setAttribute("href", "#");
          node.setAttribute("role", "button");
          if (!node.hasAttribute("tabindex")) node.tabIndex = 0;
        }
        enhanceInteractiveAnchors(node);
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });

  document.addEventListener(
    "click",
    (event) => {
      const anchor = event.target.closest?.('a[onclick][href="#"]');
      if (anchor) event.preventDefault();
    },
    true,
  );
})();

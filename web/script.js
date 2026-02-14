(() => {
    const revealNodes = document.querySelectorAll("[data-reveal]");
    if (!revealNodes.length) {
        return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
        revealNodes.forEach((node) => {
            node.classList.add("is-visible");
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px",
        }
    );

    revealNodes.forEach((node, index) => {
        node.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
        observer.observe(node);
    });
})();

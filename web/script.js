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

    // Enable reveal styles only when JS is running; keep content visible for no-JS scenarios.
    // Mark initially visible blocks as visible to avoid a flash when enabling the reveal mode.
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    revealNodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const isInView = rect.bottom > 0 && rect.top < viewportHeight;
        if (isInView) {
            node.classList.add("is-visible");
        }
    });

    document.documentElement.classList.add("reveal-enabled");

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

    let observedIndex = 0;
    revealNodes.forEach((node) => {
        if (node.classList.contains("is-visible")) {
            return;
        }

        node.style.transitionDelay = `${Math.min(observedIndex * 70, 280)}ms`;
        observedIndex += 1;
        observer.observe(node);
    });
})();

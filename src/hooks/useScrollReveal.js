import { useEffect } from 'react';

const observeRevealElements = (observer) => {
  document.querySelectorAll('.reveal:not(.active)').forEach((el) => observer.observe(el));
};

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observeRevealElements(observer);

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements(observer);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
};

export default useScrollReveal;

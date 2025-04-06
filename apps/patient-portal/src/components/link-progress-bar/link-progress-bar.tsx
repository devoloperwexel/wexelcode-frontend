'use client';

import 'nprogress/nprogress.css';

import NProgress from 'nprogress';
import { useEffect } from 'react';

type PushStateInput = [
  data: any,
  unused: string,
  url?: string | URL | null | undefined
];

export const LinkProgressBar = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleAnchorClick = (event: MouseEvent) => {
      const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
      const currentUrl = location.href;
      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const handleMutation: MutationCallback = () => {
      const anchorElements = document.querySelectorAll('a[href]');
      anchorElements.forEach((anchor) =>
        (anchor as any).addEventListener('click', handleAnchorClick)
      );
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document, { childList: true, subtree: true });

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray: PushStateInput) => {
        NProgress.done();
        return target.apply(thisArg, argArray);
      },
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <style>
      {`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #A51008;
          z-index: 9999999999;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0;
          width: 100px;
          height: 100%;
          opacity: 1;
          box-shadow: none;
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
  );
};

import ElementHandler from './ElementHandler';

const TIMEOUT = 30000;

class Common {
    waitForPageLoading() {
        const LOADING_LOCATOR = '.q-loading-bar';
        $(LOADING_LOCATOR).waitUntil(
            () => ElementHandler.verifyAttribute(
                LOADING_LOCATOR,
                'aria-hidden',
                true,
            ),
            {
                timeout: TIMEOUT,
                timeoutMsg: `pages cannot load after ${TIMEOUT}s `,
            },
        );
    }
}

export default new Common();

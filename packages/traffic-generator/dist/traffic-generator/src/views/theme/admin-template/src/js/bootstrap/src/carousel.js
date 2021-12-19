"use strict";
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./util/index");
const data_1 = __importDefault(require("./dom/data"));
const event_handler_1 = __importDefault(require("./dom/event-handler"));
const manipulator_1 = __importDefault(require("./dom/manipulator"));
const selector_engine_1 = __importDefault(require("./dom/selector-engine"));
const base_component_1 = __importDefault(require("./base-component"));
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
const NAME = 'carousel';
const DATA_KEY = 'bs.carousel';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const SWIPE_THRESHOLD = 40;
const Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true,
};
const DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean',
};
const DIRECTION_NEXT = 'next';
const DIRECTION_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const EVENT_SLIDE = `slide${EVENT_KEY}`;
const EVENT_SLID = `slid${EVENT_KEY}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`;
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_INDICATOR = '[data-bs-target]';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Carousel extends base_component_1.default {
    constructor(element, config) {
        super(element);
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._indicatorsElement = selector_engine_1.default.findOne(SELECTOR_INDICATORS, this._element);
        this._touchSupported =
            'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent);
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return Default;
    }
    static get DATA_KEY() {
        return DATA_KEY;
    }
    // Public
    next() {
        if (!this._isSliding) {
            this._slide(DIRECTION_NEXT);
        }
    }
    nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && (0, index_1.isVisible)(this._element)) {
            this.next();
        }
    }
    prev() {
        if (!this._isSliding) {
            this._slide(DIRECTION_PREV);
        }
    }
    pause(event) {
        if (!event) {
            this._isPaused = true;
        }
        if (selector_engine_1.default.findOne(SELECTOR_NEXT_PREV, this._element)) {
            (0, index_1.triggerTransitionEnd)(this._element);
            this.cycle(true);
        }
        clearInterval(this._interval);
        this._interval = null;
    }
    cycle(event) {
        if (!event) {
            this._isPaused = false;
        }
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
        if (this._config && this._config.interval && !this._isPaused) {
            this._updateInterval();
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
    }
    to(index) {
        this._activeElement = selector_engine_1.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        const activeIndex = this._getItemIndex(this._activeElement);
        if (index > this._items.length - 1 || index < 0) {
            return;
        }
        if (this._isSliding) {
            event_handler_1.default.one(this._element, EVENT_SLID, () => this.to(index));
            return;
        }
        if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
        }
        const direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;
        this._slide(direction, this._items[index]);
    }
    dispose() {
        super.dispose();
        event_handler_1.default.off(this._element, EVENT_KEY);
        this._items = null;
        this._config = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
    }
    // Private
    _getConfig(config) {
        config = {
            ...Default,
            ...config,
        };
        (0, index_1.typeCheckConfig)(NAME, config, DefaultType);
        return config;
    }
    _handleSwipe() {
        const absDeltax = Math.abs(this.touchDeltaX);
        if (absDeltax <= SWIPE_THRESHOLD) {
            return;
        }
        const direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;
        // swipe left
        if (direction > 0) {
            if (index_1.isRTL) {
                this.next();
            }
            else {
                this.prev();
            }
        }
        // swipe right
        if (direction < 0) {
            if (index_1.isRTL) {
                this.prev();
            }
            else {
                this.next();
            }
        }
    }
    _addEventListeners() {
        if (this._config.keyboard) {
            event_handler_1.default.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
        }
        if (this._config.pause === 'hover') {
            event_handler_1.default.on(this._element, EVENT_MOUSEENTER, (event) => this.pause(event));
            event_handler_1.default.on(this._element, EVENT_MOUSELEAVE, (event) => this.cycle(event));
        }
        if (this._config.touch && this._touchSupported) {
            this._addTouchEventListeners();
        }
    }
    _addTouchEventListeners() {
        const start = (event) => {
            if (this._pointerEvent &&
                (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
                this.touchStartX = event.clientX;
            }
            else if (!this._pointerEvent) {
                this.touchStartX = event.touches[0].clientX;
            }
        };
        const move = (event) => {
            // ensure swiping with one touch and not pinching
            if (event.touches && event.touches.length > 1) {
                this.touchDeltaX = 0;
            }
            else {
                this.touchDeltaX = event.touches[0].clientX - this.touchStartX;
            }
        };
        const end = (event) => {
            if (this._pointerEvent &&
                (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
                this.touchDeltaX = event.clientX - this.touchStartX;
            }
            this._handleSwipe();
            if (this._config.pause === 'hover') {
                // If it's a touch-enabled device, mouseenter/leave are fired as
                // part of the mouse compatibility events on first tap - the carousel
                // would stop cycling until user tapped out of it;
                // here, we listen for touchend, explicitly pause the carousel
                // (as if it's the second time we tap on it, mouseenter compat event
                // is NOT fired) and after a timeout (to allow for mouse compatibility
                // events to fire) we explicitly restart cycling
                this.pause();
                if (this.touchTimeout) {
                    clearTimeout(this.touchTimeout);
                }
                this.touchTimeout = setTimeout((event) => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
            }
        };
        selector_engine_1.default.find(SELECTOR_ITEM_IMG, this._element).forEach((itemImg) => {
            event_handler_1.default.on(itemImg, EVENT_DRAG_START, (e) => e.preventDefault());
        });
        if (this._pointerEvent) {
            event_handler_1.default.on(this._element, EVENT_POINTERDOWN, (event) => start(event));
            event_handler_1.default.on(this._element, EVENT_POINTERUP, (event) => end(event));
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        }
        else {
            event_handler_1.default.on(this._element, EVENT_TOUCHSTART, (event) => start(event));
            event_handler_1.default.on(this._element, EVENT_TOUCHMOVE, (event) => move(event));
            event_handler_1.default.on(this._element, EVENT_TOUCHEND, (event) => end(event));
        }
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
            return;
        }
        if (event.key === ARROW_LEFT_KEY) {
            event.preventDefault();
            if (index_1.isRTL) {
                this.next();
            }
            else {
                this.prev();
            }
        }
        else if (event.key === ARROW_RIGHT_KEY) {
            event.preventDefault();
            if (index_1.isRTL) {
                this.prev();
            }
            else {
                this.next();
            }
        }
    }
    _getItemIndex(element) {
        this._items =
            element && element.parentNode ? selector_engine_1.default.find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
    }
    _getItemByDirection(direction, activeElement) {
        const isNextDirection = direction === DIRECTION_NEXT;
        const isPrevDirection = direction === DIRECTION_PREV;
        const activeIndex = this._getItemIndex(activeElement);
        const lastItemIndex = this._items.length - 1;
        const isGoingToWrap = (isPrevDirection && activeIndex === 0) || (isNextDirection && activeIndex === lastItemIndex);
        if (isGoingToWrap && !this._config.wrap) {
            return activeElement;
        }
        const delta = direction === DIRECTION_PREV ? -1 : 1;
        const itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    }
    _triggerSlideEvent(relatedTarget, eventDirectionName) {
        const targetIndex = this._getItemIndex(relatedTarget);
        const fromIndex = this._getItemIndex(selector_engine_1.default.findOne(SELECTOR_ACTIVE_ITEM, this._element));
        return event_handler_1.default.trigger(this._element, EVENT_SLIDE, {
            relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex,
        });
    }
    _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
            const activeIndicator = selector_engine_1.default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
            activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
            activeIndicator.removeAttribute('aria-current');
            const indicators = selector_engine_1.default.find(SELECTOR_INDICATOR, this._indicatorsElement);
            for (let i = 0; i < indicators.length; i++) {
                if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) ===
                    this._getItemIndex(element)) {
                    indicators[i].classList.add(CLASS_NAME_ACTIVE);
                    indicators[i].setAttribute('aria-current', 'true');
                    break;
                }
            }
        }
    }
    _updateInterval() {
        const element = this._activeElement || selector_engine_1.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        if (!element) {
            return;
        }
        const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
        if (elementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = elementInterval;
        }
        else {
            this._config.interval = this._config.defaultInterval || this._config.interval;
        }
    }
    _slide(direction, element) {
        const activeElement = selector_engine_1.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        const activeElementIndex = this._getItemIndex(activeElement);
        const nextElement = element || (activeElement && this._getItemByDirection(direction, activeElement));
        const nextElementIndex = this._getItemIndex(nextElement);
        const isCycling = Boolean(this._interval);
        const directionalClassName = direction === DIRECTION_NEXT ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = direction === DIRECTION_NEXT ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        const eventDirectionName = direction === DIRECTION_NEXT ? DIRECTION_LEFT : DIRECTION_RIGHT;
        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE)) {
            this._isSliding = false;
            return;
        }
        const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
        if (slideEvent.defaultPrevented) {
            return;
        }
        if (!activeElement || !nextElement) {
            // Some weirdness is happening, so we bail
            return;
        }
        this._isSliding = true;
        if (isCycling) {
            this.pause();
        }
        this._setActiveIndicatorElement(nextElement);
        this._activeElement = nextElement;
        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
            nextElement.classList.add(orderClassName);
            (0, index_1.reflow)(nextElement);
            activeElement.classList.add(directionalClassName);
            nextElement.classList.add(directionalClassName);
            const transitionDuration = (0, index_1.getTransitionDurationFromElement)(activeElement);
            event_handler_1.default.one(activeElement, 'transitionend', () => {
                nextElement.classList.remove(directionalClassName, orderClassName);
                nextElement.classList.add(CLASS_NAME_ACTIVE);
                activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
                this._isSliding = false;
                setTimeout(() => {
                    event_handler_1.default.trigger(this._element, EVENT_SLID, {
                        relatedTarget: nextElement,
                        direction: eventDirectionName,
                        from: activeElementIndex,
                        to: nextElementIndex,
                    });
                }, 0);
            });
            (0, index_1.emulateTransitionEnd)(activeElement, transitionDuration);
        }
        else {
            activeElement.classList.remove(CLASS_NAME_ACTIVE);
            nextElement.classList.add(CLASS_NAME_ACTIVE);
            this._isSliding = false;
            event_handler_1.default.trigger(this._element, EVENT_SLID, {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex,
            });
        }
        if (isCycling) {
            this.cycle();
        }
    }
    // Static
    static carouselInterface(element, config) {
        let data = data_1.default.getData(element, DATA_KEY);
        let _config = {
            ...Default,
            ...manipulator_1.default.getDataAttributes(element),
        };
        if (typeof config === 'object') {
            _config = {
                ..._config,
                ...config,
            };
        }
        const action = typeof config === 'string' ? config : _config.slide;
        if (!data) {
            data = new Carousel(element, _config);
        }
        if (typeof config === 'number') {
            data.to(config);
        }
        else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') {
                throw new TypeError(`No method named "${action}"`);
            }
            data[action]();
        }
        else if (_config.interval && _config.ride) {
            data.pause();
            data.cycle();
        }
    }
    static jQueryInterface(config) {
        return this.each(function () {
            Carousel.carouselInterface(this, config);
        });
    }
    static dataApiClickHandler(event) {
        const target = (0, index_1.getElementFromSelector)(this);
        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
            return;
        }
        const config = {
            ...manipulator_1.default.getDataAttributes(target),
            ...manipulator_1.default.getDataAttributes(this),
        };
        const slideIndex = this.getAttribute('data-bs-slide-to');
        if (slideIndex) {
            config.interval = false;
        }
        Carousel.carouselInterface(target, config);
        if (slideIndex) {
            data_1.default.getData(target, DATA_KEY).to(slideIndex);
        }
        event.preventDefault();
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
event_handler_1.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
event_handler_1.default.on(window, EVENT_LOAD_DATA_API, () => {
    const carousels = selector_engine_1.default.find(SELECTOR_DATA_RIDE);
    for (let i = 0, len = carousels.length; i < len; i++) {
        Carousel.carouselInterface(carousels[i], data_1.default.getData(carousels[i], DATA_KEY));
    }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */
(0, index_1.defineJQueryPlugin)(NAME, Carousel);
exports.default = Carousel;
//# sourceMappingURL=carousel.js.map
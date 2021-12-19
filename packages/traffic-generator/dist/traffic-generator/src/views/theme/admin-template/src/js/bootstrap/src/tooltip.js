"use strict";
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Popper = __importStar(require("@popperjs/core"));
const index_1 = require("./util/index");
const sanitizer_1 = require("./util/sanitizer");
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
const NAME = 'tooltip';
const DATA_KEY = 'bs.tooltip';
const EVENT_KEY = `.${DATA_KEY}`;
const CLASS_PREFIX = 'bs-tooltip';
const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)',
};
const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: index_1.isRTL ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: index_1.isRTL ? 'right' : 'left',
};
const Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' +
        '<div class="tooltip-arrow"></div>' +
        '<div class="tooltip-inner"></div>' +
        '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: sanitizer_1.DefaultAllowlist,
    popperConfig: null,
};
const Event = {
    HIDE: `hide${EVENT_KEY}`,
    HIDDEN: `hidden${EVENT_KEY}`,
    SHOW: `show${EVENT_KEY}`,
    SHOWN: `shown${EVENT_KEY}`,
    INSERTED: `inserted${EVENT_KEY}`,
    CLICK: `click${EVENT_KEY}`,
    FOCUSIN: `focusin${EVENT_KEY}`,
    FOCUSOUT: `focusout${EVENT_KEY}`,
    MOUSEENTER: `mouseenter${EVENT_KEY}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY}`,
};
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW = 'show';
const HOVER_STATE_SHOW = 'show';
const HOVER_STATE_OUT = 'out';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Tooltip extends base_component_1.default {
    constructor(element, config) {
        if (typeof Popper === 'undefined') {
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        }
        super(element);
        // private
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null;
        // Protected
        this.config = this._getConfig(config);
        this.tip = null;
        this._setListeners();
    }
    // Getters
    static get Default() {
        return Default;
    }
    static get NAME() {
        return NAME;
    }
    static get DATA_KEY() {
        return DATA_KEY;
    }
    static get Event() {
        return Event;
    }
    static get EVENT_KEY() {
        return EVENT_KEY;
    }
    static get DefaultType() {
        return DefaultType;
    }
    // Public
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle(event) {
        if (!this._isEnabled) {
            return;
        }
        if (event) {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger.click = !context._activeTrigger.click;
            if (context._isWithActiveTrigger()) {
                context._enter(null, context);
            }
            else {
                context._leave(null, context);
            }
        }
        else {
            if (this.getTipElement().classList.contains(CLASS_NAME_SHOW)) {
                this._leave(null, this);
                return;
            }
            this._enter(null, this);
        }
    }
    dispose() {
        clearTimeout(this._timeout);
        event_handler_1.default.off(this._element, this.constructor.EVENT_KEY);
        event_handler_1.default.off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
        if (this.tip && this.tip.parentNode) {
            this.tip.parentNode.removeChild(this.tip);
        }
        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;
        if (this._popper) {
            this._popper.destroy();
        }
        this._popper = null;
        this.config = null;
        this.tip = null;
        super.dispose();
    }
    show() {
        if (this._element.style.display === 'none') {
            throw new Error('Please use show on visible elements');
        }
        if (!(this.isWithContent() && this._isEnabled)) {
            return;
        }
        const showEvent = event_handler_1.default.trigger(this._element, this.constructor.Event.SHOW);
        const shadowRoot = (0, index_1.findShadowRoot)(this._element);
        const isInTheDom = shadowRoot === null
            ? this._element.ownerDocument.documentElement.contains(this._element)
            : shadowRoot.contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) {
            return;
        }
        const tip = this.getTipElement();
        const tipId = (0, index_1.getUID)(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this._element.setAttribute('aria-describedby', tipId);
        this.setContent();
        if (this.config.animation) {
            tip.classList.add(CLASS_NAME_FADE);
        }
        const placement = typeof this.config.placement === 'function'
            ? this.config.placement.call(this, tip, this._element)
            : this.config.placement;
        const attachment = this._getAttachment(placement);
        this._addAttachmentClass(attachment);
        const container = this._getContainer();
        data_1.default.setData(tip, this.constructor.DATA_KEY, this);
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.appendChild(tip);
        }
        event_handler_1.default.trigger(this._element, this.constructor.Event.INSERTED);
        this._popper = Popper.createPopper(this._element, tip, this._getPopperConfig(attachment));
        tip.classList.add(CLASS_NAME_SHOW);
        const customClass = typeof this.config.customClass === 'function'
            ? this.config.customClass()
            : this.config.customClass;
        if (customClass) {
            tip.classList.add(...customClass.split(' '));
        }
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
            [].concat(...document.body.children).forEach((element) => {
                event_handler_1.default.on(element, 'mouseover', (0, index_1.noop)());
            });
        }
        const complete = () => {
            const prevHoverState = this._hoverState;
            this._hoverState = null;
            event_handler_1.default.trigger(this._element, this.constructor.Event.SHOWN);
            if (prevHoverState === HOVER_STATE_OUT) {
                this._leave(null, this);
            }
        };
        if (this.tip.classList.contains(CLASS_NAME_FADE)) {
            const transitionDuration = (0, index_1.getTransitionDurationFromElement)(this.tip);
            event_handler_1.default.one(this.tip, 'transitionend', complete);
            (0, index_1.emulateTransitionEnd)(this.tip, transitionDuration);
        }
        else {
            complete();
        }
    }
    hide() {
        if (!this._popper) {
            return;
        }
        const tip = this.getTipElement();
        const complete = () => {
            if (this._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
                tip.parentNode.removeChild(tip);
            }
            this._cleanTipClass();
            this._element.removeAttribute('aria-describedby');
            event_handler_1.default.trigger(this._element, this.constructor.Event.HIDDEN);
            if (this._popper) {
                this._popper.destroy();
                this._popper = null;
            }
        };
        const hideEvent = event_handler_1.default.trigger(this._element, this.constructor.Event.HIDE);
        if (hideEvent.defaultPrevented) {
            return;
        }
        tip.classList.remove(CLASS_NAME_SHOW);
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
            []
                .concat(...document.body.children)
                .forEach((element) => event_handler_1.default.off(element, 'mouseover', index_1.noop));
        }
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        if (this.tip.classList.contains(CLASS_NAME_FADE)) {
            const transitionDuration = (0, index_1.getTransitionDurationFromElement)(tip);
            event_handler_1.default.one(tip, 'transitionend', complete);
            (0, index_1.emulateTransitionEnd)(tip, transitionDuration);
        }
        else {
            complete();
        }
        this._hoverState = '';
    }
    update() {
        if (this._popper !== null) {
            this._popper.update();
        }
    }
    // Protected
    isWithContent() {
        return Boolean(this.getTitle());
    }
    getTipElement() {
        if (this.tip) {
            return this.tip;
        }
        const element = document.createElement('div');
        element.innerHTML = this.config.template;
        this.tip = element.children[0];
        return this.tip;
    }
    setContent() {
        const tip = this.getTipElement();
        this.setElementContent(selector_engine_1.default.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
        tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW);
    }
    setElementContent(element, content) {
        if (element === null) {
            return;
        }
        if (typeof content === 'object' && (0, index_1.isElement)(content)) {
            if (content.jquery) {
                content = content[0];
            }
            // content is a DOM node or a jQuery
            if (this.config.html) {
                if (content.parentNode !== element) {
                    element.innerHTML = '';
                    element.appendChild(content);
                }
            }
            else {
                element.textContent = content.textContent;
            }
            return;
        }
        if (this.config.html) {
            if (this.config.sanitize) {
                content = (0, sanitizer_1.sanitizeHtml)(content, this.config.allowList, this.config.sanitizeFn);
            }
            element.innerHTML = content;
        }
        else {
            element.textContent = content;
        }
    }
    getTitle() {
        let title = this._element.getAttribute('data-bs-original-title');
        if (!title) {
            title =
                typeof this.config.title === 'function'
                    ? this.config.title.call(this._element)
                    : this.config.title;
        }
        return title;
    }
    updateAttachment(attachment) {
        if (attachment === 'right') {
            return 'end';
        }
        if (attachment === 'left') {
            return 'start';
        }
        return attachment;
    }
    // Private
    _initializeOnDelegatedTarget(event, context) {
        const dataKey = this.constructor.DATA_KEY;
        context = context || data_1.default.getData(event.delegateTarget, dataKey);
        if (!context) {
            context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
            data_1.default.setData(event.delegateTarget, dataKey, context);
        }
        return context;
    }
    _getOffset() {
        const { offset } = this.config;
        if (typeof offset === 'string') {
            return offset.split(',').map((val) => Number.parseInt(val, 10));
        }
        if (typeof offset === 'function') {
            return (popperData) => offset(popperData, this._element);
        }
        return offset;
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: 'flip',
                    options: {
                        altBoundary: true,
                        fallbackPlacements: this.config.fallbackPlacements,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: this._getOffset(),
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: this.config.boundary,
                    },
                },
                {
                    name: 'arrow',
                    options: {
                        element: `.${this.constructor.NAME}-arrow`,
                    },
                },
                {
                    name: 'onChange',
                    enabled: true,
                    phase: 'afterWrite',
                    fn: (data) => this._handlePopperPlacementChange(data),
                },
            ],
            onFirstUpdate: (data) => {
                if (data.options.placement !== data.placement) {
                    this._handlePopperPlacementChange(data);
                }
            },
        };
        return {
            ...defaultBsPopperConfig,
            ...(typeof this.config.popperConfig === 'function'
                ? this.config.popperConfig(defaultBsPopperConfig)
                : this.config.popperConfig),
        };
    }
    _addAttachmentClass(attachment) {
        this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
    }
    _getContainer() {
        if (this.config.container === false) {
            return document.body;
        }
        if ((0, index_1.isElement)(this.config.container)) {
            return this.config.container;
        }
        return selector_engine_1.default.findOne(this.config.container);
    }
    _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
    }
    _setListeners() {
        const triggers = this.config.trigger.split(' ');
        triggers.forEach((trigger) => {
            if (trigger === 'click') {
                event_handler_1.default.on(this._element, this.constructor.Event.CLICK, this.config.selector, (event) => this.toggle(event));
            }
            else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER
                    ? this.constructor.Event.MOUSEENTER
                    : this.constructor.Event.FOCUSIN;
                const eventOut = trigger === TRIGGER_HOVER
                    ? this.constructor.Event.MOUSELEAVE
                    : this.constructor.Event.FOCUSOUT;
                event_handler_1.default.on(this._element, eventIn, this.config.selector, (event) => this._enter(event));
                event_handler_1.default.on(this._element, eventOut, this.config.selector, (event) => this._leave(event));
            }
        });
        this._hideModalHandler = () => {
            if (this._element) {
                this.hide();
            }
        };
        event_handler_1.default.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
        if (this.config.selector) {
            this.config = {
                ...this.config,
                trigger: 'manual',
                selector: '',
            };
        }
        else {
            this._fixTitle();
        }
    }
    _fixTitle() {
        const title = this._element.getAttribute('title');
        const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');
        if (title || originalTitleType !== 'string') {
            this._element.setAttribute('data-bs-original-title', title || '');
            if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
                this._element.setAttribute('aria-label', title);
            }
            this._element.setAttribute('title', '');
        }
    }
    _enter(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);
        if (event) {
            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }
        if (context.getTipElement().classList.contains(CLASS_NAME_SHOW) ||
            context._hoverState === HOVER_STATE_SHOW) {
            context._hoverState = HOVER_STATE_SHOW;
            return;
        }
        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;
        if (!context.config.delay || !context.config.delay.show) {
            context.show();
            return;
        }
        context._timeout = setTimeout(() => {
            if (context._hoverState === HOVER_STATE_SHOW) {
                context.show();
            }
        }, context.config.delay.show);
    }
    _leave(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);
        if (event) {
            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
        }
        if (context._isWithActiveTrigger()) {
            return;
        }
        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;
        if (!context.config.delay || !context.config.delay.hide) {
            context.hide();
            return;
        }
        context._timeout = setTimeout(() => {
            if (context._hoverState === HOVER_STATE_OUT) {
                context.hide();
            }
        }, context.config.delay.hide);
    }
    _isWithActiveTrigger() {
        for (const trigger in this._activeTrigger) {
            if (this._activeTrigger[trigger]) {
                return true;
            }
        }
        return false;
    }
    _getConfig(config) {
        const dataAttributes = manipulator_1.default.getDataAttributes(this._element);
        Object.keys(dataAttributes).forEach((dataAttr) => {
            if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
                delete dataAttributes[dataAttr];
            }
        });
        if (config && typeof config.container === 'object' && config.container.jquery) {
            config.container = config.container[0];
        }
        config = {
            ...this.constructor.Default,
            ...dataAttributes,
            ...(typeof config === 'object' && config ? config : {}),
        };
        if (typeof config.delay === 'number') {
            config.delay = {
                show: config.delay,
                hide: config.delay,
            };
        }
        if (typeof config.title === 'number') {
            config.title = config.title.toString();
        }
        if (typeof config.content === 'number') {
            config.content = config.content.toString();
        }
        (0, index_1.typeCheckConfig)(NAME, config, this.constructor.DefaultType);
        if (config.sanitize) {
            config.template = (0, sanitizer_1.sanitizeHtml)(config.template, config.allowList, config.sanitizeFn);
        }
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        if (this.config) {
            for (const key in this.config) {
                if (this.constructor.Default[key] !== this.config[key]) {
                    config[key] = this.config[key];
                }
            }
        }
        return config;
    }
    _cleanTipClass() {
        const tip = this.getTipElement();
        const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);
        if (tabClass !== null && tabClass.length > 0) {
            tabClass.map((token) => token.trim()).forEach((tClass) => tip.classList.remove(tClass));
        }
    }
    _handlePopperPlacementChange(popperData) {
        const { state } = popperData;
        if (!state) {
            return;
        }
        this.tip = state.elements.popper;
        this._cleanTipClass();
        this._addAttachmentClass(this._getAttachment(state.placement));
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function () {
            let data = data_1.default.getData(this, DATA_KEY);
            const _config = typeof config === 'object' && config;
            if (!data && /dispose|hide/.test(config)) {
                return;
            }
            if (!data) {
                data = new Tooltip(this, _config);
            }
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') {
                    throw new TypeError(`No method named "${config}"`);
                }
                data[config]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */
(0, index_1.defineJQueryPlugin)(NAME, Tooltip);
exports.default = Tooltip;
//# sourceMappingURL=tooltip.js.map
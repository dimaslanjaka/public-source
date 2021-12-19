export default class PerfectScrollbar {
    constructor(element: any, userSettings?: {});
    element: any;
    settings: {
        handlers: string[];
        maxScrollbarLength: any;
        minScrollbarLength: any;
        scrollingThreshold: number;
        scrollXMarginOffset: number;
        scrollYMarginOffset: number;
        suppressScrollX: boolean;
        suppressScrollY: boolean;
        swipeEasing: boolean;
        useBothWheelAxes: boolean;
        wheelPropagation: boolean;
        wheelSpeed: number;
    };
    containerWidth: any;
    containerHeight: any;
    contentWidth: any;
    contentHeight: any;
    isRtl: boolean;
    isNegativeScroll: boolean;
    negativeScrollAdjustment: number;
    event: EventManager;
    ownerDocument: any;
    scrollbarXRail: HTMLDivElement;
    scrollbarX: HTMLDivElement;
    scrollbarXActive: any;
    scrollbarXWidth: any;
    scrollbarXLeft: any;
    scrollbarXBottom: number;
    isScrollbarXUsingBottom: boolean;
    scrollbarXTop: number;
    railBorderXWidth: number;
    railXMarginWidth: number;
    railXWidth: any;
    railXRatio: any;
    scrollbarYRail: HTMLDivElement;
    scrollbarY: HTMLDivElement;
    scrollbarYActive: any;
    scrollbarYHeight: any;
    scrollbarYTop: any;
    scrollbarYRight: number;
    isScrollbarYUsingRight: boolean;
    scrollbarYLeft: number;
    scrollbarYOuterWidth: number;
    railBorderYWidth: number;
    railYMarginHeight: number;
    railYHeight: any;
    railYRatio: any;
    reach: {
        x: string;
        y: string;
    };
    isAlive: boolean;
    lastScrollTop: number;
    lastScrollLeft: any;
    update(): void;
    onScroll(e: any): void;
    destroy(): void;
    removePsClasses(): void;
}
import EventManager from "./lib/event-manager";
//# sourceMappingURL=index.d.ts.map
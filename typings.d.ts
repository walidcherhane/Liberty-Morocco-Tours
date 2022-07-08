type WOWOptions = {
  boxClass?: string;
  animateClass?: string;
  offset?: number;
  mobile?: boolean;
  live?: boolean;
  callback?: () => void;
  scrollContainer?: HTMLElement;
  resetAnimation?: boolean;
};
declare module 'wowjs' {
  class WOW {
    constructor(options?: WOWOptions);
    init(): void;
    animateClass(element: any, animation: string, callback: Function): void;
    animate(element: any, animation: string, callback: Function): void;
    box(element: any): void;
    callback(): void;
    custom(selector: string, callback: Function): void;
    destroy(): void;
    disabled(): void;
    generate(): void;
    isMobile(): boolean;
    scrollContainer(container: any): void;
    scroll(callback: Function): void;
    scrolled(callback: Function): void;
    sequence(selector: string): void;
    sync(selector: string): void;
    static animateClass(
      element: any,
      animation: string,
      callback: Function,
    ): void;
  }
}

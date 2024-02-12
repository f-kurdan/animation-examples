export function setStyleProperties(rangeInput: HTMLInputElement, rangeValue: string) {
    const value = parseInt(rangeValue);
    const trackWidth = (((Math.abs(value) / 200) * 100) * (0.59)) - 5 + 'px';

    if (value >= 0) {
        rangeInput?.style.setProperty('--before-width', '0');
        rangeInput?.style.setProperty('--after-width', trackWidth);
    } else {
        rangeInput?.style.setProperty('--before-width', trackWidth);
        rangeInput?.style.setProperty('--after-width', '0');
    }
}
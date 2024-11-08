import isMobile from 'ismobilejs';

export function useDevice() {
  const device = isMobile(window.navigator);

  const isTouchDevice =
    device.phone || device.any || device.tablet || device.apple.tablet;

  return { device, isTouchDevice };
}

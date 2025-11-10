type BadgeValue = number | "dot" | null;
/** Shape options for image icon containers */
type ImageIconShape = "circle" | "square";
/** Size behavior options for image scaling */
type ImageIconSize = "cover" | "stretch" | "fit";
/** Ring configuration for selected image icons */
interface ImageIconRing {
    /** Whether to show ring around the image */
    enabled: boolean;
    /** Width of the ring in pixels (default: 2.0) */
    width?: number;
}
/** Image icon configuration object */
interface ImageIcon {
    /** Shape of the icon container */
    shape: ImageIconShape;
    /** Image scaling behavior */
    size: ImageIconSize;
    /** Image source - either base64 data URI or HTTP/HTTPS URL */
    image: string;
    /** Optional ring configuration for selected and unselected states */
    ring?: ImageIconRing;
}
interface TabItem {
    /** Unique id you use in your router (e.g., 'home') */
    id: string;
    /** Title shown under the icon (optional if you want icon-only) */
    title?: string;
    /** SF Symbol name (e.g., 'house', 'sparkles') - compulsory fallback when imageIcon fails */
    systemIcon: string;
    /** Or provide an asset name bundled on iOS (selected/unselected are tinted by system) */
    image?: string;
    /** Optional enhanced image icon with shape, size, and remote/base64 support */
    imageIcon?: ImageIcon;
    /** Optional badge number or 'dot' */
    badge?: BadgeValue;
}
interface TabsBarConfigureOptions {
    items: TabItem[];
    /** Which tab is selected initially */
    initialId?: string;
    /** Show immediately (default true) */
    visible?: boolean;
    /** Color for the selected tab icon (hex or RGBA format) */
    selectedIconColor?: string;
    /** Color for unselected tab icons (hex or RGBA format) */
    unselectedIconColor?: string;
    /** Opacity applied to tab titles (0-1, default 0.7) */
    titleOpacity?: number;
}
interface SelectOptions {
    id: string;
}
interface SetBadgeOptions {
    id: string;
    value: BadgeValue;
}
interface SafeAreaInsets {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
type TabInteractionType = "tap" | "longPress";
interface TabSelectionEvent {
    id: string;
    interaction: TabInteractionType;
}
interface TabsBarPlugin {
    configure(options: TabsBarConfigureOptions): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    select(options: SelectOptions): Promise<void>;
    setBadge(options: SetBadgeOptions): Promise<void>;
    getSafeAreaInsets(): Promise<SafeAreaInsets>;
    /** Fires when user taps or long-presses a tab */
    addListener(eventName: "selected", listenerFunc: (ev: TabSelectionEvent) => void): Promise<{
        remove: () => void;
    }>;
}

/** Named export for the TabsBar plugin within the larger library */
declare const TabsBar: TabsBarPlugin;

export { type BadgeValue, type SafeAreaInsets, type SelectOptions, type SetBadgeOptions, type TabItem, TabsBar, type TabsBarConfigureOptions, type TabsBarPlugin };

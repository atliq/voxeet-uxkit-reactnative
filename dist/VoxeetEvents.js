import { NativeModules, NativeEventEmitter } from 'react-native';
const { RNVoxeetConferencekit } = NativeModules;
export default class VoxeetEvents {
    constructor() {
        this.events = new NativeEventEmitter(RNVoxeetConferencekit);
    }
    addListener(type, listener) {
        this.events.addListener(type, listener);
    }
    // public removeListener<K extends keyof EventMap>(
    //   type: K,
    //   listener: (event: EventMap[K]) => void
    // ): void {
    //   this.events.removeAllListeners(type, listener);
    // }
    removeAllListeners(type) {
        this.events.removeAllListeners(type);
    }
}
//# sourceMappingURL=VoxeetEvents.js.map
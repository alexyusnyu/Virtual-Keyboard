const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null,
    },

    properties: {
        value: "",
        capslock: false
    },

    init() {


    },

    _createKeys() {

    },

    _triggerEvents(handlerName) {
        console.log("Event Triggered! Event Name: " + handlerName);
    },

    _toggleCapsLock() {
        console.log("Caps Lock Toggled!");
    },

    open(initialValue, oninput, onclose) {

    },

    close() {

    }
}
window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
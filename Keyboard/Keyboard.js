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
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements

        this.elements.main.classList.add("keyboard", "1keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");

        // Add to Dom
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);




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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    template: '<div>Hello, world</div>'
})
export class HelloWorld extends Vue {
    public static DoLog() {
        console.log("Doing logging now!");
    }

    public DoClassLog() {
        console.log("Doing class log!");
    }
}
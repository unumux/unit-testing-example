import assert from "assert";
import {add} from "../index.js";

describe('add', function() {
    it("should add two numbers", function() {
        assert.equal(add(3,4), 7);
    });
});
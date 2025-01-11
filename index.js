console.log("Hello via Bun!");

/** @import { Message } from "./typedef" */

/**
 * @satisfies {Message}
 */
const _message = "Hello";

/**
 * @type {Message}
 */
const _messageUsingType = "Hello";
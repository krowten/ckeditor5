/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module clipboard
 */

export { default as Clipboard } from './clipboard';
export {
	default as ClipboardPipeline,
	type ClipboardContentInsertionEvent,
	type ClipboardInputTransformationEvent,
	type ClipboardInputTransformationData,
	type ClipboardOutputEvent
} from './clipboardpipeline';
export { default as DragDrop } from './dragdrop';
export { default as PastePlainText } from './pasteplaintext';
export type { ViewDocumentClipboardInputEvent } from './clipboardobserver';

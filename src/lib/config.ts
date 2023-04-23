import { createBlock, createConfig, createGroup, createPanel } from './config.builder';
import { EditBoolean, EditFile, EditInterface, EditPlaintext, ListPlaintext, ViewFile } from './config.interfaces';

export default createConfig('https://cloud.knksolutions.pt/v1', '63f246ea28374c583dd5').addGroup(
	createGroup().addPanel(
		createPanel('6442cfe96229be0ea6ba', 'watchfaces')
			.addIdBlock()
			.addBlock(createBlock('name'))
			.addBlock(
				createBlock('isPremium')
				.setEditInterface(new EditBoolean())
			)
			.addBlock(
				createBlock('showClock')
				.setEditInterface(new EditBoolean())
			)
			.addBlock(
				createBlock('watchMedia')
				.setEditInterface(new EditFile("app"))
				.setViewInterface(new ViewFile("app"))
			)
			.addBlock(
				createBlock('watchFile')
				.setEditInterface(new EditFile("app"))
				.setViewInterface(new ViewFile("app"))
			)
			.addBlock(
				createBlock('fileType')
				.setEditInterface(new EditPlaintext().setCreateValue("image"))
			)
			.addBlock(
				createBlock('faceType')
				.setEditInterface(new EditPlaintext().setCreateValue("file"))
			)
			.addBlock(
				createBlock('faceModel')
				.setEditInterface(new EditPlaintext().setCreateValue("portrait"))
			)
	)
);
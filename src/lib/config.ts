import { createBlock, createConfig, createGroup, createPanel } from './config.builder';
import { EditBoolean, EditFile, EditInterface, EditPlaintext, EditSelect, ListPlaintext, ViewFile } from './config.interfaces';

export default createConfig('https://cloud.knksolutions.pt/v1', '63f246ea28374c583dd5')

	.addGroup(
	createGroup()
		.addPanel(
		createPanel('6442cfe96229be0ea6ba', 'watchfaces')
			//.addIdBlock()
			.addBlock(createBlock('name'))
			.addBlock(
				createBlock('isPremium')
				.setEditInterface(new EditBoolean().setDefaultChecked(true))
			)
			.addBlock(
				createBlock('showClock')
				.setEditInterface(new EditBoolean().setDefaultChecked(false))
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
				.setEditInterface(
					new EditSelect()
						.setOptions([
							{ value: 'file', label: 'File' },
							{ value: 'builder', label: 'Builder' }
						])
						.setDefaultOption('file')
				)
			)
			.addBlock(
				createBlock('faceModel')
				.setEditInterface(
					new EditSelect()
						.setOptions([
							{ value: 'photo', label: 'Photo Basic' },
							{ value: 'live', label: 'Live Basic' },
							{ value: 'portrait', label: 'Portrait' },
							{ value: 'meridian', label: 'Meridian' }
						])
						.setDefaultOption('portrait')
				)
			)
	)
);
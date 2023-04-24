import { Dashboard, Label, createBlock, createConfig, createGroup, createLabel, createPanel } from './config.builder';
import { EditBoolean, EditFile, EditInterface, EditPlaintext, EditSelect, ListPlaintext, ViewFile } from './config.interfaces';

export default createConfig('https://cloud.knksolutions.pt/v1', '63f246ea28374c583dd5')
	.setName('AppwriteCMS')
	.setIcon('🚀')
	.setDashboard(
		new Dashboard()
		.setMotd('Welcome to the AppwriteCMS demo!')
	)
	.addGroup(
		createGroup()
			.setName('Newipe')
			.setIcon('👋')
			.addPanel(
				createPanel('6442cfe96229be0ea6ba', 'watchfaces')
					//.addIdBlock()
					.addDefaultLabel()
					.addLabel(
						createLabel("Premium")
						.setIcon('🔒')
						.setQueries(["equal(\"isPremium\", true)"])
					)
					.addLabel(
						createLabel("Free")
						.setIcon('🔓')
						.setQueries(["equal(\"isPremium\", false)"])
					)
					.setName('Watchfaces')
					.setIcon('⌚️')
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
							.setEditInterface(
								new EditSelect()
									.setOptions([
										{ value: 'image', label: 'Image' },
										{ value: 'mp4', label: 'MP4' },
										{ value: 'gif', label: 'GIF' }
									])
									.setDefaultOption('image')
							)
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
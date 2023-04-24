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
					.addBlock(
						createBlock('name')
							// .setAttribute("Nome da Watch Face - (Vai no title do Site)")
					)
					.addBlock(
						createBlock('isPremium')
							// .setAttribute("Watchface é premium?")
							.setEditInterface(new EditBoolean().setDefaultChecked(true))
					)
					.addBlock(
						createBlock('showClock')
							// .setAttribute("Relogio por cima do PRINT?")
							.setEditInterface(new EditBoolean().setDefaultChecked(false))
					)
					.addBlock(
						createBlock('watchMedia')
							// .setAttribute("Watch Face Print")
							.setEditInterface(new EditFile("app"))
							.setViewInterface(new ViewFile("app"))
					)
					.addBlock(
						createBlock('watchFile')
							// .setAttribute("Arquivo da Watch Face")
							.setEditInterface(new EditFile("app"))
							.setViewInterface(new ViewFile("app"))
					)
					.addBlock(
						createBlock('tagId')
							// .setAttribute("Tag ID")
					)
					.addBlock(
						createBlock('fileType')
							// .setAttribute("Watch Media é imagem, mp4 ou gif?")
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
							// .setAttribute("Watch Face é arquivo ou builder(Construida no APP)?")
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
							// .setAttribute("Modelo da Watch Face")
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
					.addBlock(
						createBlock('sort')
						.setEditInterface(
							new EditPlaintext()
								.setCreateValue("1")
						)
					)
					
			)
			.addPanel(
				createPanel('6442cfe96229be0ea6ba', 'tags')
					.addIdBlock()
					.setName('Tags')
					.setIcon('🏷️')
					.addBlock(
						createBlock('name')
							//.setAttribute("Nome da Tag")
					)
			)
			
	);
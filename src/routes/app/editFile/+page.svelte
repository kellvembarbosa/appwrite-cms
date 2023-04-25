<script lang="ts">
	import { AppwriteService } from '$lib/appwrite';
	import { JSONEditor } from 'svelte-jsoneditor';

	let bucketID = '643e91e6affa10788232';
	let fileID = '';
	let fileTextArea = '';

    let newFile = true;

	let content = {
		text: fileTextArea,
		json: {}
	};

	const deleteFile = async () => {
		try {
            console.log("newFile: ", newFile)
            if (!newFile) {
                await AppwriteService.deleteFile(bucketID, fileID);
                console.log('File deleted');
            }

			const blob = new Blob([content.text], { type: 'application/json' });
			// Crie um objeto File a partir do objeto Blob e atribua um nome ao arquivo
			const nomeDoArquivo = `newipe-${fileID}.json`;
			const file = new File([blob], nomeDoArquivo, { type: 'application/json' });

			await AppwriteService.createFile(bucketID, file, fileID.length > 0 ? fileID : null);
		} catch (error) {
			console.log(error);
		}
		/* var blob = new Blob([file], { type: file.mimeType+';charset=utf-8' });

        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(blob);*/
	};
</script>

<div class="col-span-6 sm:col-span-3 p-12">
	<JSONEditor bind:content />

	<!-- <textarea class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" rows="10" bind:value={fileTextArea}></textarea>
     -->
	<div class="mt-1">
		<div class="mt-1">
			<label for={bucketID} class="block text-sm font-medium text-gray-700 pb-1"> Bucket ID </label>
			<input
				type="text"
				id={bucketID}
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
				bind:value={bucketID}
			/>
		</div>
        <div class="mt-1">
            <label for={"newFile"} class="block text-sm font-medium text-gray-700 pb-1"> Novo Arquivo</label>
            <input
                type="checkbox"
                id={"newFile"}
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                bind:checked={newFile}
            />
        </div>
		<div class="mt-1">
			<label for={fileID} class="block text-sm font-medium text-gray-700 pb-1"> File ID </label>
			<input
				type="text"
				id={fileID}
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
				bind:value={fileID}
			/>
		</div>

		<div class="mt-4">
			<button
				on:click={deleteFile}
				class="
            inline-flex
            justify-center
            py-2
            px-4
            border
            border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
            p-12
        "
				disabled={fileID.length == 0}>SAVE FILE</button
			>
		</div>
	</div>
</div>

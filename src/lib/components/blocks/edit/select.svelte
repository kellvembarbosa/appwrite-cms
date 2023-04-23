<script lang="ts">
    import type { Block, Group, Panel } from '$lib/config.builder';
    import type { EditSelect } from '$lib/config.interfaces';
    import type { Models } from 'appwrite';
  
    export let config: EditSelect;
    export let document: (any & Models.Document) | null;
    export let value: any | null;
    export let panel: Panel;
    export let group: Group;
    export let block: Block;
    export let ready = true;
  
    // Prevents compilation errors
    config; document; value; panel; group; block; ready;
  
    let selectedValue = value;
  
    function onSelectChange(e: any) {
      selectedValue = e.target.value;
    }

    if (document === null && config.defaultOption !== null) {
        selectedValue = config.defaultOption;
    }
  </script>
  
  <select
    class="disabled:opacity-25 w-full p-3 bg-white border-2 rounded-md border-slate-200 focus:outline-none focus:ring ring-gray-600"
    name={block.attribute}
    on:change={onSelectChange}
    bind:value={selectedValue}
    disabled={document !== null && config.editDisabled}
  >
    {#each config.options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>